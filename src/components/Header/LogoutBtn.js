import { useState } from 'react';
import { LogoutButtonModal } from '../UserModal/LogoutButtonModal/LogoutButtonModal';
import { LogoutButton, IconArrow } from './Header.styled';

const LogoutBtn = ({ onClose }) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <LogoutButton type="button" onClick={toggleModal}>
        <span>Log out</span>
        <IconArrow />
      </LogoutButton>
      {show && <LogoutButtonModal onClose={onClose} show={show} />}
    </>
  );
};

export { LogoutBtn };
