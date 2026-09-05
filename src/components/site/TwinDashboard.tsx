import { Activity, AlertTriangle, Battery, Building2, Sun, Thermometer } from "lucide-react";

const tiles = [
  { label: "Energy consumption", icon: Activity, meta: "Site • live" },
  { label: "Solar generation", icon: Sun, meta: "On-site generation" },
  { label: "Battery storage", icon: Battery, meta: "Charge / discharge" },
  { label: "Environment", icon: Thermometer, meta: "Temperature • humidity • air" },
  { label: "Spaces & rooms", icon: Building2, meta: "Floors • zones • areas" },
  { label: "Alerts", icon: AlertTriangle, meta: "Conditions needing attention" },
];

const bars = [34, 52, 41, 68, 57, 76, 62, 88, 71, 59, 66, 45];

export function TwinDashboard() {
  return (
    <div className="surface-panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-7">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-brand-green pulse-node" />
          <p className="font-display text-sm tracking-wide">HubTwinX™ Site Environment</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {["Energy", "Infrastructure", "Equipment", "Environment", "Operations"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1 ${
                i === 0 ? "border-primary/60 text-foreground" : "border-border"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <p className="eyebrow">Consumption pattern</p>
          <div className="mt-6 flex h-44 items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundImage: "var(--gradient-brand)",
                  opacity: 0.35 + (h / 100) * 0.65,
                }}
              />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Illustrative view of how consumption, generation and equipment behaviour appear
            inside one digital environment.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <li
                key={t.label}
                className="rounded-xl border border-border bg-secondary/30 p-4 transition-colors hover:border-primary/50"
              >
                <Icon className="size-5 text-brand-cyan" />
                <p className="mt-3 text-sm font-semibold">{t.label}</p>
                <p className="text-xs text-muted-foreground">{t.meta}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
