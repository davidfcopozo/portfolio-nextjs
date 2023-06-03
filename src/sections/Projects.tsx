import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import projectsData from "@/data/projectsData.json";

const Projects = () => {
  return (
    <section className="projects" id="projects">
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
        {projectsData &&
          projectsData.map(
            (
              {
                image,
                projectDescription,
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
                            target="_blank"
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
                            target="_blank"
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
};

export default Projects;
