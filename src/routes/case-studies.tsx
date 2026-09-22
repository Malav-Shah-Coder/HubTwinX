import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Database, ShieldAlert, Cpu, Sparkles, Activity, Home, Battery, Sun, Zap, Search, ShieldCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | HubTwinX™" },
      { name: "description", content: "Explore how HubTwinX transforms real-world environments into intelligent Digital Twins." },
    ],
  }),
  component: CaseStudies,
});

function getCases(t: any) {
  return [
    {
      id: "01",
      title: t("caseStudies.c1.title", "Intelligent Energy Home"),
      subtitle: t("caseStudies.c1.subtitle", "Turning a Home Into a Self-Optimizing Energy System"),
      challenge: t("caseStudies.c1.challenge", "Homes use energy across ACs, refrigerators, water heaters, lighting and appliances, but consumption is often reactive and difficult to optimize."),
      solution: t("caseStudies.c1.solution", "HubTwinX creates a real-time digital twin of the home, connecting smart meters, appliances, sensors and energy systems. AI analyzes consumption patterns and automatically recommends or triggers optimized appliance schedules."),
      monitors: [
        t("caseStudies.c1.m1", "Real-time electricity consumption"),
        t("caseStudies.c1.m2", "Appliance-level usage"),
        t("caseStudies.c1.m3", "Peak-load periods"),
        t("caseStudies.c1.m4", "Solar generation"),
        t("caseStudies.c1.m5", "Battery status"),
        t("caseStudies.c1.m6", "Energy wastage")
      ],
      techFlow: [
        t("caseStudies.t.grid", "GRID"),
        t("caseStudies.t.sm", "SMART METER"),
        t("caseStudies.t.hx", "HUBTWINX"),
        t("caseStudies.t.home", "HOME"),
        t("caseStudies.t.ai", "AI")
      ],
      impact: [
        t("caseStudies.c1.i1", "Reduced unnecessary energy consumption"),
        t("caseStudies.c1.i2", "Intelligent appliance scheduling"),
        t("caseStudies.c1.i3", "Better utilization of solar energy"),
        t("caseStudies.c1.i4", "Real-time energy visibility"),
        t("caseStudies.c1.i5", "Predictive energy management")
      ],
      kpiNum: "30%+",
      kpiText: t("caseStudies.c1.kpiText", "Potential Energy Optimization"),
      kpiNote: t("caseStudies.c1.kpiNote", "Illustrative target based on the automation scenario; validate with actual deployment data."),
      visualTarget: t("caseStudies.c1.visual", "3D modern house with glowing energy-flow lines."),
      image: "/cs-1.png",
      icon: <Zap className="size-6 text-brand-cyan" />
    },
    {
      id: "02",
      title: t("caseStudies.c2.title", "AI-Powered Smart Villa"),
      subtitle: t("caseStudies.c2.subtitle", "A Home That Understands Its Residents"),
      challenge: t("caseStudies.c2.challenge", "Traditional home automation depends heavily on manual commands—switching lights, adjusting ACs, controlling curtains, etc."),
      solution: t("caseStudies.c2.solution", "HubTwinX builds a behavior-aware digital twin of the home. AI continuously learns occupancy, movement, and routines to enable contextual automation (e.g., Resident enters bedroom → lights adjust → AC starts → curtains close)."),
      monitors: [
        t("caseStudies.c2.m1", "Occupancy"),
        t("caseStudies.c2.m2", "Room usage"),
        t("caseStudies.c2.m3", "Temperature"),
        t("caseStudies.c2.m4", "Lighting conditions"),
        t("caseStudies.c2.m5", "Movement"),
        t("caseStudies.c2.m6", "Appliance activity"),
        t("caseStudies.c2.m7", "Time-based routines")
      ],
      techFlow: [t("caseStudies.t.sensors", "SENSORS"), t("caseStudies.t.bdata", "BEHAVIOR DATA"), t("caseStudies.t.dtwin", "DIGITAL TWIN"), t("caseStudies.t.auto", "AUTOMATION")],
      impact: [
        t("caseStudies.c2.i1", "Personalized home experiences"),
        t("caseStudies.c2.i2", "Reduced manual interaction"),
        t("caseStudies.c2.i3", "Context-aware automation"),
        t("caseStudies.c2.i4", "Adaptive lighting & climate"),
        t("caseStudies.c2.i5", "Intelligent daily routines")
      ],
      kpiNum: "24/7",
      kpiText: t("caseStudies.c2.kpiText", "Context-Aware Automation"),
      kpiNote: t("caseStudies.c2.kpiNote", "Continuous learning without constant manual input."),
      visualTarget: t("caseStudies.c2.visual", "3D villa with rooms lighting up based on occupancy."),
      image: "/cs-2.png",
      icon: <Cpu className="size-6 text-brand-cyan" />
    },
    {
      id: "03",
      title: t("caseStudies.c3.title", "Predictive Home Maintenance"),
      subtitle: t("caseStudies.c3.subtitle", "Detect Problems Before They Become Repairs"),
      challenge: t("caseStudies.c3.challenge", "Homeowners usually discover problems only after something stops working—AC failure, water leakage, abnormal electricity consumption, appliance overheating, etc."),
      solution: t("caseStudies.c3.solution", "The Digital Twin establishes a normal operating baseline for the home. AI continuously monitors health through sensors, predicting failures before they occur instead of simply reacting to them."),
      monitors: [
        t("caseStudies.c3.m1", "Abnormal power consumption"),
        t("caseStudies.c3.m2", "Unusual appliance temperature"),
        t("caseStudies.c3.m3", "Water leakage"),
        t("caseStudies.c3.m4", "HVAC performance degradation"),
        t("caseStudies.c3.m5", "Unusual motor vibration"),
        t("caseStudies.c3.m6", "Repeated device failures")
      ],
      techFlow: [t("caseStudies.t.device", "DEVICE"), t("caseStudies.t.sensor", "SENSOR"), t("caseStudies.t.data", "DATA"), t("caseStudies.t.ai", "AI"), t("caseStudies.t.pred", "PREDICTION")],
      impact: [
        t("caseStudies.c3.i1", "Early fault detection"),
        t("caseStudies.c3.i2", "Reduced unexpected breakdowns"),
        t("caseStudies.c3.i3", "Improved appliance lifespan"),
        t("caseStudies.c3.i4", "Preventive maintenance"),
        t("caseStudies.c3.i5", "Lower maintenance costs")
      ],
      kpiNum: t("caseStudies.c3.kpiNum", "PROACTIVE"),
      kpiText: t("caseStudies.c3.kpiText", "Predictive Instead of Reactive"),
      kpiNote: t("caseStudies.c3.kpiNote", "Monitoring → Detection → Prediction → Action"),
      visualTarget: t("caseStudies.c3.visual", "AC / washing machine / pump with anomaly indicators."),
      image: "/cs-3.png",
      icon: <Activity className="size-6 text-brand-cyan" />
    },
    {
      id: "04",
      title: t("caseStudies.c4.title", "Smart Security & Safety Twin"),
      subtitle: t("caseStudies.c4.subtitle", "A Digital Guardian for the Home"),
      challenge: t("caseStudies.c4.challenge", "Traditional security systems primarily detect individual events. They don't always understand the context surrounding an event."),
      solution: t("caseStudies.c4.solution", "HubTwinX combines multiple signals into a unified Home Safety Digital Twin. Instead of treating every sensor independently, HubTwinX correlates events to understand true anomalies."),
      monitors: [
        t("caseStudies.c4.m1", "Smart locks"),
        t("caseStudies.c4.m2", "Door/window sensors"),
        t("caseStudies.c4.m3", "Motion sensors"),
        t("caseStudies.c4.m4", "Cameras"),
        t("caseStudies.c4.m5", "Smoke detectors"),
        t("caseStudies.c4.m6", "Gas & Water leak sensors"),
        t("caseStudies.c4.m7", "Emergency systems")
      ],
      techFlow: [t("caseStudies.t.sensors", "SENSORS"), t("caseStudies.t.dtwin", "DIGITAL TWIN"), t("caseStudies.t.corr", "CORRELATION"), t("caseStudies.t.alert", "ALERT"), t("caseStudies.t.auto", "AUTOMATION")],
      impact: [
        t("caseStudies.c4.i1", "Faster anomaly detection"),
        t("caseStudies.c4.i2", "Integrated home safety"),
        t("caseStudies.c4.i3", "Context-aware alerts"),
        t("caseStudies.c4.i4", "Automated emergency responses"),
        t("caseStudies.c4.i5", "Remote monitoring")
      ],
      kpiNum: "1",
      kpiText: t("caseStudies.c4.kpiText", "Unified Safety Intelligence Layer"),
      kpiNote: t("caseStudies.c4.kpiNote", "Correlated contextual awareness across all security endpoints."),
      visualTarget: t("caseStudies.c4.visual", "house cutaway with security zones and sensor signals."),
      image: "/cs-4.png",
      icon: <ShieldCheck className="size-6 text-brand-cyan" />
    },
    {
      id: "05",
      title: t("caseStudies.c5.title", "Sustainable Smart Home"),
      subtitle: t("caseStudies.c5.subtitle", "Connecting Solar, Storage, Appliances & Lifestyle"),
      challenge: t("caseStudies.c5.challenge", "Modern homes increasingly have solar panels, batteries, EVs and smart appliances—but these systems often operate independently. The result is a disconnected ecosystem."),
      solution: t("caseStudies.c5.solution", "HubTwinX creates a unified Digital Twin of the entire home energy ecosystem. AI continuously evaluates generation, storage, consumption and household patterns to optimize the flow."),
      monitors: [
        t("caseStudies.c5.m1", "Solar Generation"),
        t("caseStudies.c5.m2", "Battery Levels"),
        t("caseStudies.c5.m3", "Home Consumption"),
        t("caseStudies.c5.m4", "EV Charging status"),
        t("caseStudies.c5.m5", "Smart Appliance Load")
      ],
      techFlow: [t("caseStudies.t.sb", "SOLAR / BATTERY"), t("caseStudies.t.he", "HOME / EV"), t("caseStudies.t.dtwin", "DIGITAL TWIN"), t("caseStudies.t.aiopt", "AI OPTIMIZATION")],
      impact: [
        t("caseStudies.c5.i1", "Better solar utilization"),
        t("caseStudies.c5.i2", "Intelligent battery charging"),
        t("caseStudies.c5.i3", "EV charging optimization"),
        t("caseStudies.c5.i4", "Reduced grid dependency"),
        t("caseStudies.c5.i5", "Smarter energy management")
      ],
      kpiNum: "100%",
      kpiText: t("caseStudies.c5.kpiText", "Intelligent Energy Ecosystem"),
      kpiNote: t("caseStudies.c5.kpiNote", "High solar generation → charge battery / EV → run high-consumption appliances."),
      visualTarget: t("caseStudies.c5.visual", "premium smart home ecosystem with animated energy flow."),
      image: "/cs-5.png",
      icon: <Sun className="size-6 text-brand-cyan" />
    }
  ];
}

