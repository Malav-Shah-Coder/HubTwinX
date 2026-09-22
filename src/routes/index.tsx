import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { TwinLayers } from "@/components/site/TwinLayers";
import { TwinDashboard } from "@/components/site/TwinDashboard";
import { ControlRoom } from "@/components/site/ControlRoom";
import { useTranslation } from "react-i18next";

import logo from "@/assets/hubtwinx-logo.png.asset.json";
import heroImg from "@/assets/hero-digital-twin.jpg";
import gridToSiteImg from "@/assets/grid-to-site.jpg";
import controlRoomImg from "@/assets/control-room.jpg";
import visionImg from "@/assets/vision.jpg";
import industrialImg from "@/assets/industrial-twin.jpg";
import energyImg from "@/assets/energy-ecosystem.jpg";

export const Route = createFileRoute("/")({
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
  component: HubTwinX,
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

const getScrollStory = (t: any) => [
  { n: "01", t: t("home.scrollStory.t1", "Power arrives"), d: t("home.scrollStory.d1", "The site receives energy.") },
  { n: "02", t: t("home.scrollStory.t2", "The site becomes visible"), d: t("home.scrollStory.d2", "Meters, systems, assets and spaces are digitally represented.") },
  { n: "03", t: t("home.scrollStory.t3", "Everything connects"), d: t("home.scrollStory.d3", "IoT connects the physical environment.") },
  { n: "04", t: t("home.scrollStory.t4", "The digital twin forms"), d: t("home.scrollStory.d4", "The physical site gets a digital representation.") },
  { n: "05", t: t("home.scrollStory.t5", "Intelligence emerges"), d: t("home.scrollStory.d5", "AI and analytics identify patterns and opportunities.") },
  { n: "06", t: t("home.scrollStory.t6", "Decisions become action"), d: t("home.scrollStory.d6", "Users can monitor and control connected systems.") },
  { n: "07", t: t("home.scrollStory.t7", "Automation takes over"), d: t("home.scrollStory.d7", "Rules and workflows can trigger predefined actions.") },
  { n: "08", t: t("home.scrollStory.t8", "The site becomes intelligent"), d: t("home.scrollStory.d8", "Energy, assets and operations become visible, understandable and actionable.") },
];

const getCapabilities = (t: any) => [
  { icon: Bolt, t: t("home.capabilities.t1", "Energy Management"), d: t("home.capabilities.d1", "Understand where, when and how energy is being consumed.") },
  { icon: Boxes, t: t("home.capabilities.t2", "Asset Management"), d: t("home.capabilities.d2", "Know important assets, their location, condition and operational status.") },
  { icon: Building, t: t("home.capabilities.t3", "Facility Management"), d: t("home.capabilities.d3", "Bring building systems into one digital environment.") },
  { icon: Wrench, t: t("home.capabilities.t4", "Predictive Maintenance"), d: t("home.capabilities.d4", "Identify abnormal behaviour before it becomes a major problem.") },
  { icon: Workflow, t: t("home.capabilities.t5", "Automation"), d: t("home.capabilities.d5", "Create intelligent rules and workflows for connected systems.") },
  { icon: Leaf, t: t("home.capabilities.t6", "Sustainability"), d: t("home.capabilities.d6", "Measure and optimize energy performance, renewable generation and consumption.") },
];

const getApplications = (t: any) => [
  { icon: Home, t: t("home.applications.t1", "Residential"), d: t("home.applications.d1", "Smart homes, villas, apartments") },
  { icon: Building, t: t("home.applications.t2", "Commercial"), d: t("home.applications.d2", "Offices, malls, retail, commercial buildings") },
  { icon: Factory, t: t("home.applications.t3", "Industrial"), d: t("home.applications.d3", "Factories, plants, warehouses, production facilities") },
  { icon: Stethoscope, t: t("home.applications.t4", "Healthcare"), d: t("home.applications.d4", "Hospitals, clinics and healthcare campuses") },
  { icon: Hotel, t: t("home.applications.t5", "Hospitality"), d: t("home.applications.d5", "Hotels, resorts and restaurants") },
  { icon: GraduationCap, t: t("home.applications.t6", "Institutional"), d: t("home.applications.d6", "Schools, universities and campuses") },
  { icon: Sun, t: t("home.applications.t7", "Energy"), d: t("home.applications.d7", "Solar, battery, EV charging and distributed energy sites") },
];

const getWhyItems = (t: any) => [
  { icon: Eye, t: t("home.why.t1", "One View"), d: t("home.why.d1", "Bring disconnected systems into one digital environment.") },
  { icon: Radio, t: t("home.why.t2", "Real-Time"), d: t("home.why.d2", "Understand what is happening now.") },
  { icon: Brain, t: t("home.why.t3", "Intelligent"), d: t("home.why.d3", "Turn operational data into actionable insights.") },
  { icon: Network, t: t("home.why.t4", "Connected"), d: t("home.why.d4", "Connect meters, sensors, assets and equipment.") },
  { icon: Layers, t: t("home.why.t5", "Scalable"), d: t("home.why.d5", "Start with energy and expand to the entire site.") },
  { icon: Gauge, t: t("home.why.t6", "Control"), d: t("home.why.d6", "Move beyond monitoring to intelligent action.") },
  { icon: ShieldCheck, t: t("home.why.t7", "Future Ready"), d: t("home.why.d7", "Built for AI, automation, distributed energy and smart infrastructure.") },
];

const getWorkflows = (t: any) => [
  {
    tag: t("home.workflows.tag1", "Environment"),
    steps: [
      [t("home.workflows.label1", "Condition"), t("home.workflows.val1a", "Temperature rises")],
      [t("home.workflows.label2", "Intelligence"), t("home.workflows.val1b", "HubTwinX identifies the condition")],
      [t("home.workflows.label3", "Rule"), t("home.workflows.val1c", "If temperature exceeds a defined threshold")],
      [t("home.workflows.label4", "Action"), t("home.workflows.val1d", "Adjust HVAC")],
      [t("home.workflows.label5", "Result"), t("home.workflows.val1e", "Optimized environment")],
    ],
  },
  {
    tag: t("home.workflows.tag2", "Energy"),
    steps: [
      [t("home.workflows.label1", "Condition"), t("home.workflows.val2a", "High demand detected")],
      [t("home.workflows.label2", "Intelligence"), t("home.workflows.val2b", "Demand pattern identified")],
      [t("home.workflows.label3", "Rule"), t("home.workflows.val2c", "If demand exceeds a defined threshold")],
      [t("home.workflows.label4", "Action"), t("home.workflows.val2d", "Intelligent response to optimize load")],
      [t("home.workflows.label5", "Result"), t("home.workflows.val2e", "Balanced consumption")],
    ],
  },
  {
    tag: t("home.workflows.tag3", "Lighting"),
    steps: [
      [t("home.workflows.label1", "Condition"), t("home.workflows.val3a", "Occupancy detected")],
      [t("home.workflows.label2", "Intelligence"), t("home.workflows.val3b", "Space usage understood")],
      [t("home.workflows.label3", "Rule"), t("home.workflows.val3c", "If a space is occupied or vacant")],
      [t("home.workflows.label4", "Action"), t("home.workflows.val3d", "Lighting response")],
      [t("home.workflows.label5", "Result"), t("home.workflows.val3e", "Efficient operation")],
    ],
  },
  {
    tag: t("home.workflows.tag4", "Equipment"),
    steps: [
      [t("home.workflows.label1", "Condition"), t("home.workflows.val4a", "Abnormal behaviour")],
      [t("home.workflows.label2", "Intelligence"), t("home.workflows.val4b", "Deviation identified")],
      [t("home.workflows.label3", "Rule"), t("home.workflows.val4c", "If behaviour falls outside expected operation")],
      [t("home.workflows.label4", "Action"), t("home.workflows.val4d", "Alert raised")],
      [t("home.workflows.label5", "Result"), t("home.workflows.val4e", "Maintenance response")],
    ],
  },
];

const getArchitecture = (t: any) => [
  { t: t("home.architecture.t1", "Physical Site"), d: t("home.architecture.d1", "Meters • Sensors • Equipment • Assets") },
  { t: t("home.architecture.t2", "Connectivity"), d: t("home.architecture.d2", "IoT • Edge Devices • Gateways • Communication") },
  { t: t("home.architecture.t3", "HubTwinX Digital Twin"), d: t("home.architecture.d3", "Site • Floors • Rooms • Assets • Energy • Equipment") },
  { t: t("home.architecture.t4", "Intelligence"), d: t("home.architecture.d4", "Analytics • AI • Alerts • Prediction • Optimization") },
  { t: t("home.architecture.t5", "Action"), d: t("home.architecture.d5", "Monitor • Control • Automate • Optimize") },
];

function HubTwinX() {
  const { t } = useTranslation();
  const scrollStory = getScrollStory(t);
  const capabilities = getCapabilities(t);
  const applications = getApplications(t);
  const whyItems = getWhyItems(t);
  const workflows = getWorkflows(t);
  const architecture = getArchitecture(t);

  return (
    <div id="top" className="overflow-x-hidden">
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
              <p className="eyebrow">{t("home.hero.eyebrow", "Digital Twin platform • EnerSpace Technology LLP")}</p>
              <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[0.98] sm:text-6xl xl:text-6xl">
                {t("home.hero.title1", "YOUR ENTIRE HUB.")}
                <br />
                <span className="text-gradient-brand">{t("home.hero.title2", "ONE DIGITAL VIEW.")}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t("home.hero.subtitle", "HubTwinX™ transforms your home, office, factory, hospital, hotel, campus or commercial facility into an intelligent Digital Twin.")}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t("home.hero.subcopy", "See your energy, assets, equipment, spaces and connected systems in one unified digital environment — and monitor, analyze and control them from a single interface.")}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {t("home.hero.explore", "Explore HubTwinX")} <ArrowRight className="size-4" />
                </a>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary/60 hover:bg-secondary/50"
                >
                  {t("home.hero.demo", "Book a Demo")}
                </Link>
              </div>
              <p className="mt-10 font-display text-sm tracking-[0.2em] text-muted-foreground">
                {t("home.hero.footer", "POWER REACHES THE SITE. HUBTWINX MAKES THE SITE INTELLIGENT.")}
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
              eyebrow={t("home.headings.howItWorks", "The journey")}
              title={t("home.headings.howItWorksTitle", "Power → Meter → Site → Intelligence → Action")}
              copy={t("home.headings.howItWorksCopy", "One continuous story: from the moment energy reaches your site to the moment your site starts operating intelligently.")}
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
                eyebrow={t("home.connected.eyebrow", "What is HubTwinX")}
                title={<>{t("home.connected.title", "YOUR SITE, DIGITALLY CONNECTED.")}</>}
                copy={t("home.connected.copy", "Facilities contain many interconnected elements — electrical panels, meters, HVAC, lighting, solar, batteries, EV chargers, machines, rooms, equipment and sensors. Traditionally, these systems operate through separate applications and disconnected controls. HubTwinX brings them together.")}
              />
              <ul className="mt-8 space-y-4">
                {[
                  t("home.connected.list1", "What you have physically, you can see digitally."),
                  t("home.connected.list2", "What you see digitally, you can understand intelligently."),
                  t("home.connected.list3", "What you understand, you can control."),
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
                <p className="eyebrow">{t("home.connected.diagramTitle", "Disconnected systems → one digital twin")}</p>
                <svg viewBox="0 0 460 380" className="mt-4 w-full" role="img" aria-label="Separate site systems connecting into one HubTwinX digital environment">
                  <defs>
                    <linearGradient id="connGrad" x1="0" y1="0" x2="460" y2="380" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="oklch(0.55 0.16 253)" />
                      <stop offset="60%" stopColor="oklch(0.73 0.13 205)" />
                      <stop offset="100%" stopColor="oklch(0.72 0.19 148)" />
                    </linearGradient>
                  </defs>
                  {[
                    [t("home.connected.node1", "Panels"), 60, 46],
                    [t("home.connected.node2", "Meters"), 230, 30],
                    [t("home.connected.node3", "HVAC"), 400, 46],
                    [t("home.connected.node4", "Lighting"), 34, 190],
                    [t("home.connected.node5", "Solar"), 426, 190],
                    [t("home.connected.node6", "Battery"), 60, 334],
                    [t("home.connected.node7", "EV"), 230, 350],
                    [t("home.connected.node8", "Sensors"), 400, 334],
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
                  <image href="/chip.png" x="120" y="70" width="220" height="220" />
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
                eyebrow={t("home.headings.capabilities", "One display")}
                title={
                  <>
                    {t("home.headings.displayTitle1", "ONE DISPLAY.")}
                    <br />
                    <span className="text-gradient-brand">{t("home.headings.displayTitle2", "YOUR ENTIRE HUB.")}</span>
                  </>
                }
                copy={t("home.headings.displayCopy", "See everything from one place — energy, electrical infrastructure, solar, battery, EV charging, HVAC, lighting, machines, rooms, environmental conditions, IoT sensors and alerts.")}
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
                eyebrow={t("home.layersTitle.eyebrow", "Digital twin")}
                title={t("home.layersTitle.title", "LAYER BY LAYER, YOUR SITE BECOMES DIGITAL.")}
                copy={t("home.layersTitle.copy", "Scroll through the layers of the twin — from the site itself down to the operations that keep it running.")}
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
                eyebrow={t("home.control.eyebrow", "From visibility to action")}
                title={t("home.control.title", "CONTROL AT YOUR FINGERTIPS.")}
                copy={t("home.control.copy", "HubTwinX is not only a monitoring platform. It acts as the digital control layer of the site — switch equipment on or off, control lighting, adjust HVAC, manage EV charging, optimize battery usage, manage solar energy, monitor critical equipment, set operating schedules, respond to alerts and automate predefined actions.")}
              />
              <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-sm tracking-[0.18em]">
                {[
                  t("home.control.v1", "SEE"), 
                  t("home.control.v2", "UNDERSTAND"), 
                  t("home.control.v3", "DECIDE"), 
                  t("home.control.v4", "ACT")
                ].map((s, i) => (
                  <span key={s as string} className="flex items-center gap-3">
                    <span className="rounded-full border border-border px-4 py-2">{s as string}</span>
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
                eyebrow={t("home.technology.eyebrow", "Technology")}
                title={t("home.technology.title", "FROM DATA TO DECISIONS.")}
                copy={t("home.technology.copy", "IoT captures what is happening. The Digital Twin shows where and how it is happening. AI helps understand what it means. Automation helps take action.")}
              />
            </Reveal>
            <ul className="mt-12 grid gap-4 lg:grid-cols-4">
              {[
                { icon: Radio, k: t("home.techFlow.t1", "IoT"), v: t("home.techFlow.v1", "Capture") },
                { icon: Layers, k: t("home.techFlow.t2", "Digital Twin"), v: t("home.techFlow.v2", "Visualize") },
                { icon: Cpu, k: t("home.techFlow.t3", "AI"), v: t("home.techFlow.v3", "Understand") },
                { icon: Workflow, k: t("home.techFlow.t4", "Automation"), v: t("home.techFlow.v4", "Act") },
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
                    eyebrow={t("home.intelligence.eyebrow", "Intelligence")}
                    title={t("home.intelligence.title", "INTELLIGENCE BEHIND THE SITE.")}
                    copy={t("home.intelligence.copy", "HubTwinX uses connected data and intelligent analytics to help organizations understand how their site operates.")}
                  />
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      t("home.intelligence.li1", "Unusual energy consumption"),
                      t("home.intelligence.li2", "Equipment abnormalities"),
                      t("home.intelligence.li3", "Peak demand patterns"),
                      t("home.intelligence.li4", "Energy wastage"),
                      t("home.intelligence.li5", "Operational inefficiencies"),
                      t("home.intelligence.li6", "Potential equipment failures"),
                      t("home.intelligence.li7", "Optimization opportunities"),
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
                eyebrow={t("home.automation.eyebrow", "Automation")}
                title={
                  <>
                    {t("home.automation.title1", "SEE IT. UNDERSTAND IT.")}{" "}
                    <span className="text-gradient-brand">{t("home.automation.title2", "AUTOMATE IT.")}</span>
                  </>
                }
                copy={t("home.automation.copy", "Examples of automation logic that can be expressed inside HubTwinX. These illustrate how rules and workflows are structured.")}
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
                eyebrow={t("home.headings.applications", "Applications")}
                title={t("home.headings.applicationsTitle", "BUILT FOR EVERY TYPE OF SITE.")}
                copy={t("home.headings.applicationsCopy", "One platform, applied across residential, commercial, industrial, healthcare, hospitality, institutional and energy sites.")}
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
                eyebrow={t("home.headings.capabilities", "Platform capabilities")}
                title={
                  <>
                    {t("home.headings.capabilitiesTitle1", "ONE PLATFORM.")}
                    <br />
                    <span className="text-gradient-brand">{t("home.headings.capabilitiesTitle2", "MULTIPLE POSSIBILITIES.")}</span>
                  </>
                }
                copy={t("home.headings.capabilitiesCopy", "Six capability areas that operate as one connected digital ecosystem — not six unrelated tools.")}
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
                eyebrow={t("home.headings.architecture", "Architecture")}
                title={t("home.headings.architectureTitle", "FROM PHYSICAL SITE TO INTELLIGENT ACTION.")}
                copy={t("home.headings.architectureCopy", "A continuous pipeline that carries data from the physical world into intelligence and back into action.")}
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
                eyebrow={t("home.powertwinx.eyebrow", "The ecosystem")}
                title={t("home.powertwinx.title", "FROM THE GRID TO THE SITE.")}
                copy={t("home.powertwinx.copy", "PowerTwinX™ and HubTwinX™ are two connected halves of one digital journey.")}
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
                  <img src="/logo-ptx.png" alt="PowerTwinX" className="h-7 w-auto object-contain" />
                  <p className="mt-3 font-display text-xl font-semibold">
                    {t("home.powertwinx.leftTitle", "The digital twin of the power network")}
                  </p>
                  <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {[
                      t("home.powertwinx.l1", "Generation"), 
                      t("home.powertwinx.l2", "Transmission"), 
                      t("home.powertwinx.l3", "Distribution"), 
                      t("home.powertwinx.l4", "Transformer"), 
                      t("home.powertwinx.l5", "Smart Meter")
                    ].map(
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
                    {t("home.powertwinx.centerLabel", "THE METER")}
                  </span>
                  <span className="hidden h-full w-px bg-border lg:block" />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="surface-panel h-full p-6">
                  <img src="/hubtwinx.png" alt="HubTwinX" className="h-7 w-auto object-contain" />
                  <p className="mt-3 font-display text-xl font-semibold">
                    {t("home.powertwinx.rightTitle", "The digital twin of the end-user site")}
                  </p>
                  <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {[
                      t("home.powertwinx.r1", "Meter"), 
                      t("home.powertwinx.r2", "Site"), 
                      t("home.powertwinx.r3", "Assets"), 
                      t("home.powertwinx.r4", "Equipment"), 
                      t("home.powertwinx.r5", "Energy"), 
                      t("home.powertwinx.r6", "Intelligence"), 
                      t("home.powertwinx.r7", "Control")
                    ].map(
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
                {t("home.powertwinx.footer1", "TOGETHER, THEY CONNECT THE DIGITAL JOURNEY FROM")}{" "}
                <span className="text-gradient-brand">{t("home.powertwinx.footer2", "POWER SOURCE TO POINT OF CONSUMPTION.")}</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading 
                eyebrow={t("home.headings.why", "Why HubTwinX")} 
                title={t("home.headings.whyTitle", "WHY HUBTWINX?")} 
              />
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
                    {t("home.why.extra", "What exists physically, exists digitally.")}
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
                "linear-gradient(180deg, var(--bg-gradient-top), var(--bg-gradient-bottom))"
            }}
          />
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <Reveal>
              <p className="eyebrow">{t("home.vision.eyebrow", "Our vision")}</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
                {t("home.vision.title1", "MAKE EVERY SITE")} <span className="text-gradient-brand">{t("home.vision.title2", "INTELLIGENT.")}</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                {t("home.vision.p1", "We believe the future of buildings, industries and infrastructure is not simply connected. It is understood.")}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t("home.vision.p2", "HubTwinX aims to create a digital representation of every important element of a site — allowing people and organizations to see, understand, optimize and control their physical environment through one intelligent digital interface.")}
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
                {t("home.cta.title1", "READY TO SEE YOUR ENTIRE HUB")}{" "}
                <span className="text-gradient-brand">{t("home.cta.title2", "DIFFERENTLY?")}</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                {t("home.cta.subtitle", "Discover how HubTwinX can create a Digital Twin of your facility.")}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {t("home.cta.btn1", "BOOK A DEMO")} <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#platform"
                  className="inline-flex items-center rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:border-primary/60 hover:bg-secondary/50"
                >
                  {t("home.cta.btn2", "EXPLORE HUBTWINX")}
                </a>
              </div>
              <p className="mt-10 font-display text-sm tracking-[0.16em] text-muted-foreground">
                {t("home.cta.footer", "YOUR ENTIRE HUB. ONE DIGITAL VIEW. EVERYTHING AT YOUR FINGERTIPS.")}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
