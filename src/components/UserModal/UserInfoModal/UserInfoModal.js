<<<<<<< HEAD
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {  UserInfoModalWrapper,
  UserProfileImage,
  UploadPhotoButton, 
  InputNameWrapper, 
  InputNameIcon, 
  InputName, 
  SaveChangesButton, 
  SaveChangesButtonText, 
  CloseButton } from './UserInfoModal.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  photo: Yup.mixed()
    .required('Photo is required')
    .test('fileSize', 'File too large', (value) => value && value.size <= 1000000)
    .test('fileType', 'Unsupported file type', (value) => value && ['image/jpeg', 'image/png'].includes(value.type)),
});

const UserInfoModal = ({ onClose }) => {
  const handleSubmit = async (values, { setSubmitting }) => {

      const response = await axios.post('/api/user', values);
      console.log(response.data.message);
      onClose();
    
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>User Info</h2>
        <Formik initialValues={{ photo: '', name: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
=======
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as XIcon } from '../../../images/icon/x-icon.svg';
import {
  ModalBackdrop,
  ModalContainer,
  CloseButton,
  FormContainer,
  InputContainer,
  Input,
  InputLabel,
  ExampleName,
  PenIcon,
  SaveButton
} from './UserInfoModal.styled'

const UserInfoModal = ({ show, handleClose, handleFormSubmit }) => {
  const initialValues = {
    name: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required")
  });

  const handleSubmit = (values, { setSubmitting }) => {
    handleFormSubmit(values);
    setSubmitting(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalBackdrop
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
<<<<<<< Updated upstream
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb
          {({ isSubmitting }) => (
            <UserInfoModalWrapper>
              <UserProfileImage>
                <UploadPhotoButton>
                <label htmlFor="photo">Photo:</label>
                <Field type="file" id="photo" name="photo" />
                <ErrorMessage name="photo" component="div" className="error" />
                </UploadPhotoButton>
              </UserProfileImage>
              <InputNameWrapper>
                <InputNameIcon>
                <InputName><label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" placeholder="Olena" />
                <ErrorMessage name="name" component="div" className="error" />
                </InputName>
                </InputNameIcon>

              </InputNameWrapper>
                <SaveChangesButton type="submit" disabled={isSubmitting}>
                  <SaveChangesButtonText>Save changes</SaveChangesButtonText>
                </SaveChangesButton>
            </UserInfoModalWrapper>
          )}
        </Formik>
<<<<<<< HEAD
        <CloseButton className="close-btn" onClick={onClose}>
          Close
        </CloseButton>
      </div>
    </div>
=======
      </FormContainer>
      </ModalContainer> */}
      </>
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb
=======
          {({ isSubmitting, setFieldValue }) => (
            <ModalContainer>
              <FormContainer className="form-group">
                <InputLabel htmlFor="name">Name</InputLabel>
                <InputContainer
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Olena"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </FormContainer>
              <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <Field
                  type="file"
                  name="photo"
                  className="form-control-file"
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage
                  name="photo"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <SaveButton type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Save
              </SaveButton>
            </ModalContainer>
          )}
        </ModalBackdrop>
      </Modal.Body>
      <Modal.Footer>
        <CloseButton className="btn btn-secondary" onClick={handleClose}>
          Close
        </CloseButton>
      </Modal.Footer>
    </Modal>
>>>>>>> Stashed changes
  );
};

export default UserInfoModal;