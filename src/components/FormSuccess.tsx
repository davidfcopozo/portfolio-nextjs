import React, { MouseEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import xMark from "../../public/xMark.svg";
import checkMark from "../../public/check.svg";
import Image from "next/legacy/image";
import { useSuccessContext } from "@/context/FormSuccessContext";

const FormSuccess = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { success, fail } = useSuccessContext();

  useEffect(() => {
    setOpen(success);

    if (success || fail) {
      setFormSubmitted(true);
    }
  }, [success, fail]);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      duration: 2,
      stiffness: 200,
    },
  };

  const handleModalContainerClick = (e: MouseEvent) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("success-container");
    modalContainer?.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        setFormSubmitted(false);
      }
    });
  };

  const bgColor = open ? "#43C467" : "#ff0000";

  return (
    <motion.div
      initial="hidden"
      variants={dropIn}
      animate={formSubmitted ? "visible" : "hidden"}
      exit="exit"
      className={`${"success-container"} ${formSubmitted && "is-active"}`}
      id="success-container"
      onClick={handleModalContainerClick}
    >
      <div className={"message-box"}>
        <div className={"img-container"}>
          <Image
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            objectPosition="center"
            src={open ? checkMark.src : xMark.src}
            alt={open ? "Green checkmark" : "Red X"}
          />
        </div>

        <h2>{open ? "Thank you!" : "Sorry!"}</h2>
        <p>
          {open
            ? `Your message had been sent successfully. I will get back to you as soon as possible.`
            : "Something went wrong. Please try again"}
        </p>
        <motion.button
          style={{ backgroundColor: `${bgColor}` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFormSubmitted(false)}
          className="form-success-btn"
        >
          {open ? "Ok!" : "Try Again"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
