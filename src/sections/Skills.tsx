import React from "react";
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
  SiPhp,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoFirebase } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const Skills = ({
  id,
  onVisible,
  language,
}: {
  id: string;
  onVisible: (id: string) => void;
  language: "en" | "es";
}) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) onVisible(id);
    },
  });

  return (
    <section id={id} className="skills">
      <motion.div
        ref={ref}
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
        <h2>{language === "en" ? "Skills" : "Habilidades"}</h2>
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
          <h3 className="lang-title">Javascript</h3>
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

        <div className="language-wrapper">
          <SiNodedotjs className="node-js language-icon" />
          <h3 className="lang-title">Node.js</h3>
        </div>

        <div className="language-wrapper">
          <SiTailwindcss className="tailwind-css language-icon" />
          <h3 className="lang-title">Tailwind CSS</h3>
        </div>

        <div className="language-wrapper">
          <BiLogoFirebase className="firebase language-icon" />
          <h3 className="lang-title">Firebase</h3>
        </div>

        <div className="language-wrapper">
          <SiMongodb className="mongo-db language-icon" />
          <h3 className="lang-title">MongoDB</h3>
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
          <h2>
            {language === "en" ? "Currently learning" : "Estoy aprendiendo"}
          </h2>
        </motion.div>
        <div className="learning-wrapper">
          <div className="language-wrapper">
            <TbFileTypeSql className="sql language-icon" />
            <h3 className="lang-title">SQL</h3>
          </div>

          <div className="language-wrapper">
            <SiPhp className="php language-icon" />
            <h3 className="lang-title">PHP</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
