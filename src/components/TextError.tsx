import React from "react";
import textErrorStyles from "../styles/components/TextError.module.scss";

const TextError = (props: any) => {
  return (
    <div className={`error ${textErrorStyles.textError}`}>{props.children}</div>
  );
};

export default TextError;
