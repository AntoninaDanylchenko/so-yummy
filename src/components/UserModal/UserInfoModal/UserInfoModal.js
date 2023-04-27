import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import {  ModalContainer, FormContainer, Field, SubmitButton, ErrorMessage } from 


const UserInfoModal = ({ onClose }) => {
  // const handleSubmit = async (values, { setSubmitting }) => {
  //     setSubmitting(false);
  //     onClose();
  //     setSubmitting(false);
  // };

  return (
    <>
    {/* <ModalContainer onClick={onClose}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <Formik
          initialValues={{ name: "", photo: null }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="file" name="photo" />
              <ErrorMessage name="photo" component="div" />
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Save
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
      </ModalContainer> */}
      </>
  );
};


export default UserInfoModal;