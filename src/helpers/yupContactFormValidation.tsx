import * as Yup from "yup";

const yupContactFormValidation = ({ language }: { language: "en" | "es" }) => {
  const contactFormInitialValues = {
    name: "",
    email: "",
    details: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string().required(
      language === "en"
        ? "This field is required."
        : "Este campo es obligatorio."
    ),
    email: Yup.string()
      .email(
        language === "en"
          ? "Invalid email address."
          : "Correo electrónico inválido."
      )
      .required(
        language === "en"
          ? "This field is required."
          : "Este campo es obligatorio."
      ),
    details: Yup.string().required(
      language === "en"
        ? "Please, type a message."
        : "Por favor, escribe un mensaje."
    ),
  });

  return {
    contactFormValidationSchema,
    contactFormInitialValues,
  };
};

export default yupContactFormValidation;
