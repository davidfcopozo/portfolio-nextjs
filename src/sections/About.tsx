import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutSectionData from "@/data/aboutSectionData.json";

const About = ({
  id,
  onVisible,
  language,
}: {
  id: string;
  onVisible: (id: string) => void;
  language: "en" | "es";
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      onVisible(id);
    }
  }, [inView, id, onVisible]);

  return (
    <motion.section
      ref={ref}
      className="about"
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2> {aboutSectionData.title[language]}</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            {aboutSectionData.description[language].split(".")[0] + "."}
          </p>
          <p className="about-grid-info-text">
            {aboutSectionData.description[language].split(".")[1] + "."}
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="about-grid-photo-container">
            <Image src="/about-pic.webp" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
