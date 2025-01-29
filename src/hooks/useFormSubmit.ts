import { useState } from "react";
import { FormikHelpers } from "formik";
import { useSuccessContext } from "@/context/FormMessageBoxContext";

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
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/davidfco.pozo@gmail.com",
        {
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
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Submission failed");
      }

      setData(responseData);
      setSuccess(true);
      setFail(false);
      onSubmitProps.resetForm();
    } catch (error) {
      setError(error as string);
      setSuccess(false);
      setFail(true);
    } finally {
      onSubmitProps.setSubmitting(false);
    }
  };

  return { submitData };
};

export default useFormSubmit;
