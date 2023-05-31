import { useState } from "react";
import { FormikHelpers } from "formik";
import { useSuccessContext } from "@/context/FormSuccessContext";

const useFormSubmit = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const { setSuccess, setFail } = useSuccessContext();

  interface Values {
    name: string;
    email?: string;
    details?: string;
  }

  const submitData = async (
    values: Values,
    onSubmitProps: FormikHelpers<Values>
  ) => {
    await fetch("https://formsubmit.co/ajax/davidfco.pozo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        NName: values.name,
        Email: values.email,
        Details: values.details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
        setSuccess(data.success);
      })
      .catch((error) => {
        setError(error);
        setFail(error);
        onSubmitProps.setSubmitting(false);
      });
  };

  return { submitData };
};

export default useFormSubmit;
