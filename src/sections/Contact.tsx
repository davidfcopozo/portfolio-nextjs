import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      data-scroll-spy
    >
      <h2 className="contact-title">Let&apos;s talk!</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">Feel free to send me an e-mail.</p>
      <div className="contact-cta">
        <Button link="mailto:davidfco.pozo@gmail.com" text="Send E-Mail" />
      </div>
    </motion.section>
  );
}

export default Contact;
