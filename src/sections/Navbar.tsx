import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import sectionLinks from "@/data/sectionLinks.json";
import LanguageButton from "@/components/LanguageButton";

function Navbar({
  activeSection,
  language,
  handleLanguageChange,
}: {
  activeSection: string;
  language: "en" | "es";
  handleLanguageChange: (lang: "en" | "es") => void;
}) {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setNavbarVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleNavLinkClick = (e: Event) => {
      setResponsiveNavVisible(false);
    };

    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    if (!responsiveNavVisible) return;

    const handleBodyClick = (e: MouseEvent) => {
      const nav = document.querySelector(".nav-items");
      if (nav && !nav.contains(e.target as Node)) {
        setResponsiveNavVisible(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);
    return () => document.body.removeEventListener("click", handleBodyClick);
  }, [responsiveNavVisible]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href="#hero">
            <Logo />
          </Link>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name[language]}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link
                  href={link}
                  className={`nav-items-list-item-link ${
                    activeSection === name[language].toLocaleLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {name[language]}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button
              text={language === "en" ? "Resume" : "Currículum"}
              link={
                language === "en"
                  ? "https://drive.google.com/file/d/1A3CU5NRgKrYcM9pcLLfDJmKNeap2iNfB/view"
                  : "https://drive.google.com/file/d/1ralmqHF3OSBb1qfad0fzcSs-g1lMYLWr/view"
              }
              target="_blank"
            />
            <LanguageButton
              language={language}
              handleLanguageChange={handleLanguageChange}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
