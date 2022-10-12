import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  SubmitBtn,
} from "./FormStyle";

import { Formik } from "formik";

export const Form = ({ noBackBtn }) => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        localization: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Adres e-mail jest wymagany!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Błąd w adresie e-mail!";
        }

        if (!values.firstName) {
          errors.firstName = "Imię jest wymagane";
        }

        if (!values.lastName) {
          errors.lastName = "Nazwisko jest wymagane";
        }

        if (!values.message) {
          errors.message = `Okno wiadomości jest puste`;
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("https://formsubmit.co/ajax/rafalfuz@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Imię: values.firstName,
            Nazwisko: values.lastName,
            Email: values.email,
            Firma: values.company,
            Miejscowość: values.localization,
            Wiadomość: values.message,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));

        setTimeout(() => {
          resetForm();
          alert("Wiadomość została wysłana");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="firstName" width="45%">
            *Imię:
            <StyledInput
              id="firstName"
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.firstName && touched.firstName && errors.firstName}
            </p>
          </StyledLabel>
          <StyledLabel htmlFor="lastName" width="45%">
            *Nazwisko:
            <StyledInput
              id="lastName"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {" "}
              {errors.lastName && touched.lastName && errors.lastName}
            </p>
          </StyledLabel>
          <StyledLabel htmlFor="email">
            *Email:
            <StyledInput
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.email && touched.email && errors.email}
            </p>
          </StyledLabel>
          <StyledLabel htmlFor="company" width="45%">
            Firma:
            <StyledInput
              id="company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </StyledLabel>
          <StyledLabel htmlFor="localization" width="45%">
            Miejscowość:
            <StyledInput
              id="localization"
              name="localization"
              type="text"
              value={values.localization}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </StyledLabel>
          <StyledLabel htmlFor="message">
            *Wiadomość:
            <StyledTextArea
              id="message"
              name="message"
              type="textarea"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              component="textarea"
            />
            <p style={{ color: "red" }}>
              {" "}
              {errors.lastName && touched.message && errors.message}
            </p>
          </StyledLabel>
          <div style={{ margin: "0 auto" }}>
            <SubmitBtn type="submit" disabled={isSubmitting}>
              WYŚLIJ WIADOMOŚĆ
            </SubmitBtn>
            <SubmitBtn noBackBtn={noBackBtn} onClick={() => navigate(-1)}>
              WRÓĆ DO STRONY GŁÓWNEJ
            </SubmitBtn>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};
