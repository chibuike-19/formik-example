import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const App = () => {

   
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   lastName: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
 });

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          acceptTerms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <label htmlFor="acceptTerms">Accept Terms and Conditions</label>
            <Field type="checkbox" name="acceptTerms" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
