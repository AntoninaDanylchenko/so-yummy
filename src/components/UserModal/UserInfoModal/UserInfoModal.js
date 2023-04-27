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
        <CloseButton className="close-btn" onClick={onClose}>
          Close
        </CloseButton>
      </div>
    </div>
  );
};

export default UserInfoModal;