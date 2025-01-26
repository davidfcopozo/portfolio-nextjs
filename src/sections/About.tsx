import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is David, I am a frontend developer with a passion for
            learning and building things that live on the internet.
          </p>
          <p className="about-grid-info-text">
            I discovered my passion for web development when I was forced to fix
            my girlfriend&apos;s website menu bar, since we didn&apos;t have the
            money to hire a developer, that&apos;s when I was bound to do some
            research on HTML and CSS and I have been in love with web
            development ever since.
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="about-grid-photo-container">
            <Image src="/about-pic.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
