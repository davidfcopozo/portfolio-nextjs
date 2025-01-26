import Link from "next/link";
import React, { type JSX } from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

type SocialLinksType = {
  name: string;
  icon: JSX.Element;
  link: string;
};

function SocialIcons() {
  const socialLinks: SocialLinksType[] = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/davidfcopozo",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/davidfranciscopozo/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/daidaicodes",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/daidaicodes",
    },
    {
      name: "Gmail",
      icon: <FiMail />,
      link: "mailto:davidfco.pozo@gmail.com",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
