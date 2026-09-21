import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsLight(document.documentElement.classList.contains("light-theme"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-foreground text-background py-14 border-t border-background/10">
      <div className="mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-10 max-w-7xl px-6">
        {/* Column 1: Logo & Text */}
        <div className="flex-shrink-0 lg:max-w-sm">
          <img 
            src="/hubtwinx.png" 
            alt="HubTwinX" 
            width={240} 
            height={64} 
            loading="lazy" 
            className="h-9 w-auto" 
          />
          <p className="mt-5 text-sm text-background/80 leading-relaxed max-w-sm">
            HubTwinX is the ultra-premium digital twin platform for modern site environments. Unmatched intelligence, real-time insights, zero compromise.
          </p>
        </div>

        {/* Column 2: Quick Links in one column */}
        <nav aria-label="Footer" className="flex-1 lg:px-10 lg:flex lg:justify-center">
          <div>
            <h3 className="font-semibold text-background mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-y-2.5">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Case Studies", "/case-studies"],
              ["Book a Demo", "/demo"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label as string}>
                <Link
                  to={href as string}
                  className="text-sm text-background/80 transition-colors hover:text-brand-cyan"
                >
                  {label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </nav>

        {/* Column 3: Contact */}
        <div className="flex-shrink-0 text-sm lg:max-w-sm">
          <h3 className="font-semibold text-background mb-4 text-base">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="size-5 shrink-0 text-brand-cyan mt-0.5" />
              <p className="text-background/80 leading-relaxed">
                EnerSpace Technology LLP<br />
                H 308 Titanium City Center<br />
                100 ft Road, Prahlad Nagar,<br />
                Satellite, Ahmedabad 380015
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-brand-cyan" />
              <p className="text-background/80">+91 82389 72042</p>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-brand-cyan" />
              <a href="mailto:info@hubtwinx.com" className="text-background/80 hover:text-brand-cyan transition-colors">
                info@hubtwinx.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-background/20 px-6 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-background/70">
          © {new Date().getFullYear()} <a href="https://www.hubtwinx.com/">HubTwinX.</a> All rights reserved. Powered By <a href="https://www.arihantsatiate.com/">Arihant Satiate</a> 
        </div>
        <div className="flex items-center gap-6 text-sm text-background/70">
          <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-background transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
