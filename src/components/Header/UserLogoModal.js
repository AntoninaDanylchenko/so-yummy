import { useEffect, useState } from 'react';
import { Modal } from './Modal/Modal';
import { LogoutBtn } from './LogoutBtn';
import { TextModal, ButtonModal, IconPen, IconArrow } from './Header.styled';

const UserLogoModal = ({ onClose }) => {
  const [onShow, setOnShow] = useState(false);
  const [openNewModal, setOpenNewModal] = useState(true);

  // useEffect(() => {
  //   if (handleLogoutModal) {
  //     setOnShow(!onShow);
  //   }
  // }, []);

  const modalToggle = () => {
    setOnShow(onShow => !onShow);
  };

  const handleLogoutModal = openNewModal => {
    onClose();
    setOpenNewModal(openNewModal);
    modalToggle();

    console.log('onShow:', setOpenNewModal);
  };

  return (
    <>
      <Modal onClose={onClose}>
        <TextModal>
          <span>Edit profile</span>
          <IconPen />
        </TextModal>
        <ButtonModal onClick={handleLogoutModal}>
          <span>Log out</span>
          <IconArrow />
        </ButtonModal>
      </Modal>
      {onShow && <LogoutBtn />}
    </>
  );
};

export { UserLogoModal };
