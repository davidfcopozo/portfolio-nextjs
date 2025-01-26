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
import { SuccessProvider } from "@/context/FormSuccessContext";
import FormSuccess from "@/components/FormSuccess";
import Script from "next/script";
function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <div className={`app`}>
      <SuccessProvider>
        <Head>
          <title>David Francisco</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {showContent && (
          <>
            <Navbar activeSection={activeSection} />
            <SocialIcons />
            <main>
              <Hero />
              {sections.map(({ id, Component }) => (
                <Component key={id} id={id} onVisible={setActiveSection} />
              ))}
            </main>
            <Footer />
            <FormSuccess />
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
