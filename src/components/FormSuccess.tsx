import React, { useEffect, useState } from "react";
import { useSuccessContext } from "@/context/FormSuccessContext";
import formSuccessData from "@/data/formSuccessData.json";
import Logo from "./Logo";

const FormSuccess = ({ language }: { language: "en" | "es" }) => {
  const { success, fail, setSuccess, setFail } = useSuccessContext();

  const handleMessageClose = () => {
    setSuccess(false);
    setFail(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (success || fail) {
      timeoutId = setTimeout(() => {
        handleMessageClose();
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [success, fail]);

  const isVisible = success || fail;

  return (
    <div className={`card message-box ${isVisible ? "visible" : ""}`}>
      <div className="icon">
        <Logo />
      </div>
      <div className="content">
        <h2 className="title">
          {success
            ? formSuccessData.thank[language]
            : formSuccessData.sorry[language]}
        </h2>
        <p className="desc">
          {success
            ? formSuccessData.success[language]
            : formSuccessData.fail[language]}
        </p>
        <div className="actions">
          <div onClick={handleMessageClose}>
            <button className={`box-action-btn ${fail ? "error" : ""}`}>
              {success
                ? formSuccessData.buttonSuccess[language]
                : formSuccessData.buttonFail[language]}
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="close" onClick={handleMessageClose}>
        <svg
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FormSuccess;
