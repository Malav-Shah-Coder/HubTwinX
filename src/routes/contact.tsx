import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";

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
  return (
    <div id="top" className="overflow-x-hidden">
      <Nav />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <section className="px-5 lg:px-8 max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow">Get in touch</p>
              <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[0.98] sm:text-5xl">
                CONTACT <span className="text-gradient-brand">US</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Whether you want to request a demo, inquire about partnerships, or just learn more about HubTwinX, our team is ready to answer all your questions.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <Reveal delay={100}>
              <div className="surface-panel p-6 sm:p-8 rounded-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-foreground">Organization (Org)</label>
                    <input 
                      type="text" 
                      id="organization" 
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50" 
                      placeholder="Company Name" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">Inquiry Type</label>
                    <select 
                      id="inquiryType" 
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-foreground"
                    >
                      <option value="">Select an option...</option>
                      <option value="demo">Request a Demo</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 resize-none" 
                      placeholder="How can we help you?" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Send className="size-4" /> Send Message
                  </button>
                </form>
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
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-muted-foreground mt-1 text-sm mb-2">For any inquiries, reach out via email.</p>
                      <a href="mailto:info@hubtwinx.com" className="text-brand-cyan hover:underline font-medium">info@hubtwinx.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 surface-panel rounded-xl">
                    <div className="shrink-0 p-3 rounded-full bg-brand-cyan/10 text-brand-cyan">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Corporate Headquarters</h4>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        EnerSpace Technology LLP<br/>
                        H 308 Titanium City Center, 100 ft Road<br/>
                        Prahlad Nagar, Satellite<br/>
                        Ahmedabad 380015, Gujarat, India
                      </p>
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
