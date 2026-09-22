import { createFileRoute } from "@tanstack/react-router";
import { MonitorPlay, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sendDemoEmail } from "@/actions/email";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create an object of all form fields based on their 'name' attributes
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      await sendDemoEmail({ data });
      toast.success(t("demo.toast.successTitle", "Demo request sent!"), {
        description: t("demo.toast.successDesc", "Our experts will be in touch with you shortly.")
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(t("demo.toast.errorTitle", "Failed to send request"), {
        description: t("demo.toast.errorDesc", "Please check your network and try again.")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <p className="eyebrow">{t("demo.hero.eyebrow", "See it in action")}</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl border-transparent">
                {t("demo.hero.title1", "BOOK A")} <span className="text-gradient-brand">{t("demo.hero.title2", "DEMO")}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                {t("demo.hero.copy", "Discover how HubTwinX can transform your building, industrial facility, or campus into an intelligent Digital Twin. Schedule a 1-on-1 walkthrough with our platform experts.")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative group">
              {/* Gradient Glow Shadow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/60 via-brand-cyan/30 to-brand-green/60 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-500"></div>
              
              {/* The Form Box */}
              <div className="surface-panel p-8 sm:p-14 rounded-3xl border border-border shadow-2xl relative overflow-hidden bg-background/95 backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <form className="relative space-y-8" onSubmit={handleSubmit}>
                
                {/* Personal Details Row */}
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-6">{t("demo.form.personalDetails", "Personal Details")}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground/90">{t("demo.form.firstName", "First Name")}</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="First Name"
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder={t("demo.form.placeholder.fname", "John")} 
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground/90">{t("demo.form.lastName", "Last Name")}</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="Last Name"
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder={t("demo.form.placeholder.lname", "Doe")} 
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/90">{t("demo.form.email", "Work Email")}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="Email Address"
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                      placeholder={t("demo.form.placeholder.email", "john@company.com")} 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/90">{t("demo.form.phone", "Phone Number")}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="Phone Number"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                      placeholder={t("demo.form.placeholder.phone", "+1 (555) 000-0000")} 
                    />
                  </div>
                </div>

                <hr className="border-border" />

                {/* Company Details Row */}
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-6">{t("demo.form.companyDetails", "Company Information")}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="organization" className="text-sm font-medium text-foreground/90">{t("demo.form.companyName", "Company Name")}</label>
                      <input 
                        type="text" 
                        id="organization" 
                        name="Company Name"
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors" 
                        placeholder={t("demo.form.placeholder.cname", "Acme Corp")} 
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="facilityType" className="text-sm font-medium text-foreground/90">{t("demo.form.facilityType", "Facility Type")}</label>
                      <select 
                        id="facilityType" 
                        name="Facility Type"
                        required
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors text-foreground"
                      >
                        <option value="">{t("demo.form.selectType", "Select facility type...")}</option>
                        <option value="commercial">{t("demo.form.commercial", "Commercial Building")}</option>
                        <option value="industrial">{t("demo.form.industrial", "Industrial / Manufacturing")}</option>
                        <option value="healthcare">{t("demo.form.healthcare", "Healthcare / Hospital")}</option>
                        <option value="education">{t("demo.form.education", "Education / Campus")}</option>
                        <option value="hospitality">{t("demo.form.hospitality", "Hospitality / Hotel")}</option>
                        <option value="residential">{t("demo.form.residential", "Residential Complex")}</option>
                        <option value="other">{t("demo.form.other", "Other")}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="interests" className="text-sm font-medium text-foreground/90">{t("demo.form.goals", "What are you looking to achieve?")}</label>
                  <textarea 
                    id="interests" 
                    name="Objectives"
                    rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-background transition-colors resize-none" 
                    placeholder={t("demo.form.placeholder.goals", "e.g. Energy monitoring, predictive maintenance, automated HVAC...")} 
                  />
                </div>

                <div className="pt-6 flex justify-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full px-12 py-4 font-bold text-primary-foreground shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] disabled:opacity-70 disabled:pointer-events-none"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {isSubmitting ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <Send className="size-5" />
                    )}
                    {isSubmitting ? t("demo.form.btnSending", "Sending...") : t("demo.form.btnSend", "Execute Demo Request")}
                  </button>
                </div>
              </form>
            </div>
          </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
