import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProjectInterface {
  image: string;
  projectName: {
    en: string;
    es: string;
  };
  projectLink: string;
  projectDescription: {
    en: string;
    es: string;
  };
  projectTech: string[];
  projectExternalLinks: {
    github: string;
    externalLink: string;
  };
}

interface ProjectCardProps {
  project: ProjectInterface;
  index: number;
  language: "en" | "es";
}

const ProjectCard = ({ project, index, language }: ProjectCardProps) => {
  const name = project?.projectName[language];
  const description = project?.projectDescription[language];
  return (
    <motion.div
      className="project"
      key={`${index}-${name}`}
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
            src={`${project.image}`}
            alt={name}
            fill
            quality={100}
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-info-title">{name}</h3>
        <div className="project-info-description">
          <p>{description}</p>
        </div>
        <ul className="project-info-tech-list">
          {project.projectTech.map((tech) => (
            <li className="project-info-tech-list-item" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <ul className="project-info-links">
          <li className="project-info-links-item">
            {project.projectExternalLinks.github && (
              <Link
                href={project.projectExternalLinks.github}
                className="project-info-links-item-link"
                target="_blank"
              >
                <FiGithub />
              </Link>
            )}
          </li>
          <li className="project-info-links-item">
            {project.projectExternalLinks.externalLink && (
              <Link
                href={project.projectExternalLinks.externalLink}
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
};

export default ProjectCard;
