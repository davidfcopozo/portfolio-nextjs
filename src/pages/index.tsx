import Head from "next/head";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useEffect, useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import { SuccessProvider } from "@/context/FormMessageBoxContext";
import FormSuccess from "@/components/FormMessageBox";
import Script from "next/script";
type language = "en" | "es";
function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [language, setLanguage] = useState<language>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let language = localStorage.getItem("language");
      if (!language) {
        language = navigator.language.startsWith("es") ? "es" : "en";
        localStorage.setItem("language", language);
        setLanguage(language as language);
      } else {
        setLanguage(language as language);
      }
    }
  }, []);

  const sections = [
    { id: "experience", Component: Experience },
    { id: "projects", Component: Projects },
    { id: "skills", Component: Skills },
    { id: "about", Component: About },
    { id: "contact", Component: Contact },
  ];

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowContent(true);
      setIsLoading(false);
    } else {
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 1900);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash && showContent) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showContent]);

  const handleLanguageChange = (lang: "en" | "es") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className={`app`}>
      <SuccessProvider>
        <Head>
          <title>David Francisco</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {showContent && (
          <>
            <Navbar
              activeSection={activeSection}
              language={language}
              handleLanguageChange={handleLanguageChange}
            />
            <SocialIcons />
            <main>
              <Hero language={language} />
              {sections.map(({ id, Component }) => (
                <Component
                  key={id}
                  id={id}
                  onVisible={setActiveSection}
                  language={language}
                />
              ))}
            </main>
            <Footer language={language} />
            <FormSuccess language={language} />
          </>
        )}
        <Loader isLoading={isLoading} setIsLoading={() => {}} />
      </SuccessProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-58NQPEXMLK"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-58NQPEXMLK');`}
      </Script>
    </div>
  );
}
export default Index;
