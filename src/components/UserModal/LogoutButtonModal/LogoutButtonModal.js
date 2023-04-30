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

const LogoutButtonModal = ({show}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
    } catch (error) {
      console.error(error);
    }
  };

  // const toggleBtnModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <>
      <ModalContainer>
        <ModalText>Are you sure you want to logout?</ModalText>
        <ModalButtons>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
          <CancelButton type="button" onClick={() => setShowModal(false)}>
            Cancel
          </CancelButton>
        </ModalButtons>
        <CloseButton type="button" onClick={() => setShowModal(false)}>
          <IconClose />
        </CloseButton>
      </ModalContainer>
    </>
  );
};

export { LogoutButtonModal };
