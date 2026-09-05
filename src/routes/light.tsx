import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bolt,
  Boxes,
  Brain,
  Building,
  Cpu,
  Factory,
  GraduationCap,
  Hotel,
  Home,
  Layers,
  LineChart,
  Leaf,
  Network,
  Radio,
  ShieldCheck,
  Stethoscope,
  Sun,
  Timer,
  Wrench,
  Workflow,
  Gauge,
  Eye,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { TwinLayers } from "@/components/site/TwinLayers";
import { TwinDashboard } from "@/components/site/TwinDashboard";
import { ControlRoom } from "@/components/site/ControlRoom";

import logo from "@/assets/hubtwinx-logo.png.asset.json";
import heroImg from "@/assets/hero-digital-twin.jpg";
import gridToSiteImg from "@/assets/grid-to-site.jpg";
import controlRoomImg from "@/assets/control-room.jpg";
import visionImg from "@/assets/vision.jpg";
import industrialImg from "@/assets/industrial-twin.jpg";
import energyImg from "@/assets/energy-ecosystem.jpg";

export const Route = createFileRoute("/light")({
  head: () => ({
    meta: [
      { title: "HubTwinX™ — Your Entire Site. One Digital View." },
      {
        name: "description",
        content:
          "HubTwinX™ turns homes, offices, factories, hospitals, hotels and campuses into an intelligent Digital Twin — energy, assets, equipment and systems in one digital view.",
      },
      { property: "og:title", content: "HubTwinX™ — Your Entire Site. One Digital View." },
      {
        property: "og:description",
        content:
          "An intelligent Digital Twin platform for the end-user site: see, understand, control and automate energy, assets and equipment. By EnerSpace Technology LLP.",
      },
    ],
  }),
  component: LightHubTwinX,
});

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.05] sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>}
    </div>
  );
}

const scrollStory = [
  { n: "01", t: "Power arrives", d: "The site receives energy." },
  { n: "02", t: "The site becomes visible", d: "Meters, systems, assets and spaces are digitally represented." },
  { n: "03", t: "Everything connects", d: "IoT connects the physical environment." },
  { n: "04", t: "The digital twin forms", d: "The physical site gets a digital representation." },
  { n: "05", t: "Intelligence emerges", d: "AI and analytics identify patterns and opportunities." },
  { n: "06", t: "Decisions become action", d: "Users can monitor and control connected systems." },
  { n: "07", t: "Automation takes over", d: "Rules and workflows can trigger predefined actions." },
  { n: "08", t: "The site becomes intelligent", d: "Energy, assets and operations become visible, understandable and actionable." },
];

const capabilities = [
  { icon: Bolt, t: "Energy Management", d: "Understand where, when and how energy is being consumed." },
  { icon: Boxes, t: "Asset Management", d: "Know important assets, their location, condition and operational status." },
  { icon: Building, t: "Facility Management", d: "Bring building systems into one digital environment." },
  { icon: Wrench, t: "Predictive Maintenance", d: "Identify abnormal behaviour before it becomes a major problem." },
  { icon: Workflow, t: "Automation", d: "Create intelligent rules and workflows for connected systems." },
  { icon: Leaf, t: "Sustainability", d: "Measure and optimize energy performance, renewable generation and consumption." },
];

const applications = [
  { icon: Home, t: "Residential", d: "Smart homes, villas, apartments" },
  { icon: Building, t: "Commercial", d: "Offices, malls, retail, commercial buildings" },
  { icon: Factory, t: "Industrial", d: "Factories, plants, warehouses, production facilities" },
  { icon: Stethoscope, t: "Healthcare", d: "Hospitals, clinics and healthcare campuses" },
  { icon: Hotel, t: "Hospitality", d: "Hotels, resorts and restaurants" },
  { icon: GraduationCap, t: "Institutional", d: "Schools, universities and campuses" },
  { icon: Sun, t: "Energy", d: "Solar, battery, EV charging and distributed energy sites" },
];

