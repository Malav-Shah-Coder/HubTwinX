import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | HubTwinX™" },
      {
        name: "description",
        content: "Learn more about HubTwinX, our vision, mission, and the team behind the scenes.",
      },
    ],
  }),
  component: AboutUs,
});

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* HERO SECTION */}
        <section className="px-5 lg:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow uppercase">{t("about.hero.eyebrow", "About Us")}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-6xl font-display">
                {t("about.hero.title1", "Making the Digital Journey")} <br />
                <span className="text-gradient-brand leading-tight">{t("about.hero.title2", "Visible, Intelligent")}</span> {t("about.hero.title3", "& Better.")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("about.hero.copy1", "HubTwinX was built to bring unprecedented clarity to how your site operates, performs, and is used. We combine digital twin technology with intelligence to create a connected digital view of the entire facility — from energy and assets to spaces and equipment.")}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t("about.hero.copy2", "Our focus is simple: help operations become easier to understand, analyze, automate, and improve.")}
              </p>
            </div>
          </Reveal>
        </section>

        {/* VISION & MISSION CARDS */}
        <section className="px-5 lg:px-8 max-w-7xl mx-auto mt-20">
          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="surface-panel p-8 sm:p-10 rounded-2xl border border-border shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-cyan/10 transition-colors"></div>
                <h3 className="font-display text-2xl font-semibold text-foreground relative">{t("about.vision.title", "Our Vision")}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm relative">
                  {t("about.vision.copy", "A world where understanding your building or facility is as effortless as understanding a connected smart home. We envision a future where site operations are entirely data-driven, creating spaces that are intelligent, highly efficient, and intuitive to manage.")}
                </p>
              </div>

              <div className="surface-panel p-8 sm:p-10 rounded-2xl border border-border shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-brand-green/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors"></div>
                <h3 className="font-display text-2xl font-semibold text-foreground relative">{t("about.mission.title", "Our Mission")}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm relative">
                  {t("about.mission.copy", "To make the invisible physical environment visible and intelligent. We exist to provide the most cohesive and connected digital twin platform—equipping organizations with the insights necessary to optimize performance, reduce waste, and manage easily.")}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="px-5 lg:px-8 max-w-5xl mx-auto mt-28">
          <Reveal>
            <div className="mb-10 text-center sm:text-left">
              <p className="eyebrow uppercase">{t("about.leadership.eyebrow", "Leadership")}</p>
              <h2 className="mt-3 text-3xl font-semibold font-display">{t("about.leadership.title", "Guiding Our Vision")}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
              {[
                {
                  name: "Er Dr Niraj Shah",
                  role: t("about.leadership.role1", "Director of HubTwinX"),
                  desc: t("about.leadership.desc1", "Automation & Robotics Engineer · Academician, Mentor"),
                  linkedin: "https://www.linkedin.com/in/ernirajshah/",
                  img: "/Niraj-Shah.png"
                },
                {
                  name: "Sudip Mehta",
                  role: t("about.leadership.role2", "Director of HubTwinX"),
                  desc: t("about.leadership.desc2", "Computer Wizard · Entrepreneur & Analyst"),
                  linkedin: "https://www.linkedin.com/in/sudip-mehta-51a67067/",
                  img: "/Sudip-Mehta.png"
                }
              ].map((member) => (
                <div key={member.name} className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-border bg-secondary/20">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {/* Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent"></div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold font-display text-white leading-none">{member.name}</h4>
                      <p className="text-brand-cyan text-sm font-semibold mt-2">{member.role}</p>
                      <p className="text-white/80 mt-2 text-xs leading-relaxed max-w-[200px]">{member.desc}</p>
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="shrink-0 size-10 rounded-full bg-white/10 hover:bg-brand-cyan/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="size-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* TECH TEAM */}
        <section className="px-5 lg:px-8 max-w-7xl mx-auto mt-28">
          <Reveal>
            <div className="mb-10 text-center sm:text-left">
              <p className="eyebrow uppercase">{t("about.techTeam.eyebrow", "Tech Team")}</p>
              <h2 className="mt-3 text-3xl font-semibold font-display">{t("about.techTeam.title", "The Technology Team Behind the Platform")}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Malav Shah",
                  linkedin: "https://www.linkedin.com/in/malav-shah-dev/",
                  img: "/Malav-Shah.png"
                },
                {
                  name: "Rakhshit Kothari",
                  linkedin: "https://www.linkedin.com/in/rakshit-kothari-280b31232/",
                  img: "/Rakhshit-Kothari.png"
                },
                {
                  name: "Deep Prajapati",
                  linkedin: "https://www.linkedin.com/in/deep-prajapati-54a93a27a/",
                  img: "/Deep-Prajapati.png"
                }
              ].map((member) => (
                <div key={member.name} className="relative aspect-square rounded-2xl overflow-hidden group border border-border bg-secondary/20 bg-white">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {/* Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent"></div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                    <h4 className="text-xl font-bold font-display text-white leading-none">{member.name}</h4>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="shrink-0 size-8 rounded-full bg-white/10 hover:bg-brand-cyan/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="size-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
