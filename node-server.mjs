import http from "node:http";
import { Readable } from "node:stream";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --------------------------------------------------
// Paths
// --------------------------------------------------

const outputDir = path.join(__dirname, ".output");
const serverDir = path.join(outputDir, "server");
const publicDir = path.join(outputDir, "public");

const workerPath = path.join(serverDir, "index.mjs");

// --------------------------------------------------
// Load Nitro / Cloudflare Worker
// --------------------------------------------------

const workerModule = await import(
  pathToFileURL(workerPath).href
);

const worker = workerModule.default || workerModule;

// --------------------------------------------------
// MIME types
// --------------------------------------------------

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",

  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",

  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",

  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg"
};

// --------------------------------------------------
// Cloudflare ASSETS replacement for Node
// --------------------------------------------------

const ASSETS = {
  async fetch(request) {
    try {
      const url = new URL(request.url);

      let pathname = decodeURIComponent(url.pathname);

      // Prevent directory traversal
      pathname = path.posix.normalize(pathname);

      if (pathname.includes("..")) {
        return new Response("Forbidden", {
          status: 403
        });
      }

      // Remove leading slash
      let relativePath = pathname.replace(/^\/+/, "");

      // Root
      if (!relativePath) {
        relativePath = "index.html";
      }

      const filePath = path.join(publicDir, relativePath);

      // Make sure requested file stays inside public directory
      const resolvedPublic = path.resolve(publicDir);
      const resolvedFile = path.resolve(filePath);

      if (
        resolvedFile !== resolvedPublic &&
        !resolvedFile.startsWith(resolvedPublic + path.sep)
      ) {
        return new Response("Forbidden", {
          status: 403
        });
      }

      let file;

      try {
        file = await fs.readFile(resolvedFile);
      } catch {
        return new Response("Not Found", {
          status: 404
        });
      }

      const extension = path.extname(resolvedFile).toLowerCase();

      return new Response(file, {
        status: 200,
        headers: {
          "Content-Type":
            mimeTypes[extension] ||
            "application/octet-stream",

          "Cache-Control":
            "public, max-age=31536000"
        }
      });

    } catch (error) {
      console.error("ASSETS ERROR:", error);

      return new Response("Asset Error", {
        status: 500
      });
    }
  }
};

// --------------------------------------------------
// Node HTTP server
// --------------------------------------------------

const port = Number(process.env.PORT || 3005);
const host = process.env.HOST || "0.0.0.0";

const server = http.createServer(async (req, res) => {
  try {
    const protocol =
      req.headers["x-forwarded-proto"] ||
      (req.socket.encrypted ? "https" : "http");

    const hostHeader =
      req.headers.host ||
      `localhost:${port}`;

    const url =
      `${protocol}://${hostHeader}${req.url}`;

    // ----------------------------------------------
    // Headers
    // ----------------------------------------------

    const headers = new Headers();

    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        headers.set(key, value.join(", "));
      } else if (value !== undefined) {
        headers.set(key, value);
      }
    }

    // ----------------------------------------------
    // Request body
    // ----------------------------------------------

    let body;

    if (
      req.method !== "GET" &&
      req.method !== "HEAD"
    ) {
      body = await new Promise((resolve, reject) => {
        const chunks = [];

        req.on("data", chunk => {
          chunks.push(chunk);
        });

        req.on("end", () => {
          resolve(Buffer.concat(chunks));
        });

        req.on("error", reject);
      });
    }

    // ----------------------------------------------
    // Web Request
    // ----------------------------------------------

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
      duplex: "half"
    });

    // ----------------------------------------------
    // Cloudflare environment
    // ----------------------------------------------

    const env = {
      ASSETS
    };

    // ----------------------------------------------
    // Cloudflare execution context
    // ----------------------------------------------

    const context = {
      waitUntil(promise) {
        Promise.resolve(promise).catch(error => {
          console.error(
            "waitUntil error:",
            error
          );
        });
      },

      passThroughOnException() {
        // Cloudflare-specific behavior.
        // Not required when running under Node.
      }
    };

    // ----------------------------------------------
    // Run Nitro Worker
    // ----------------------------------------------

    const response = await worker.fetch(
      request,
      env,
      context
    );

    // ----------------------------------------------
    // Response
    // ----------------------------------------------

    res.statusCode = response.status;

    if (response.statusText) {
      res.statusMessage = response.statusText;
    }

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    const readable = Readable.fromWeb(
      response.body
    );

    readable.on("error", error => {
      console.error(
        "Response stream error:",
        error
      );

      if (!res.headersSent) {
        res.statusCode = 500;
      }

      res.end();
    });

    readable.pipe(res);

  } catch (error) {

    console.error("");
    console.error(
      "=========================================="
    );
    console.error(
      "NODE SERVER ERROR"
    );
    console.error(
      "=========================================="
    );
    console.error(error);
    console.error(error?.stack);
    console.error(
      "=========================================="
    );
    console.error("");

    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader(
        "Content-Type",
        "text/plain; charset=utf-8"
      );
    }

    res.end(
      `Internal Server Error\n\n${
        error?.stack ||
        error?.message ||
        error
      }`
    );
  }
});

// --------------------------------------------------
// Start server
// --------------------------------------------------

server.listen(port, host, () => {
  console.log("");
  console.log(
    "=========================================="
  );
  console.log(
    "HobTwinX Node Server"
  );
  console.log(
    "=========================================="
  );
  console.log(
    `Running on: http://${host}:${port}`
  );
  console.log(
    `Public:     ${publicDir}`
  );
  console.log(
    `Worker:     ${workerPath}`
  );
  console.log(
    "=========================================="
  );
  console.log("");
});