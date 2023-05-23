import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/sound-scale.png",
      projectName: "SoundScale",
      projectLink: "https://github.com/No-Country/s7-25-ft-desafioreactnative",
      projectDescription:
        "React Native Full-stack project in which I was in charge of the Project&apos;s structure, Music Player with Expo-AV, Navigation structure with React Navigation, Global state setup with Redux Toolkit, created a release version of the app that could be shared with users , among other features.",
      projectTech: [
        "React Native",
        "Redux Toolkit",
        "Nativewind",
        "Webpack",
        "Expo-AV",
        "Expo",
      ],
      projectExternalLinks: {
        github: "https://github.com/No-Country/s7-25-ft-desafioreactnative",
        externalLink: "",
      },
    },
    {
      image: "/mascotapp.png",
      projectName: "MascotApp",
      projectLink: "https://github.com/No-Country/C9-37-ReactNative",
      projectDescription:
        "React Native Full-stack project in which I was in charge of the App design, chat & Sign In/Up implementation with Firebase, reset password website, among other features.",
      projectTech: [
        "React Native",
        "Redux Toolkit",
        "Nativewind",
        "Webpack",
        "Expo",
      ],
      projectExternalLinks: {
        github: "https://github.com/No-Country/C9-37-ReactNative",
        externalLink: "",
      },
    },
    {
      image: "/rainbow-george.png",
      projectName: "Jorge García's Website",
      projectLink: "https://www.rainbowgeorge.es/",
      projectDescription:
        "I changed  the Elementor Wordpress theme that Jorge had been using to a new theme. This involved a lot of careful planning and attention to detail, as I wanted to ensure that the new theme would not only look great but also function smoothly and efficiently.",
      projectTech: ["Wordpress", "Dreamy Portfolio Theme", "Custom CSS"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://www.rainbowgeorge.es/",
      },
    },
    {
      image: "/transportesligeros-juank.png",
      projectName: "Transportes Ligeros JuanK",
      projectLink: "https://www.transportesligeros.es/",
      projectDescription:
        "Moving company website designed and built to boost conversion rate by having multiple call-to-action buttons without being too aggressive.",
      projectTech: [
        "Javascript",
        "NextJs",
        "Framer Motion",
        "Sass",
        "Formik",
        "Yup",
      ],
      projectExternalLinks: {
        github: "https://github.com/davidfcopozo/moving-company",
        externalLink: "https://www.transportesligerosjuank.es/",
      },
    },
    {
      image: "/budget-buddy.png",
      projectName: "Budget Buddy",
      projectLink: "https://budget-buddy-d0db6.web.app/",
      projectDescription:
        "A Front-end App YouTube challenge that I tweaked by adding additional features like: backend, responsiveness, Multilingual & dark theme feature.",
      projectTech: [
        "React Js",
        "Javascript",
        "React Bootstrap",
        "NodeJs",
        "Express",
        "Mongoose",
        "MongoDB",
        "NodeMon",
        "Firebase",
        "Render",
      ],
      projectExternalLinks: {
        github: "https://github.com/davidfcopozo/budget-app",
        externalLink: "https://budget-buddy-d0db6.web.app/",
      },
    },
    {
      image: "/shortlify.png",
      projectName: "Shortlify",
      projectLink: "https://davidfcopozo.github.io/url-shortener-app/",
      projectDescription:
        "This is a functional Frontend Mentor's Link Shortener Landing Page challenge with a difficulty of Intermediate.",
      projectTech: [
        "React Js",
        "Javascript",
        "Sass",
        "Local Storage",
        "Github Pages",
        "API Integration",
      ],
      projectExternalLinks: {
        github: "https://github.com/davidfcopozo/url-shortener-app",
        externalLink: "https://davidfcopozo.github.io/url-shortener-app/",
      },
    },
  ];
  return (
    <section className="projects" id="projects" data-scroll-spy>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Projects</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          (
            {
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            },
            index
          ) => {
            return (
              <motion.div
                className="project"
                key={`${index}-${projectName}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                      src={`${image}`}
                      fill
                      alt={projectName}
                      quality={100}
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      {projectExternalLinks.github && (
                        <Link
                          href={projectExternalLinks.github}
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link>
                      )}
                    </li>
                    <li className="project-info-links-item">
                      {projectExternalLinks.externalLink && (
                        <Link
                          href={projectExternalLinks.externalLink}
                          className="project-info-links-item-link"
                        >
                          <FiExternalLink />
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Projects;