const whyItems = [
  { icon: Eye, t: "One View", d: "Bring disconnected systems into one digital environment." },
  { icon: Radio, t: "Real-Time", d: "Understand what is happening now." },
  { icon: Brain, t: "Intelligent", d: "Turn operational data into actionable insights." },
  { icon: Network, t: "Connected", d: "Connect meters, sensors, assets and equipment." },
  { icon: Layers, t: "Scalable", d: "Start with energy and expand to the entire site." },
  { icon: Gauge, t: "Control", d: "Move beyond monitoring to intelligent action." },
  { icon: ShieldCheck, t: "Future Ready", d: "Built for AI, automation, distributed energy and smart infrastructure." },
];

const workflows = [
  {
    tag: "Environment",
    steps: [
      ["Condition", "Temperature rises"],
      ["Intelligence", "HubTwinX identifies the condition"],
      ["Rule", "If temperature exceeds a defined threshold"],
      ["Action", "Adjust HVAC"],
      ["Result", "Optimized environment"],
    ],
  },
  {
    tag: "Energy",
    steps: [
      ["Condition", "High demand detected"],
      ["Intelligence", "Demand pattern identified"],
      ["Rule", "If demand exceeds a defined threshold"],
      ["Action", "Intelligent response to optimize load"],
      ["Result", "Balanced consumption"],
    ],
  },
  {
    tag: "Lighting",
    steps: [
      ["Condition", "Occupancy detected"],
      ["Intelligence", "Space usage understood"],
      ["Rule", "If a space is occupied or vacant"],
      ["Action", "Lighting response"],
      ["Result", "Efficient operation"],
    ],
  },
  {
    tag: "Equipment",
    steps: [
      ["Condition", "Abnormal behaviour"],
      ["Intelligence", "Deviation identified"],
      ["Rule", "If behaviour falls outside expected operation"],
      ["Action", "Alert raised"],
      ["Result", "Maintenance response"],
    ],
  },
];

const architecture = [
  { t: "Physical Site", d: "Meters • Sensors • Equipment • Assets" },
  { t: "Connectivity", d: "IoT • Edge Devices • Gateways • Communication" },
  { t: "HubTwinX Digital Twin", d: "Site • Floors • Rooms • Assets • Energy • Equipment" },
  { t: "Intelligence", d: "Analytics • AI • Alerts • Prediction • Optimization" },
  { t: "Action", d: "Monitor • Control • Automate • Optimize" },
];

