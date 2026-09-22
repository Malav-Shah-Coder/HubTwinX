import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sendDemoEmail } from "@/actions/email";
import { useTranslation } from "react-i18next";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | HubTwinX™" },
      { name: "description", content: "Get in touch with the HubTwinX team." },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
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
      toast.success(t("contact.toast.successTitle", "Message sent successfully!"), {
        description: t("contact.toast.successDesc", "Our team will review your inquiry and reach out soon.")
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(t("contact.toast.errorTitle", "Failed to send message"), {
        description: t("contact.toast.errorDesc", "Please check your network and try again.")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <section className="px-5 lg:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow">{t("contact.hero.eyebrow", "Get in touch")}</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl">
                {t("contact.hero.title1", "CONTACT")} <span className="text-gradient-brand">{t("contact.hero.title2", "US")}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("contact.hero.copy", "Whether you want to request a demo, inquire about partnerships, or just learn more about HubTwinX, our team is ready to answer all your questions.")}
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <Reveal delay={100}>
              <div className="relative group h-full">
                {/* Gradient Glow Shadow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/60 via-brand-cyan/30 to-brand-green/60 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-500"></div>
                
                {/* The Form Box */}
                <div className="surface-panel p-6 sm:p-8 rounded-2xl relative bg-background/95 backdrop-blur-xl h-full">
                  <div className="absolute top-0 left-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none"></div>
                  
                  <form className="space-y-6 relative" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">{t("contact.form.firstName", "First Name")}</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="First Name"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                        placeholder={t("contact.form.placeholder.fname", "John")} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">{t("contact.form.lastName", "Last Name")}</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="Last Name"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                        placeholder={t("contact.form.placeholder.lname", "Doe")} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">{t("contact.form.email", "Email")}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="Email Address"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                      placeholder={t("contact.form.placeholder.email", "john@example.com")} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-foreground">{t("contact.form.org", "Organization (Org)")}</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="Organization"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                      placeholder={t("contact.form.placeholder.org", "Company Name")} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">{t("contact.form.inquiry", "Inquiry Type")}</label>
                    <select 
                      id="inquiryType" 
                      name="Inquiry Type"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-foreground"
                    >
                      <option value="">{t("contact.form.selectOption", "Select an option...")}</option>
                      <option value="demo">{t("contact.form.reqDemo", "Request a Demo")}</option>
                      <option value="sales">{t("contact.form.sales", "Sales Inquiry")}</option>
                      <option value="support">{t("contact.form.support", "Technical Support")}</option>
                      <option value="other">{t("contact.form.other", "Other")}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">{t("contact.form.message", "Message")}</label>
                    <textarea 
                      id="message" 
                      name="Message"
                      rows={4}
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 resize-none" 
                      placeholder={t("contact.form.placeholder.message", "How can we help you?")} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-primary-foreground shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] disabled:opacity-70 disabled:pointer-events-none"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {isSubmitting ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {isSubmitting ? t("contact.form.btnSending", "Sending...") : t("contact.form.btnSend", "Send Message")}
                  </button>
                </form>
               </div>
              </div>
            </Reveal>

            {/* Right Column: Details & Map */}
            <Reveal delay={200}>
              <div className="space-y-8 h-full flex flex-col">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-5 surface-panel rounded-xl">
                    <div className="shrink-0 p-3 rounded-full bg-brand-cyan/10 text-brand-cyan">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t("contact.info.emailTitle", "Email Us")}</h4>
                      <p className="text-muted-foreground mt-1 text-sm mb-2">{t("contact.info.emailCopy", "For any inquiries, reach out via email.")}</p>
                      <a href="mailto:info@hubtwinx.com" className="text-brand-cyan hover:underline font-medium">info@hubtwinx.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 surface-panel rounded-xl">
                    <div className="shrink-0 p-3 rounded-full bg-brand-cyan/10 text-brand-cyan">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t("contact.info.hqTitle", "Corporate Headquarters")}</h4>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t("contact.info.hqCopy", "EnerSpace Technology LLP<br/>H 308 Titanium City Center, 100 ft Road<br/>Prahlad Nagar, Satellite<br/>Ahmedabad 380015, Gujarat, India") }} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-[300px] rounded-xl overflow-hidden border border-border relative bg-secondary/50">
                  <iframe 
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.627670984955!2d72.508933!3d23.0180459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278dfc5c7d%3A0xeaba0c8fc020297f!2sTitanium%20City%20Center!5e0!3m2!1sen!2sin!4v1700684120349!5m2!1sen!2sin" 
                    className="absolute inset-0 w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
