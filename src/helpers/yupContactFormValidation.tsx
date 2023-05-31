import * as Yup from "yup";

const yupContactFormValidation = () => {
  const contactFormInitialValues = {
    name: "",
    email: "",
    details: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string()
      .email("Invalid email address.")
      .required("This field is required."),
    details: Yup.string().required("Please, type a message."),
  });

  return {
    contactFormValidationSchema,
    contactFormInitialValues,
  };
};

export default yupContactFormValidation;
