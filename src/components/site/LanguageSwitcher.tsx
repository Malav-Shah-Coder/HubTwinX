import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState(() => i18n.language.toUpperCase());

  const changeLanguage = (code: string) => {
    setActive(code);
    i18n.changeLanguage(code.toLowerCase());
  };

  const languages = [
    { code: "EN", label: "EN", fontClass: "font-display font-bold" },
    { code: "HI", label: "हिंदी", fontClass: "font-medium text-lg leading-none" },
    { code: "GU", label: "ગુજરાતી", fontClass: "font-medium leading-none pt-1" },
  ];

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-between bg-[#5E5E5E]/90 backdrop-blur-md px-4 py-4 rounded-[20px] shadow-2xl shadow-black/20 border border-white/5 transition-transform hover:scale-105">
      {languages.map((lang, idx) => (
        <div key={lang.code} className="flex flex-col items-center">
          <button
            onClick={() => changeLanguage(lang.code)}
            className={`transition-all duration-300 w-10 flex items-center justify-center ${lang.fontClass} ${
              active === lang.code 
                ? "text-white scale-80 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
                : "text-white/60 text-[12px] hover:text-white/90"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          
          {idx < languages.length - 1 && (
            <div className="h-[1px] w-5 bg-white/20 my-3 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}