function CaseStudies() {
  const { t } = useTranslation();
  const cases = getCases(t);

  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <section className="px-5 lg:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow">{t("caseStudies.hero.eyebrow", "HubTwinX Case Studies")}</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl">
                {t("caseStudies.hero.title1", "INTELLIGENT")} <span className="text-gradient-brand">{t("caseStudies.hero.title2", "DIGITAL TWINS")}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("caseStudies.hero.copy", "We don't build text-heavy case studies. We build visual intelligence. Explore how HubTwinX turns physical structures into connected, automated, self-optimizing Digital Twins.")}
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
                        <p className="eyebrow !mb-0 text-brand-cyan">{t("caseStudies.general.caseStudy", "Case Study")} {study.id}</p>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">{study.title}</h2>
                      <p className="text-xl text-foreground/80 mt-2 font-display">{study.subtitle}</p>
                      
                      <div className="space-y-8 mt-10">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">{t("caseStudies.general.challenge", "Challenge")}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed block">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">{t("caseStudies.general.solution", "HubTwinX Solution")}</h4>
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
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">{t("caseStudies.general.impact", "Impact")}</h4>
                          <ul className="grid gap-2">
                            {study.impact.map((item: string, i: number) => (
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
                    {/* Visual Image */}
                    <div className="w-full bg-secondary/20 rounded-2xl border border-border flex items-center justify-center overflow-hidden relative group">
                      <img 
                        src={study.image} 
                        alt="Case Study" 
                        loading="lazy"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Tech Flow Diagram */}
                    <div className="surface-panel rounded-2xl border border-border p-5">
                      <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">{t("caseStudies.general.technologyFlow", "Technology Flow")}</h4>
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {study.techFlow.map((step: string, i: number) => (
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
                        <BarChart3 className="size-4 text-brand-cyan" /> {t("caseStudies.general.heroKpi", "Hero KPI")}
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
                <p className="eyebrow uppercase text-brand-cyan">{t("caseStudies.common.eyebrow", "The Common Thread")}</p>
                <h2 className="mt-4 text-3xl sm:text-5xl font-display font-semibold">
                  {t("caseStudies.common.flowTitle", "Sense → Connect → Understand → Predict → Automate")}
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                  {t("caseStudies.common.copy", "All use cases reinforce our core philosophy. We are not just a smart-home product. We build the home-level equivalent of industrial grade digital twins.")}
                </p>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold text-black">
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">{t("caseStudies.common.s1", "Physical Home")}</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">{t("caseStudies.common.s2", "IoT & Sensors")}</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">{t("caseStudies.common.s3", "Real-Time Data")}</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-brand-cyan shadow-[0_0_20px_rgba(45,212,191,0.5)]">{t("caseStudies.common.s4", "Digital Twin")}</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20 text-brand-cyan">{t("caseStudies.common.s5", "AI Intelligence")}</div>
                  <ArrowRight className="size-5 text-brand-cyan hidden md:block" />
                  <div className="px-5 py-3 rounded-xl bg-white border border-transparent shadow shadow-black/20">{t("caseStudies.common.s6", "Prediction & Automation")}</div>
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
