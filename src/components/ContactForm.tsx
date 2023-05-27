import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import TextError from "../components/TextError";
import yupContactFormValidation from "@/helpers/yupContactFormValidation";

interface Values {
  name: string;
  cel: number;
  email?: string;
  details?: string;
}

type SubmitFormProps = {
  values: Values;
  onSubmitProps: FormikHelpers<Values>;
};

const ContactForm = () => {
  const [data, setData] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fail, setFail] = useState("");
  const { contactFormInitialValues, contactFormValidationSchema } =
    yupContactFormValidation();

  /*   const styles = {
    marginInline: "auto",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }; */

  const submitForm = (values: Values, onSubmitProps: FormikHelpers<Values>) => {
    fetch("https://formsubmit.co/ajax/davidfco.pozo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        NName: values.name,
        Phone: values.cel,
        Email: values.email,
        Details: values.details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
        setSuccess(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setFail(error);
      });
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
              cel: true,
              email: true,
              details: true,
            });
          };

          return (
            <div className="form-container">
              <div className="form-card"></div>
              <Form className="form">
                <div className="form-control">
                  <label className="form-inputLabel" htmlFor="name">
                    Name:
                  </label>
                  <Field
                    className="form-inputField"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Doe"
                    required
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>

                <div className="form-control">
                  <label className="form-inputLabel" htmlFor="cel">
                    Phone Number:
                  </label>
                  <Field
                    className="form-inputField"
                    type="tel"
                    name="cel"
                    id="cel"
                    placeholder="976 876 876"
                    required
                  />
                  <ErrorMessage name="cel" component={TextError} />
                </div>

                <div className="form-control">
                  <label className="form-inputLabel" htmlFor="email">
                    E-Mail:
                  </label>
                  <Field
                    className="form-inputField"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="myemail@example.com"
                    required
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div className="form-control">
                  <label className="form-inputLabel" htmlFor="details">
                    Details:
                  </label>
                  <Field
                    className="form-inputField"
                    as="textarea"
                    name="details"
                    id="details"
                    placeholder="Information"
                    required
                  />
                  <ErrorMessage name="details" component={TextError} />
                </div>

                <button
                  className="action-btn"
                  type="submit"
                  onClick={clickHandler}
                  disabled={
                    !formik.isValid || formik.isSubmitting ? true : false
                  }
                  style={{
                    backgroundColor:
                      !formik.isValid || formik.isSubmitting
                        ? "gray"
                        : "inherit",
                  }}
                >
                  Send
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
