import * as Yup from "yup";

const yupContactFormValidation = () => {
  const contactFormInitialValues = {
    name: "",
    cel: 0,
    email: "",
    details: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string(),
    cel: Yup.number()
      .typeError("This field only takes numbers.")
      .min(9, "Incomplete phone number.")
      .integer(),
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
