"use client";

import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export default function LanguageButton({
  language,
  handleLanguageChange,
}: {
  language: "en" | "es";
  handleLanguageChange: (lang: "en" | "es") => void;
}) {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const dropdown = document.querySelector(".language-dropdown-content");
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node) &&
        dropdown?.classList.contains("show")
      ) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-button-container">
      <div className="language-resume-dropdown" ref={languageDropdownRef}>
        <button
          className="language-button"
          onClick={handleDropdownClick}
          aria-expanded={languageDropdownOpen}
        >
          {language.toUpperCase()}
        </button>

        <div
          className={`language-dropdown-content ${
            languageDropdownOpen ? "show" : ""
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="language-dropdown-item"
              onClick={() => {
                console.log("Language selected:", lang.code);
                handleLanguageChange(lang.code as "en" | "es");
                setLanguageDropdownOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
