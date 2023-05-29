import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TextError = ({ children }: Props) => {
  return <div className={`error`}>{children}</div>;
};

export default TextError;
