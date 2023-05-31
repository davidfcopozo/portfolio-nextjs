import React, { useContext, useState, createContext, useEffect } from "react";

interface ContextProps {
  success: boolean;
  fail: boolean;
  setSuccess: (value: boolean) => void;
  setFail: (value: boolean) => void;
}

const initContextProps: ContextProps = {
  success: false,
  fail: false,
  setSuccess: () => {},
  setFail: () => {},
};

const SuccessContext = createContext(initContextProps);

export function useSuccessContext() {
  return useContext(SuccessContext);
}

interface ChildrenType {
  children: React.ReactNode;
}

export function SuccessProvider({ children }: ChildrenType) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const values = { success, fail, setSuccess, setFail };

  return (
    <SuccessContext.Provider value={values}>{children}</SuccessContext.Provider>
  );
}
