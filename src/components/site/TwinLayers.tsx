import { Reveal } from "./Reveal";

const layers = [
  {
    id: "site",
    title: "Site",
    items: ["Building", "Factory", "Hospital", "Hotel", "Office", "Campus", "Home"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["HT / LT", "Transformers", "Panels", "DBs", "Cables", "Meters"],
  },
  {
    id: "energy",
    title: "Energy",
    items: ["Grid", "Solar", "Battery", "Generator", "EV", "Loads"],
  },
  {
    id: "equipment",
    title: "Equipment",
    items: ["HVAC", "Pumps", "Motors", "Machines", "Elevators", "Critical equipment"],
  },
  {
    id: "environment",
    title: "Environment",
    items: ["Temperature", "Humidity", "Air quality", "Occupancy", "Sensors"],
  },
  {
    id: "operations",
    title: "Operations",
    items: ["Schedules", "Alerts", "Automation", "Maintenance", "Analytics"],
  },
];

export function TwinLayers() {
  return (
    <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-10">
      {layers.map((layer, i) => (
        <Reveal as="li" key={layer.id} delay={i * 60}>
          <div className="surface-panel relative p-5 sm:p-6">
            <span
              className="absolute -left-[34px] top-8 hidden size-3 rounded-full sm:block"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-display text-sm text-brand-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold sm:text-3xl">{layer.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
