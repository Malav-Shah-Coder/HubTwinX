import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export const sendDemoEmail = createServerFn({ method: "POST" })
  .validator((data: Record<string, string>) => data)
  .handler(async ({ data }) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "mail.hubtwinx.com",
        port: 465,
        secure: true,
        auth: {
          user: "info@hubtwinx.com",
          pass: "Hub@MS1708",
        },
      });

      const text = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join("\n");
      const html = `<h2>New Form Submission (HubTwinX)</h2><ul>${Object.entries(data).map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`).join("")}</ul>`;

      await transporter.sendMail({
        from: '"HubTwinX Website" <info@hubtwinx.com>',
        to: "info@hubtwinx.com",
        subject: "New Website Form Submission",
        text,
        html,
      });

      return { success: true };
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send email.");
    }
  });
