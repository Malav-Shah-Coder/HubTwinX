import { useState } from "react";
import { BatteryCharging, Fan, Lightbulb, Plug, Sun, Gauge } from "lucide-react";

type SystemKey = "lighting" | "hvac" | "battery" | "ev" | "solar" | "equipment";

const systems: {
  key: SystemKey;
  label: string;
  icon: typeof Fan;
  onLabel: string;
  offLabel: string;
  note: string;
}[] = [
  {
    key: "lighting",
    label: "Lighting",
    icon: Lightbulb,
    onLabel: "Zones active",
    offLabel: "Zones off",
    note: "Switch lighting zones on or off across floors and areas.",
  },
  {
    key: "hvac",
    label: "HVAC",
    icon: Fan,
    onLabel: "Cooling active",
    offLabel: "Standby",
    note: "Adjust HVAC operation based on conditions and schedules.",
  },
  {
    key: "battery",
    label: "Battery",
    icon: BatteryCharging,
    onLabel: "Discharging to site",
    offLabel: "Idle",
    note: "Change how stored energy supports the site.",
  },
  {
    key: "ev",
    label: "EV Charging",
    icon: Plug,
    onLabel: "Charging",
    offLabel: "Paused",
    note: "Manage charging points and charging state.",
  },
  {
    key: "solar",
    label: "Solar",
    icon: Sun,
    onLabel: "Exporting to site",
    offLabel: "Curtailed",
    note: "See and manage on-site generation.",
  },
  {
    key: "equipment",
    label: "Equipment",
    icon: Gauge,
    onLabel: "Running",
    offLabel: "Stopped",
    note: "Monitor critical equipment and respond to alerts.",
  },
];

export function ControlRoom() {
  const [state, setState] = useState<Record<SystemKey, boolean>>({
    lighting: true,
    hvac: true,
    battery: false,
    ev: true,
    solar: true,
    equipment: true,
  });
  const [active, setActive] = useState<SystemKey>("lighting");

  const activeSystem = systems.find((s) => s.key === active)!;
  const activeCount = Object.values(state).filter(Boolean).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
      <div className="surface-panel p-5 sm:p-6">
        <p className="eyebrow">Site control</p>
        <h3 className="mt-2 text-xl font-semibold">Connected systems</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {systems.map((s) => {
            const on = state[s.key];
            const Icon = s.icon;
            return (
              <li key={s.key}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(s.key)}
                  onFocus={() => setActive(s.key)}
                  onClick={() => {
                    setActive(s.key);
                    setState((p) => ({ ...p, [s.key]: !p[s.key] }));
                  }}
                  className={`group w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                    active === s.key
                      ? "border-primary/60 bg-secondary/70 glow-brand"
                      : "border-border bg-secondary/30 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className={`size-5 transition-colors ${
                        on ? "text-brand-cyan" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
                        on ? "bg-brand-green/70" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`block size-4 rounded-full bg-foreground transition-transform duration-300 ${
                          on ? "translate-x-4" : ""
                        }`}
                      />
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {on ? s.onLabel : s.offLabel}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">{activeSystem.note}</p>
      </div>

      <div className="surface-panel relative overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Digital twin</p>
            <h3 className="mt-2 text-xl font-semibold">Live site view</h3>
          </div>
          <p className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {activeCount}/6 systems active
          </p>
        </div>

        <svg viewBox="0 0 520 340" className="mt-4 w-full" role="img" aria-label="Interactive site digital twin">
          <defs>
            <linearGradient id="ctrlEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.16 253)" />
              <stop offset="55%" stopColor="oklch(0.73 0.13 205)" />
              <stop offset="100%" stopColor="oklch(0.72 0.19 148)" />
            </linearGradient>
          </defs>

          {/* building shell */}
          <g stroke="url(#ctrlEdge)" fill="none" strokeWidth="1.4" opacity="0.85">
            <path d="M120 250 L120 120 L260 60 L400 120 L400 250 L260 300 Z" />
            <path d="M120 120 L260 180 L400 120" />
            <path d="M260 180 L260 300" />
            <path d="M120 185 L260 240 L400 185" />
          </g>

          {/* solar */}
          <g opacity={state.solar ? 1 : 0.25}>
            <path d="M200 92 L262 68 L318 92 L258 116 Z" fill="oklch(0.55 0.16 253 / 45%)" stroke="url(#ctrlEdge)" />
          </g>

          {/* lighting */}
          <g opacity={state.lighting ? 1 : 0.18}>
            {[
              [160, 170],
              [210, 190],
              [300, 195],
              [355, 175],
              [230, 145],
              [300, 145],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="oklch(0.83 0.19 128 / 65%)" className="pulse-node" />
            ))}
          </g>

          {/* hvac */}
          <g opacity={state.hvac ? 1 : 0.22}>
            <rect x="330" y="96" width="46" height="26" rx="5" fill="oklch(0.73 0.13 205 / 35%)" stroke="url(#ctrlEdge)" />
            <circle cx="353" cy="109" r="7" fill="none" stroke="oklch(0.73 0.13 205)" className={state.hvac ? "pulse-node" : ""} />
          </g>

          {/* battery */}
          <g opacity={state.battery ? 1 : 0.25}>
            <rect x="66" y="228" width="40" height="52" rx="6" fill="oklch(0.72 0.19 148 / 25%)" stroke="url(#ctrlEdge)" />
            <rect x="74" y={state.battery ? 244 : 262} width="24" height={state.battery ? 28 : 10} rx="3" fill="oklch(0.72 0.19 148 / 70%)" />
          </g>

          {/* ev */}
          <g opacity={state.ev ? 1 : 0.25}>
            <rect x="424" y="236" width="26" height="44" rx="6" fill="oklch(0.55 0.16 253 / 35%)" stroke="url(#ctrlEdge)" />
            <circle cx="437" cy="252" r="5" fill="oklch(0.73 0.13 205)" className={state.ev ? "pulse-node" : ""} />
          </g>

          {/* equipment */}
          <g opacity={state.equipment ? 1 : 0.25}>
            <rect x="188" y="248" width="140" height="34" rx="6" fill="oklch(0.55 0.16 253 / 22%)" stroke="url(#ctrlEdge)" />
            <circle cx="206" cy="265" r="5" fill="oklch(0.83 0.19 128)" className={state.equipment ? "pulse-node" : ""} />
          </g>

          {/* energy flows */}
          <g stroke="url(#ctrlEdge)" strokeWidth="1.6" fill="none">
            <path d="M106 254 L188 262" className={state.battery ? "flow-line" : ""} opacity={state.battery ? 1 : 0.2} />
            <path d="M328 262 L424 258" className={state.ev ? "flow-line" : ""} opacity={state.ev ? 1 : 0.2} />
            <path d="M258 116 L258 178" className={state.solar ? "flow-line" : ""} opacity={state.solar ? 1 : 0.2} />
          </g>
        </svg>

        <p className="text-sm text-muted-foreground">
          Select a system to see how visibility turns into action. This is an illustrative
          representation of the HubTwinX™ control layer.
        </p>
      </div>
    </div>
  );
}
