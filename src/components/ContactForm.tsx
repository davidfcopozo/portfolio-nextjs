import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import TextError from "../components/TextError";
import yupContactFormValidation from "@/helpers/yupContactFormValidation";
import useFormSubmit from "@/hooks/useFormSubmit";
import LoadingIndicator from "./LoadingIndicator";

interface Values {
  name: string;
  email?: string;
  details?: string;
}

const ContactForm = () => {
  const { contactFormInitialValues, contactFormValidationSchema } =
    yupContactFormValidation();
  const { submitData } = useFormSubmit();

  const submitForm = async (
    values: Values,
    onSubmitProps: FormikHelpers<Values>
  ) => {
    await submitData(values, onSubmitProps);
  };

  return (
    <>
      <Formik
        initialValues={contactFormInitialValues as Values}
        validationSchema={contactFormValidationSchema}
        validateOnMount
        key={458451151251220}
        onSubmit={submitForm}
      >
        {(formik) => {
          const clickHandler = () => {
            formik.setTouched({
              name: true,
              email: true,
              details: true,
            });
          };

          return (
            <Form className="form">
              <div className="name">
                <label className="form-input-label" htmlFor="name">
                  Name:
                </label>
                <Field
                  className="form-input-field"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jon Doe"
                  required
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <TextError>{msg}</TextError>}
                />
              </div>

              <div className="email">
                <label className="form-input-label" htmlFor="email">
                  E-Mail:
                </label>
                <Field
                  className="form-input-field"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <TextError>{msg}</TextError>}
                />
              </div>

              <div className="details">
                <label className="form-input-label" htmlFor="details">
                  Details:
                </label>
                <Field
                  className="form-input-field"
                  as="textarea"
                  name="details"
                  id="details"
                  placeholder="Type a message..."
                  required
                />
                <ErrorMessage
                  name="details"
                  render={(msg) => <TextError>{msg}</TextError>}
                />
              </div>

              <button
                className="action-btn"
                type="submit"
                onClick={clickHandler}
                disabled={!formik.isValid || formik.isSubmitting ? true : false}
                style={{
                  backgroundColor:
                    !formik.isValid || formik.isSubmitting ? "gray" : "#5596bf",
                  color:
                    !formik.isValid || formik.isSubmitting
                      ? "white"
                      : "#0a192f",
                }}
              >
                Send
              </button>
              {formik.isSubmitting && <LoadingIndicator w="100" h="100" />}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
