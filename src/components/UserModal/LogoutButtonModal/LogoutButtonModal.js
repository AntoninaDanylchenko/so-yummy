import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import {
  ModalContainer,
  ModalText,
  ModalButtons,
  LogoutButton,
  CancelButton,
  CloseButton,
  IconClose,
} from './LogoutButtonModal.styled';
// import { BaseModal } from 'components/Header/context/BaseModal/BaseModal';

// const LogoutButtonModal = ({ onRequestClose, ...otherProps }) => {

const LogoutButtonModal = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      // setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleBtnModal = () => {
    setShowModal(!showModal);
    // onClose();
  };

  return (
    <>
      {/* <BaseModal  onRequestClose={onRequestClose} {...otherProps}> */}
      <ModalContainer>
        <ModalText>Are you sure you want to logout?</ModalText>
        <ModalButtons>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
          <CancelButton type="button" onClick={() => toggleBtnModal}>
            Cancel
          </CancelButton>
        </ModalButtons>
        <CloseButton type="button" onClick={() => toggleBtnModal}>
          <IconClose />
        </CloseButton>
      </ModalContainer>
      {/* </BaseModal> */}
    </>
  );
};

export { LogoutButtonModal };
