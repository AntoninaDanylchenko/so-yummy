import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import {
  IconClose,
  ModalLogout,
  ModalBtnLogout,
  ModalBtnCancel,
  ModalLogoutText,
} from './Header.styled';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(open => !open);
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <ModalLogout onClick={handleModal}>
      <IconClose onClick={() => setOpen(false)} />
      <ModalLogoutText>Are you sure you want to log out?</ModalLogoutText>
      <ModalBtnLogout type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ModalBtnLogout>
      <ModalBtnCancel type="button" onClick={() => setOpen(false)}>
        Cancel
      </ModalBtnCancel>
    </ModalLogout>
  );
};

export { LogoutModal };