function LightHubTwinX() {
  return (
    <div id="top" className="light-theme overflow-x-hidden bg-background text-foreground min-h-screen">
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(1000px 620px at 78% 18%, oklch(0.55 0.16 253 / 28%), transparent 65%), radial-gradient(760px 540px at 12% 78%, oklch(0.72 0.19 148 / 16%), transparent 70%)",
            }}
          />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow">Digital Twin platform • EnerSpace Technology LLP</p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[0.98] sm:text-6xl xl:text-6xl">
                YOUR ENTIRE HUB.
                <br />
                <span className="text-gradient-brand">ONE DIGITAL VIEW.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                HubTwinX™ transforms your home, office, factory, hospital, hotel, campus or
                commercial facility into an intelligent Digital Twin.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                See your energy, assets, equipment, spaces and connected systems in one unified
                digital environment — and monitor, analyze and control them from a single interface.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  Explore HubTwinX <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary/60 hover:bg-secondary/50"
                >
                  Book a Demo
                </a>
              </div>
              <p className="mt-10 font-display text-sm tracking-[0.2em] text-muted-foreground">
                POWER REACHES THE SITE. HUBTWINX MAKES THE SITE INTELLIGENT.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="surface-panel overflow-hidden p-2">
                <img
                  src={heroImg}
                  alt="A modern facility transitioning from a physical building into a digital twin with energy and equipment data layers"
                  width={1600}
                  height={1104}
                  className="w-full rounded-xl"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SCROLL STORY */}
        <section className="border-y border-border bg-secondary/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="The journey"
              title="Power → Meter → Site → Intelligence → Action"
              copy="One continuous story: from the moment energy reaches your site to the moment your site starts operating intelligently."
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {scrollStory.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 50}>
                  <div className="h-full rounded-xl border border-border bg-card/60 p-5">
                    <span className="font-display text-sm text-brand-cyan">{s.n}</span>
                    <p className="mt-3 font-display text-base font-semibold uppercase tracking-wide">
                      {s.t}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT IS HUBTWINX */}
        <section id="platform" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="What is HubTwinX"
                title={<>YOUR SITE, DIGITALLY CONNECTED.</>}
                copy="Facilities contain many interconnected elements — electrical panels, meters, HVAC, lighting, solar, batteries, EV chargers, machines, rooms, equipment and sensors. Traditionally, these systems operate through separate applications and disconnected controls. HubTwinX brings them together."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "What you have physically, you can see digitally.",
                  "What you see digitally, you can understand intelligently.",
                  "What you understand, you can control.",
                ].map((line, i) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    />
                    <p className="text-lg text-foreground/90">
                      <span className="font-display text-brand-cyan">0{i + 1}</span>{" "}
                      {line}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="surface-panel p-6">
                <p className="eyebrow">Disconnected systems → one digital twin</p>
                <svg viewBox="0 0 460 380" className="mt-4 w-full" role="img" aria-label="Separate site systems connecting into one HubTwinX digital environment">
                  <defs>
                    <linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.55 0.16 253)" />
                      <stop offset="60%" stopColor="oklch(0.73 0.13 205)" />
                      <stop offset="100%" stopColor="oklch(0.72 0.19 148)" />
                    </linearGradient>
                  </defs>
                  {[
                    ["Panels", 60, 46],
                    ["Meters", 230, 30],
                    ["HVAC", 400, 46],
                    ["Lighting", 34, 190],
                    ["Solar", 426, 190],
                    ["Battery", 60, 334],
                    ["EV", 230, 350],
                    ["Sensors", 400, 334],
                  ].map(([label, x, y]) => (
                    <g key={label as string}>
                      <line
                        x1={x as number}
                        y1={y as number}
                        x2="230"
                        y2="190"
                        stroke="url(#connGrad)"
                        strokeWidth="1.2"
                        className="flow-line"
                        opacity="0.8"
                      />
                      <circle cx={x as number} cy={y as number} r="5" fill="oklch(0.73 0.13 205)" />
                      <text
                        x={x as number}
                        y={(y as number) - 12}
                        textAnchor="middle"
                        fill="currentColor"
                        className="fill-muted-foreground text-[11px]"
                      >
                        {label as string}
                      </text>
                    </g>
                  ))}
                  <circle cx="230" cy="190" r="52" fill="oklch(0.55 0.16 253 / 18%)" stroke="url(#connGrad)" strokeWidth="1.6" />
                  <circle cx="230" cy="190" r="70" fill="none" stroke="url(#connGrad)" strokeWidth="0.8" opacity="0.4" className="pulse-node" />
                  <text x="230" y="187" textAnchor="middle" className="fill-foreground font-semibold text-[13px]">
                    HubTwinX™
                  </text>
                  <text x="230" y="205" textAnchor="middle" className="fill-muted-foreground text-[11px]">
                    Digital Twin
                  </text>
                </svg>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ONE DISPLAY */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="One display"
                title={
                  <>
                    ONE DISPLAY.
                    <br />
                    <span className="text-gradient-brand">YOUR ENTIRE HUB.</span>
                  </>
                }
                copy="See everything from one place — energy, electrical infrastructure, solar, battery, EV charging, HVAC, lighting, machines, rooms, environmental conditions, IoT sensors and alerts."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12">
                <TwinDashboard />
              </div>
            </Reveal>
          </div>
        </section>

        {/* DIGITAL TWIN LAYERS */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Digital twin"
                title="LAYER BY LAYER, YOUR SITE BECOMES DIGITAL."
                copy="Scroll through the layers of the twin — from the site itself down to the operations that keep it running."
              />
            </Reveal>
            <TwinLayers />
            <Reveal delay={100}>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <img
                  src={industrialImg}
                  alt="Industrial facility with a digital twin overlay on machines and electrical systems"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="w-full rounded-2xl border border-border"
                />
                <img
                  src={energyImg}
                  alt="Solar, battery storage and EV charging connected by energy flow lines"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="w-full rounded-2xl border border-border"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTROL */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="From visibility to action"
                title="CONTROL AT YOUR FINGERTIPS."
                copy="HubTwinX is not only a monitoring platform. It acts as the digital control layer of the site — switch equipment on or off, control lighting, adjust HVAC, manage EV charging, optimize battery usage, manage solar energy, monitor critical equipment, set operating schedules, respond to alerts and automate predefined actions."
              />
              <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-sm tracking-[0.18em]">
                {["SEE", "UNDERSTAND", "DECIDE", "ACT"].map((s, i) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="rounded-full border border-border px-4 py-2">{s}</span>
                    {i < 3 && <ArrowRight className="size-4 text-brand-cyan" />}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12">
                <ControlRoom />
              </div>
            </Reveal>
          </div>
        </section>

        {/* AI + IOT + DIGITAL TWIN */}
        <section id="technology" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Technology"
                title="FROM DATA TO DECISIONS."
                copy="IoT captures what is happening. The Digital Twin shows where and how it is happening. AI helps understand what it means. Automation helps take action."
              />
            </Reveal>
            <ul className="mt-12 grid gap-4 lg:grid-cols-4">
              {[
                { icon: Radio, k: "IoT", v: "Capture" },
                { icon: Layers, k: "Digital Twin", v: "Visualize" },
                { icon: Cpu, k: "AI", v: "Understand" },
                { icon: Workflow, k: "Automation", v: "Act" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal as="li" key={s.k} delay={i * 90}>
                    <div className="surface-panel relative h-full p-6">
                      <Icon className="size-6 text-brand-cyan" />
                      <p className="mt-5 font-display text-2xl font-semibold">{s.k}</p>
                      <p className="mt-1 eyebrow">{s.v}</p>
                      <div
                        className="mt-6 h-px w-full"
                        style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.6 }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={100}>
              <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
                <img
                  src={controlRoomImg}
                  alt="Digital control room with facility twin and energy flow visualizations on large screens"
                  loading="lazy"
                  width={1600}
                  height={912}
                  className="w-full rounded-2xl border border-border"
                />
                <div>
                  <SectionHeading
                    eyebrow="Intelligence"
                    title="INTELLIGENCE BEHIND THE SITE."
                    copy="HubTwinX uses connected data and intelligent analytics to help organizations understand how their site operates."
                  />
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Unusual energy consumption",
                      "Equipment abnormalities",
                      "Peak demand patterns",
                      "Energy wastage",
                      "Operational inefficiencies",
                      "Potential equipment failures",
                      "Optimization opportunities",
                    ].map((sig) => (
                      <li
                        key={sig}
                        className="flex items-start gap-2.5 rounded-xl border border-border bg-secondary/30 p-3.5 text-sm text-muted-foreground"
                      >
                        <LineChart className="mt-0.5 size-4 shrink-0 text-brand-green" />
                        {sig}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* AUTOMATION */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Automation"
                title={
                  <>
                    SEE IT. UNDERSTAND IT.{" "}
                    <span className="text-gradient-brand">AUTOMATE IT.</span>
                  </>
                }
                copy="Examples of automation logic that can be expressed inside HubTwinX. These illustrate how rules and workflows are structured."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {workflows.map((w, i) => (
                <Reveal key={w.tag} delay={i * 80}>
                  <div className="surface-panel h-full p-6">
                    <p className="eyebrow">{w.tag}</p>
                    <ol className="mt-5 space-y-3">
                      {w.steps.map(([k, v], idx) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="relative flex flex-col items-center">
                            <span
                              className="mt-1.5 size-2.5 rounded-full"
                              style={{ backgroundImage: "var(--gradient-brand)" }}
                            />
                            {idx < w.steps.length - 1 && (
                              <span className="mt-1 h-8 w-px bg-border" />
                            )}
                          </span>
                          <span>
                            <span className="block font-display text-xs uppercase tracking-[0.18em] text-brand-cyan">
                              {k}
                            </span>
                            <span className="text-sm text-muted-foreground">{v}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section id="applications" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Applications"
                title="BUILT FOR EVERY TYPE OF SITE."
                copy="One platform, applied across residential, commercial, industrial, healthcare, hospitality, institutional and energy sites."
              />
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {applications.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal as="li" key={a.t} delay={i * 60}>
                    <div className="group surface-panel h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                      <span
                        className="inline-flex size-11 items-center justify-center rounded-xl border border-border"
                        style={{ backgroundImage: "var(--gradient-surface)" }}
                      >
                        <Icon className="size-5 text-brand-cyan transition-colors group-hover:text-brand-green" />
                      </span>
                      <p className="mt-5 font-display text-lg font-semibold uppercase tracking-wide">
                        {a.t}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="scroll-mt-24 border-y border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Platform capabilities"
                title={
                  <>
                    ONE PLATFORM.
                    <br />
                    <span className="text-gradient-brand">MULTIPLE POSSIBILITIES.</span>
                  </>
                }
                copy="Six capability areas that operate as one connected digital ecosystem — not six unrelated tools."
              />
            </Reveal>
            <div className="relative mt-12">
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Reveal as="li" key={c.t} delay={i * 70}>
                      <div className="surface-panel h-full p-6">
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-brand-green" />
                          <p className="font-display text-base font-semibold uppercase tracking-wide">
                            {c.t}
                          </p>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Architecture"
                title="FROM PHYSICAL SITE TO INTELLIGENT ACTION."
                copy="A continuous pipeline that carries data from the physical world into intelligence and back into action."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              {architecture.map((a, i) => (
                <Reveal key={a.t} delay={i * 80}>
                  <div className="surface-panel relative h-full p-6">
                    <span className="font-display text-sm text-brand-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-display text-lg font-semibold">{a.t}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                    <span
                      className="absolute inset-x-6 bottom-0 h-px"
                      style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.55 }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <svg viewBox="0 0 1200 40" className="mt-6 w-full" aria-hidden>
              <line
                x1="20"
                y1="20"
                x2="1180"
                y2="20"
                stroke="url(#connGrad)"
                strokeWidth="2"
                className="flow-line"
              />
            </svg>
          </div>
        </section>

        {/* POWERTWINX CONNECTION */}
        <section id="powertwinx" className="scroll-mt-24 border-y border-border bg-secondary/20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="The ecosystem"
                title="FROM THE GRID TO THE SITE."
                copy="PowerTwinX™ and HubTwinX™ are two connected halves of one digital journey."
              />
            </Reveal>

            <Reveal delay={100}>
              <img
                src={gridToSiteImg}
                alt="Energy journey from generation and transmission through the transformer and smart meter into a digitally connected building"
                loading="lazy"
                width={1920}
                height={768}
                className="mt-12 w-full rounded-2xl border border-border"
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <Reveal>
                <div className="surface-panel h-full p-6">
                  <p className="eyebrow">PowerTwinX™</p>
                  <p className="mt-3 font-display text-xl font-semibold">
                    The digital twin of the power network
                  </p>
                  <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {["Generation", "Transmission", "Distribution", "Transformer", "Smart Meter"].map(
                      (s) => (
                        <li key={s} className="rounded-lg border border-border bg-secondary/30 px-4 py-2.5">
                          {s}
                        </li>
                      ),
                    )}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="flex items-center justify-center py-4 lg:h-full lg:flex-col">
                  <span className="hidden h-full w-px bg-border lg:block" />
                  <span
                    className="rounded-full px-5 py-2 font-display text-xs tracking-[0.24em] text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    THE METER
                  </span>
                  <span className="hidden h-full w-px bg-border lg:block" />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="surface-panel h-full p-6">
                  <p className="eyebrow">HubTwinX™</p>
                  <p className="mt-3 font-display text-xl font-semibold">
                    The digital twin of the end-user site
                  </p>
                  <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {["Meter", "Site", "Assets", "Equipment", "Energy", "Intelligence", "Control"].map(
                      (s) => (
                        <li key={s} className="rounded-lg border border-border bg-secondary/30 px-4 py-2.5">
                          {s}
                        </li>
                      ),
                    )}
                  </ol>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <p className="mx-auto mt-12 max-w-4xl text-center font-display text-xl leading-snug sm:text-3xl">
                TOGETHER, THEY CONNECT THE DIGITAL JOURNEY FROM{" "}
                <span className="text-gradient-brand">POWER SOURCE TO POINT OF CONSUMPTION.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Why HubTwinX" title="WHY HUBTWINX?" />
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyItems.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal as="li" key={w.t} delay={i * 60}>
                    <div className="surface-panel h-full p-6">
                      <Icon className="size-6 text-brand-cyan" />
                      <p className="mt-5 font-display text-lg font-semibold uppercase tracking-wide">
                        {w.t}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
                    </div>
                  </Reveal>
                );
              })}
              <Reveal as="li" delay={420}>
                <div
                  className="flex h-full flex-col justify-center rounded-2xl p-6 text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Timer className="size-6" />
                  <p className="mt-5 font-display text-lg font-semibold leading-snug">
                    What exists physically, exists digitally.
                  </p>
                </div>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* VISION */}
        <section id="about" className="relative scroll-mt-24 isolate overflow-hidden py-24 sm:py-32">
          <img
            src={visionImg}
            alt="Aerial view of an urban and industrial landscape overlaid with a digital network mesh at dusk"
            loading="lazy"
            width={1920}
            height={912}
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.98 0.01 240 / 92%), oklch(0.98 0.01 240 / 78%))",
            }}
          />
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <Reveal>
              <p className="eyebrow">Our vision</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
                MAKE EVERY SITE <span className="text-gradient-brand">INTELLIGENT.</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                We believe the future of buildings, industries and infrastructure is not simply
                connected. It is understood.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                HubTwinX aims to create a digital representation of every important element of a
                site — allowing people and organizations to see, understand, optimize and control
                their physical environment through one intelligent digital interface.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <Reveal>
              <img src="/hubtwinx.png" alt="HubTwinX" width={320} height={85} className="mx-auto h-12 w-auto" loading="lazy" />
              <h2 className="mt-9 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
                READY TO SEE YOUR ENTIRE HUB{" "}
                <span className="text-gradient-brand">DIFFERENTLY?</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Discover how HubTwinX can create a Digital Twin of your facility.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:info@enerspacetechnology.com?subject=HubTwinX%20Demo%20Request"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  BOOK A DEMO <ArrowRight className="size-4" />
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:border-primary/60 hover:bg-secondary/50"
                >
                  EXPLORE HUBTWINX
                </a>
              </div>
              <p className="mt-10 font-display text-sm tracking-[0.16em] text-muted-foreground">
                YOUR ENTIRE HUB. ONE DIGITAL VIEW. EVERYTHING AT YOUR FINGERTIPS.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/20 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <img src="/hubtwinx.png" alt="HubTwinX" width={240} height={64} loading="lazy" className="h-9 w-auto" />
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Your Entire Hub. One Digital View. Everything at Your Fingertips.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Developed by{" "}
              <span className="font-semibold text-foreground">EnerSpace Technology LLP</span>
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                ["Home", "#top"],
                ["What is HubTwinX", "#platform"],
                ["Capabilities", "#capabilities"],
                ["Technology", "#technology"],
                ["Applications", "#applications"],
                ["PowerTwinX + HubTwinX", "#powertwinx"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} EnerSpace Technology LLP. HubTwinX™ and PowerTwinX™ are
          product names of EnerSpace Technology LLP.
        </div>
      </footer>
    </div>
  );
}
