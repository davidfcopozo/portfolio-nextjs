import React, { useEffect } from "react";
import { motion } from "framer-motion";
import projectsData from "@/data/projectsData.json";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/ProjectCard";

const Projects = ({
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
    <section className="projects" id={id}>
      <motion.div
        ref={ref}
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
        <h2>{language === "en" ? "Projects" : "Proyectos"}</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData &&
          projectsData.map((project, index) => (
            <ProjectCard project={project} index={index} language={language} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
