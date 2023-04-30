import { useState } from 'react';
import { Modal } from './Modal/Modal';
import { LogoutBtn } from './LogoutBtn';
import { TextModal, IconPen } from './Header.styled';
import { UserInfoModal } from 'components/UserModal/UserInfoModal/UserInfoModal';

const UserLogoModal = ({ onClose }) => {
  const [onShow, setOnShow] = useState(false);

  return (
    <>
      <Modal onClose={onClose}>
        <TextModal>
          <span>Edit profile</span>
          <IconPen onClick={() => setOnShow(true)} />
        </TextModal>
        <LogoutBtn onClose={onClose} />
      </Modal>
      {onShow && <UserInfoModal onClose={onClose} />}
    </>
  );
};

export { UserLogoModal };
