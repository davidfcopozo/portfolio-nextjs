import Button from "@/components/Button";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { useInView } from "react-intersection-observer";

const Contact = ({
  id,
  onVisible,
}: {
  id: string;
  onVisible: (id: string) => void;
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
      <h2 className="contact-title">Let&apos;s talk!</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">Feel free to send me an e-mail.</p>
      <div className="contact-cta">
        <Button link="mailto:davidfco.pozo@gmail.com" text="Send E-Mail" />
      </div>
      <p className="contact-form-text">
        Alternatively, you can also drop-in an E-mail here!
      </p>
      <ContactForm />
    </motion.section>
  );
};

export default Contact;
