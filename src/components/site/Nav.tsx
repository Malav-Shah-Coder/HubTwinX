import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/hubtwinx-logo.png.asset.json";

export const getNavLinks = (t: any) => [
  { label: t("nav.home", "Home"), href: "/" },
  { label: t("nav.about", "About Us"), href: "/about" },
  { label: t("nav.caseStudies", "Case Studies"), href: "/case-studies" },
  { label: t("nav.contact", "Contact"), href: "/contact" },
];

import { useTranslation } from "react-i18next";

export function Nav() {
  const { t } = useTranslation();
  const links = getNavLinks(t);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const isLightStored = localStorage.getItem("theme") === "light";
    setIsLight(isLightStored);
    if (isLightStored) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
      }
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-4 sm:inset-x-6 top-4 sm:top-6 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 rounded-full shadow-2xl transition-all duration-500 bg-foreground text-background border border-background/10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/hubtwinx.png"
            alt="HubTwinX by EnerSpace Technology LLP"
            width={300}
            height={53}
            className="h-9 w-auto transition-all"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm font-medium text-background/80 transition-colors hover:text-brand-cyan"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-background/20 p-2 text-background transition-colors hover:bg-background/10"
          >
            {isLight ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/demo"
            className="hidden rounded-full bg-background px-6 py-2.5 text-sm font-bold text-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex shadow-sm"
          >
            Request Demo
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-background/20 p-2 text-background lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-20 inset-x-4 rounded-2xl bg-foreground text-background p-5 shadow-2xl border border-background/10 lg:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-background/80 hover:bg-background/10 hover:text-brand-cyan"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
