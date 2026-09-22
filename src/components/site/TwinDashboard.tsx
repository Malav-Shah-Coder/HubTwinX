import { Activity, AlertTriangle, Battery, Building2, Sun, Thermometer } from "lucide-react";

import { useTranslation } from "react-i18next";

const getTiles = (t: any) => [
  { label: t("home.dashboard.t1", "Energy consumption"), icon: Activity, meta: t("home.dashboard.m1", "Site • live") },
  { label: t("home.dashboard.t2", "Solar generation"), icon: Sun, meta: t("home.dashboard.m2", "On-site generation") },
  { label: t("home.dashboard.t3", "Battery storage"), icon: Battery, meta: t("home.dashboard.m3", "Charge / discharge") },
  { label: t("home.dashboard.t4", "Environment"), icon: Thermometer, meta: t("home.dashboard.m4", "Temperature • humidity • air") },
  { label: t("home.dashboard.t5", "Spaces & rooms"), icon: Building2, meta: t("home.dashboard.m5", "Floors • zones • areas") },
  { label: t("home.dashboard.t6", "Alerts"), icon: AlertTriangle, meta: t("home.dashboard.m6", "Conditions needing attention") },
];

const bars = [34, 52, 41, 68, 57, 76, 62, 88, 71, 59, 66, 45];

export function TwinDashboard() {
  const { t } = useTranslation();
  const tiles = getTiles(t);
  
  return (
    <div className="surface-panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-7">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-brand-green pulse-node" />
          <p className="font-display text-sm tracking-wide">{t("home.dashboard.title", "HubTwinX™ Site Environment")}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {[
            t("home.dashboard.tab1", "Energy"),
            t("home.dashboard.tab2", "Infrastructure"),
            t("home.dashboard.tab3", "Equipment"),
            t("home.dashboard.tab4", "Environment"),
            t("home.dashboard.tab5", "Operations")
          ].map((tVal, i) => (
            <span
              key={tVal}
              className={`rounded-full border px-3 py-1 ${
                i === 0 ? "border-primary/60 text-foreground" : "border-border"
              }`}
            >
              {tVal}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <p className="eyebrow">{t("home.dashboard.graphTitle", "Consumption pattern")}</p>
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
            {t("home.dashboard.graphDesc", "Illustrative view of how consumption, generation and equipment behaviour appear inside one digital environment.")}
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
