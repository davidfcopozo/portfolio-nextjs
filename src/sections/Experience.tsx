import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experiences from "@/data/experiences.json";
import { useInView } from "react-intersection-observer";

const Experience = ({
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
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  return (
    <motion.section
      ref={ref}
      className="experience"
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
        <h2>{language === "en" ? "My Esperience" : "Mis Experiencias"}</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences &&
            experiences.map((experience, index) => {
              return (
                <li
                  className={`exp-slider-item ${
                    index === selected && "exp-slider-item-selected"
                  }`}
                  onClick={() => setSelected(index)}
                  key={experience.name[language]}
                >
                  <span>{experience.name[language]}</span>
                </li>
              );
            })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role[language]}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].end[language]}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start[language]} -{" "}
              {experiences[selected].end[language]}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription[language].map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
