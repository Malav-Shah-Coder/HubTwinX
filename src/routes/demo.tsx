import { createFileRoute } from "@tanstack/react-router";
import { MonitorPlay, Send } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo | HubTwinX™" },
      { name: "description", content: "Schedule a personalized demo of the HubTwinX platform." },
    ],
  }),
  component: BookDemo,
});

function BookDemo() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <section className="px-5 lg:px-8 max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand-cyan/10 text-brand-cyan mb-6">
                <MonitorPlay className="size-8" />
              </div>
              <p className="eyebrow">See it in action</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl border-transparent">
                BOOK A <span className="text-gradient-brand">DEMO</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Discover how HubTwinX can transform your building, industrial facility, or campus into an intelligent Digital Twin. Schedule a 1-on-1 walkthrough with our platform experts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="surface-panel p-8 sm:p-14 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <form className="relative space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Personal Details Row */}
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-6">Personal Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground/90">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground/90">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/90">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                      placeholder="john@company.com" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/90">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                </div>

                <hr className="border-border" />

                {/* Company Details Row */}
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-6">Company Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="organization" className="text-sm font-medium text-foreground/90">Company Name</label>
                      <input 
                        type="text" 
                        id="organization" 
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="facilityType" className="text-sm font-medium text-foreground/90">Facility Type</label>
                      <select 
                        id="facilityType" 
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors text-foreground"
                      >
                        <option value="">Select facility type...</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="industrial">Industrial / Manufacturing</option>
                        <option value="healthcare">Healthcare / Hospital</option>
                        <option value="education">Education / Campus</option>
                        <option value="hospitality">Hospitality / Hotel</option>
                        <option value="residential">Residential Complex</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="interests" className="text-sm font-medium text-foreground/90">What are you looking to achieve?</label>
                  <textarea 
                    id="interests" 
                    rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors resize-none" 
                    placeholder="e.g. Energy monitoring, predictive maintenance, automated HVAC..." 
                  />
                </div>

                <div className="pt-6 flex justify-center">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full px-12 py-4 font-bold text-primary-foreground shadow-lg shadow-brand-cyan/20 transition-transform duration-300 hover:scale-[1.03]"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Send className="size-5" /> Execute Demo Request
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
