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