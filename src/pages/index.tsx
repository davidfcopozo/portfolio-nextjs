import Head from "next/head";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
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
  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <SuccessProvider>
        <Head>
          <title>David Francisco</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {showContent && (
          <>
            <Navbar />
            <SocialIcons />
            <main>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <About />
              <Contact />
            </main>
            <Footer />
            <FormSuccess />
          </>
        )}
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
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
