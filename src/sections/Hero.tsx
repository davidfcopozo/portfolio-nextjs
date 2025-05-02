import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroSectionData from "@/data/heroSectionData.json";
import { useInView } from "react-intersection-observer";

function Hero({ language }: { language: "en" | "es" }) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        const navLinks = document.querySelectorAll(".nav-items-list-item-link");
        navLinks.forEach((link) => link.classList.remove("active"));
      }
    },
  });

  return (
    <section ref={ref} className="hero" id="hero">
      <motion.div className="hero-inner-container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          {heroSectionData.greeting[language]}
        </motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.75,
          }}
        >
          {heroSectionData.name[language]}
        </motion.h2>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.05,
          }}
        >
          {heroSectionData.location[language]}
        </motion.h3>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35,
          }}
        >
          {heroSectionData.description[language]}
        </motion.p>
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.65,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="hero-img-container"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Image
          src="/profile-pic.webp"
          alt="Picture of David Francisco"
          style={{
            objectFit: "cover",
          }}
          width={400}
          height={400}
          loading="eager"
          priority
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
