import Button from "@/components/Button";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { useInView } from "react-intersection-observer";
import contactSectionData from "@/data/contactSectionData.json";

const Contact = ({
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
    <motion.section
      ref={ref}
      className="contact"
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
      <h2 className="contact-sub-title">
        {contactSectionData.title[language]}
      </h2>
      <p className="contact-text">{contactSectionData.subtitle[language]}</p>
      <div className="contact-cta">
        <Button
          link="mailto:davidfco.pozo@gmail.com"
          text={contactSectionData.button[language]}
        />
      </div>
      <p className="contact-form-text">
        {contactSectionData.alternative[language]}
      </p>
      <ContactForm language={language} />
    </motion.section>
  );
};

export default Contact;
