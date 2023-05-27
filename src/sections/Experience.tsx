import Link from "next/link";
import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "No Country",
      role: "Frontend Developer",
      url: "https://www.nocountry.tech/",
      start: "January 2023",
      end: "April 2023",
      shortDescription: [
        "As a Frontend Developer at No Country, I worked with a team of developers, designers and project managers to build two Mobile Apps as part of their job environment simulation.",
        "Throughout the time of the internship, I had the opportunity to work with various technologies, including React Native, Redux Toolkit, Nativewind, Node.js, Sequelize, Firebase, Jira, Trello among others.",
        "I also had the opportunity to design one of the apps with Miro and Figma.",
        "Additionally, I was in charge of setting up the project structure and boilerplate code for one of the projects.",
      ],
    },
    {
      name: "Jorge García",
      role: "Frontend Developer (Freelance)",
      url: "https://rainbowgeorge.es/",
      start: "April 2023",
      end: "April 2023",
      shortDescription: [
        "I worked closely with Jorge to understand his specific needs and preferences and I was able to incorporate his feedback into picking the most convenient theme.",
        "I was responsible for was changing the Elementor Wordpress theme that Jorge had been using to a new theme. This involved a lot of careful planning and attention to detail, as I wanted to ensure that the new theme would not only look great but also function smoothly and efficiently.",
      ],
    },
    {
      name: "TL JuanK",
      role: "Frontend Developer (Freelance)",
      url: "https://transportesligerosjuank.es",
      start: "February 2023",
      end: "February 2023",
      shortDescription: [
        "I designed and built a website that effectively showcased the services offered by Transportes Ligeros JuanK.",
        "For the designed and built of the website I used a variety of technologies, including NextJs, Javascript, Framer Motion, SASS Formik and Yup.",
        "I drew on my experience as a Front Developer to ensure that the website was optimized for performance, SEO and speed.",
        "I also utilized my strong communication skills to keep the client informed and engaged throughout the development process.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      ref={ref}
    >
      <div className="title">
        <h2>My Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
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
    </motion.div>
  );
});

export default Experience;
