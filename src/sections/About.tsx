import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
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
      data-scroll-spy
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is David, I am a frontend developer with a passion to learn
            and build things that live on the internet.
          </p>
          <p className="about-grid-info-text">
            I discovered my passion for web development when I was forced to fix
            my girlfriend&apos;s website menu bar, since we didn&apos;t have the
            money to hire a developer, that&apos;s when I was bound to do some
            research on HTML and CSS and I have been in love with web
            development ever since.
          </p>

          {/*           <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul> */}
        </div>
        <div className="about-grid-photo">
          {/* <div className="overlay"></div>
          <div className="overlay-border"></div>
        */}
          <div className="about-grid-photo-container">
            <Image src="/about-pic.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
