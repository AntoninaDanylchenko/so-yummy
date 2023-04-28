<<<<<<< Updated upstream
<<<<<<< HEAD
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import UserInfoModal from '../UserInfoModal/';
import LogoutBtn from '..LogoutBtn/LogoutBtn/';

const UserLogoModal = ({ user }) => {
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const handleShowUserInfoModal = () => {
    setShowUserInfoModal(true);
  };

  const handleCloseUserInfoModal = () => {
    setShowUserInfoModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowUserInfoModal}>
        {user.name}
      </Button>
      <Modal show={showUserInfoModal} onHide={handleCloseUserInfoModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserInfoModal user={user} handleCloseUserInfoModal={handleCloseUserInfoModal} />
        </Modal.Body>
        <Modal.Footer>
          <LogoutBtn handleCloseUserInfoModal={handleCloseUserInfoModal} />
        </Modal.Footer>
      </Modal>
    </>
=======
// import React, { useState } from "react";
// import UserInfoModal from "./UserInfoModal";
// import LogoutBtn from "./LogoutBtn";
// import {   ModalContainer, EditProfileButton, LogoutBtn, } from './UserLogoModal.styled';
=======
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
>>>>>>> Stashed changes

const UserInfoModal = ({ onClose }) => {
  const initialValues = {
    photo: null,
    name: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    onClose();
  };

  return (
<<<<<<< Updated upstream
<>
    {/* <ModalContainer>
      <EditProfileButton onClick={handleEditProfileClick}>
        Edit Profile
      </EditProfileButton>
      <LogoutBtn onClick={handleLogoutClick} />
      {isUserInfoModalOpen && (
        <UserInfoModal onClose={() => setIsUserInfoModalOpen(false)} />
      )}
      </ModalContainer> */}
      </>
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb
  );
};

UserLogoModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
  }).isRequired,
};

export default UserLogoModal;
=======
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <label htmlFor="photo">Photo</label>
              <Field type="file" name="photo" />

              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="Olena" />
              {errors.name && touched.name && <div>{errors.name}</div>}

              <button type="submit" disabled={isSubmitting}>
                Save
              </button>
            </Form>
          )}
        </Formik>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
>>>>>>> Stashed changes
