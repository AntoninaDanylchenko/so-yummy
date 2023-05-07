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

const LogoutButtonModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalContainer>
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>
        <ModalText>Are you sure you want to logout ?</ModalText>
        <ModalButtons>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
        </ModalButtons>
      </ModalContainer>
    </>
  );
};

export { LogoutButtonModal };
