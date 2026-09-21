import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Database, ShieldAlert, Cpu, Sparkles, Activity, Home, Battery, Sun, Zap, Search, ShieldCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | HubTwinX™" },
      { name: "description", content: "Explore how HubTwinX transforms real-world environments into intelligent Digital Twins." },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  const cases = [
    {
      id: "01",
      title: "Intelligent Energy Home",
      subtitle: "Turning a Home Into a Self-Optimizing Energy System",
      challenge: "Homes use energy across ACs, refrigerators, water heaters, lighting and appliances, but consumption is often reactive and difficult to optimize.",
      solution: "HubTwinX creates a real-time digital twin of the home, connecting smart meters, appliances, sensors and energy systems. AI analyzes consumption patterns and automatically recommends or triggers optimized appliance schedules.",
      monitors: ["Real-time electricity consumption", "Appliance-level usage", "Peak-load periods", "Solar generation", "Battery status", "Energy wastage"],
      techFlow: ["GRID", "SMART METER", "HUBTWINX", "HOME", "AI"],
      impact: ["Reduced unnecessary energy consumption", "Intelligent appliance scheduling", "Better utilization of solar energy", "Real-time energy visibility", "Predictive energy management"],
      kpiNum: "30%+",
      kpiText: "Potential Energy Optimization",
      kpiNote: "Illustrative target based on the automation scenario; validate with actual deployment data.",
      visualTarget: "3D modern house with glowing energy-flow lines.",
      icon: <Zap className="size-6 text-brand-cyan" />
    },
    {
      id: "02",
      title: "AI-Powered Smart Villa",
      subtitle: "A Home That Understands Its Residents",
      challenge: "Traditional home automation depends heavily on manual commands—switching lights, adjusting ACs, controlling curtains, etc.",
      solution: "HubTwinX builds a behavior-aware digital twin of the home. AI continuously learns occupancy, movement, and routines to enable contextual automation (e.g., Resident enters bedroom → lights adjust → AC starts → curtains close).",
      monitors: ["Occupancy", "Room usage", "Temperature", "Lighting conditions", "Movement", "Appliance activity", "Time-based routines"],
      techFlow: ["SENSORS", "BEHAVIOR DATA", "DIGITAL TWIN", "AUTOMATION"],
      impact: ["Personalized home experiences", "Reduced manual interaction", "Context-aware automation", "Adaptive lighting & climate", "Intelligent daily routines"],
      kpiNum: "24/7",
      kpiText: "Context-Aware Automation",
      kpiNote: "Continuous learning without constant manual input.",
      visualTarget: "3D villa with rooms lighting up based on occupancy.",
      icon: <Cpu className="size-6 text-brand-cyan" />
    },
    {
      id: "03",
      title: "Predictive Home Maintenance",
      subtitle: "Detect Problems Before They Become Repairs",
      challenge: "Homeowners usually discover problems only after something stops working—AC failure, water leakage, abnormal electricity consumption, appliance overheating, etc.",
      solution: "The Digital Twin establishes a normal operating baseline for the home. AI continuously monitors health through sensors, predicting failures before they occur instead of simply reacting to them.",
      monitors: ["Abnormal power consumption", "Unusual appliance temperature", "Water leakage", "HVAC performance degradation", "Unusual motor vibration", "Repeated device failures"],
      techFlow: ["DEVICE", "SENSOR", "DATA", "AI", "PREDICTION"],
      impact: ["Early fault detection", "Reduced unexpected breakdowns", "Improved appliance lifespan", "Preventive maintenance", "Lower maintenance costs"],
      kpiNum: "PROACTIVE",
      kpiText: "Predictive Instead of Reactive",
      kpiNote: "Monitoring → Detection → Prediction → Action",
      visualTarget: "AC / washing machine / pump with anomaly indicators.",
      icon: <Activity className="size-6 text-brand-cyan" />
    },
    {
      id: "04",
      title: "Smart Security & Safety Twin",
      subtitle: "A Digital Guardian for the Home",
      challenge: "Traditional security systems primarily detect individual events. They don't always understand the context surrounding an event.",
      solution: "HubTwinX combines multiple signals into a unified Home Safety Digital Twin. Instead of treating every sensor independently, HubTwinX correlates events to understand true anomalies.",
      monitors: ["Smart locks", "Door/window sensors", "Motion sensors", "Cameras", "Smoke detectors", "Gas & Water leak sensors", "Emergency systems"],
      techFlow: ["SENSORS", "DIGITAL TWIN", "CORRELATION", "ALERT", "AUTOMATION"],
      impact: ["Faster anomaly detection", "Integrated home safety", "Context-aware alerts", "Automated emergency responses", "Remote monitoring"],
      kpiNum: "1",
      kpiText: "Unified Safety Intelligence Layer",
      kpiNote: "Correlated contextual awareness across all security endpoints.",
      visualTarget: "house cutaway with security zones and sensor signals.",
      icon: <ShieldCheck className="size-6 text-brand-cyan" />
    },
    {
      id: "05",
      title: "Sustainable Smart Home",
      subtitle: "Connecting Solar, Storage, Appliances & Lifestyle",
      challenge: "Modern homes increasingly have solar panels, batteries, EVs and smart appliances—but these systems often operate independently. The result is a disconnected ecosystem.",
      solution: "HubTwinX creates a unified Digital Twin of the entire home energy ecosystem. AI continuously evaluates generation, storage, consumption and household patterns to optimize the flow.",
      monitors: ["Solar Generation", "Battery Levels", "Home Consumption", "EV Charging status", "Smart Appliance Load"],
      techFlow: ["SOLAR / BATTERY", "HOME / EV", "DIGITAL TWIN", "AI OPTIMIZATION"],
      impact: ["Better solar utilization", "Intelligent battery charging", "EV charging optimization", "Reduced grid dependency", "Smarter energy management"],
      kpiNum: "100%",
      kpiText: "Intelligent Energy Ecosystem",
      kpiNote: "High solar generation → charge battery / EV → run high-consumption appliances.",
      visualTarget: "premium smart home ecosystem with animated energy flow.",
      icon: <Sun className="size-6 text-brand-cyan" />
    }
  ];

  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <section className="px-5 lg:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow">HubTwinX Case Studies</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl">
                INTELLIGENT <span className="text-gradient-brand">DIGITAL TWINS</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We don't build text-heavy case studies. We build visual intelligence. Explore how HubTwinX turns physical structures into connected, automated, self-optimizing Digital Twins.
              </p>
            </div>
          </Reveal>

          <div className="space-y-24">
            {cases.map((study, idx) => (
              <Reveal key={study.id} delay={100}>
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch p-6 sm:p-10 rounded-3xl border border-border bg-card/40">
                  
                  {/* Left Column - Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center p-2 rounded-lg bg-secondary/80 border border-border">
                          {study.icon}
                        </span>
                        <p className="eyebrow !mb-0 text-brand-cyan">Case Study {study.id}</p>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">{study.title}</h2>
                      <p className="text-xl text-foreground/80 mt-2 font-display">{study.subtitle}</p>
                      
                      <div className="space-y-8 mt-10">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Challenge</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed block">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">HubTwinX Solution</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed block">
                            {study.solution}
                          </p>
                          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                            {study.monitors.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className="text-brand-cyan mt-1">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Impact</h4>
                          <ul className="grid gap-2">
                            {study.impact.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                                <Sparkles className="size-4 text-brand-cyan/70 shrink-0" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Visual & Tech Flow & KPI */}
                  <div className="flex flex-col gap-6">
                    {/* Visual Target Placeholder */}
                    <div className="flex-1 min-h-[300px] w-full bg-secondary/20 rounded-2xl border border-border flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background/40 to-transparent"></div>
                      
                      <div className="relative text-center p-8 max-w-sm">
                        <Search className="size-10 text-brand-cyan/40 mx-auto mb-4" />
                        <p className="font-display font-medium text-foreground/80 text-lg mb-2">Visual Required</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.visualTarget}
                        </p>
                      </div>
                    </div>

                    {/* Tech Flow Diagram */}
                    <div className="surface-panel rounded-2xl border border-border p-5">
                      <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">Technology Flow</h4>
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {study.techFlow.map((step, i) => (
                          <div key={i} className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-background border border-border text-foreground/90">
                              {step}
                            </span>
                            {i < study.techFlow.length - 1 && (
                              <ArrowRight className="size-4 text-brand-cyan shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hero KPI Block */}
                    <div className="bg-card/40 border border-brand-cyan/20 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5 bg-gradient-to-bl from-brand-cyan to-transparent h-full w-1/2"></div>
                      <h4 className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                        <BarChart3 className="size-4 text-brand-cyan" /> Hero KPI
                      </h4>
                      <div>
                        <p className="text-3xl sm:text-4xl font-bold text-gradient-brand leading-tight">
                          {study.kpiNum}
                        </p>
                        <p className="text-lg font-display text-foreground mt-1">{study.kpiText}</p>
                        <p className="text-xs text-muted-foreground mt-3 border-t border-border/50 pt-3 leading-relaxed">
                          {study.kpiNote}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The Common HubTwinX Story */}
        <section className="px-5 lg:px-8 max-w-7xl mx-auto mt-32">
          <Reveal>
            <div className="bg-[#020617] text-white p-10 sm:p-16 rounded-3xl border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-40 bg-brand-cyan/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 p-40 bg-brand-green/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <div className="relative">
                <p className="eyebrow uppercase text-brand-cyan">The Common Thread</p>
                <h2 className="mt-4 text-3xl sm:text-5xl font-display font-semibold">
                  Sense → Connect → Understand → Predict → Automate
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                  All use cases reinforce our core philosophy. We are not just a smart-home product. We build the home-level equivalent of industrial grade digital twins.
                </p>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold text-black">
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">Physical Home</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">IoT & Sensors</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">Real-Time Data</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-brand-cyan shadow-[0_0_20px_rgba(45,212,191,0.5)]">Digital Twin</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20 text-brand-cyan">AI Intelligence</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">Prediction & Automation</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
