import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="skills" className="skills" ref={ref}>
      <motion.div
        initial="hidden"
        className="title"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Skills</h2>
      </motion.div>
      <div className="lang-wrapper-container">
        <div className="fa-html5 language-wrapper">
          <SiHtml5 className="fa-html5 language-icon" />
          <h3 className="lang-title">HTML</h3>
        </div>

        <div className="fa-css3 language-wrapper">
          <SiCss3 className="fa-css3 language-icon" />
          <h3 className="lang-title">CSS</h3>
        </div>

        <div className="fa-js language-wrapper">
          <SiJavascript className="fa-js language-icon" />
          <h3 className="lang-title">JavaScritp</h3>
        </div>

        <div className="fa-sass language-wrapper">
          <SiSass className="fa-sass language-icon" />
          <h3 className="lang-title">Sass</h3>
        </div>

        <div className="fa-react language-wrapper">
          <SiReact className="fa-react language-icon" />
          <h3 className="lang-title">React JS</h3>
        </div>

        <div className="language-wrapper">
          <SiBootstrap className="fa-bootstrap language-icon" />
          <h3 className="lang-title">Bootstrap</h3>
        </div>

        <div className="language-wrapper">
          <SiNextdotjs className="cib-next-js language-icon" />
          <h3 className="lang-title">Next JS</h3>
        </div>

        <div className="language-wrapper">
          <SiReact className="fa-react language-icon" />
          <h3 className="lang-title">React Native</h3>
        </div>

        <div className="language-wrapper">
          <SiRedux className="cib-redux language-icon" />
          <h3 className="lang-title">Redux Toolkit</h3>
        </div>

        <div className="language-wrapper">
          <SiReactquery className="fa-fan language-icon" />
          <h3 className="lang-title">React Query</h3>
        </div>
      </div>

      <div className="learning-skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <h2>Currenty Learning</h2>
        </motion.div>
        <div className="learning-wrapper">
          <div className="language-wrapper">
            <SiTypescript className="typescript language-icon" />
            <h3 className="lang-title">Typescript</h3>
          </div>

          <div className="language-wrapper">
            <SiNodedotjs className="fa-node-js language-icon" />
            <h3 className="lang-title">Node JS</h3>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
