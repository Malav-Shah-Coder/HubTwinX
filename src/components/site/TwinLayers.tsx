import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

const getLayers = (t: any) => [
  {
    id: "site",
    title: t("home.layers.t1", "Site"),
    items: [t("home.layers.i1", "Building"), t("home.layers.i2", "Factory"), t("home.layers.i3", "Hospital"), t("home.layers.i4", "Hotel"), t("home.layers.i5", "Office"), t("home.layers.i6", "Campus"), t("home.layers.i7", "Home")],
  },
  {
    id: "infrastructure",
    title: t("home.layers.t2", "Infrastructure"),
    items: [t("home.layers.i8", "HT / LT"), t("home.layers.i9", "Transformers"), t("home.layers.i10", "Panels"), t("home.layers.i11", "DBs"), t("home.layers.i12", "Cables"), t("home.layers.i13", "Meters")],
  },
  {
    id: "energy",
    title: t("home.layers.t3", "Energy"),
    items: [t("home.layers.i14", "Grid"), t("home.layers.i15", "Solar"), t("home.layers.i16", "Battery"), t("home.layers.i17", "Generator"), t("home.layers.i18", "EV"), t("home.layers.i19", "Loads")],
  },
  {
    id: "equipment",
    title: t("home.layers.t4", "Equipment"),
    items: [t("home.layers.i20", "HVAC"), t("home.layers.i21", "Pumps"), t("home.layers.i22", "Motors"), t("home.layers.i23", "Machines"), t("home.layers.i24", "Elevators"), t("home.layers.i25", "Critical equipment")],
  },
  {
    id: "environment",
    title: t("home.layers.t5", "Environment"),
    items: [t("home.layers.i26", "Temperature"), t("home.layers.i27", "Humidity"), t("home.layers.i28", "Air quality"), t("home.layers.i29", "Occupancy"), t("home.layers.i30", "Sensors")],
  },
  {
    id: "operations",
    title: t("home.layers.t6", "Operations"),
    items: [t("home.layers.i31", "Schedules"), t("home.layers.i32", "Alerts"), t("home.layers.i33", "Automation"), t("home.layers.i34", "Maintenance"), t("home.layers.i35", "Analytics")],
  },
];

export function TwinLayers() {
  const { t } = useTranslation();
  const layers = getLayers(t);
  
  return (
    <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-10">
      {layers.map((layer, i) => (
        <Reveal as="li" key={layer.id} delay={i * 60}>
          <div className="surface-panel relative p-5 sm:p-6">
            <span
              className="absolute -left-[47px] top-8 hidden size-3 rounded-full sm:block"
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
