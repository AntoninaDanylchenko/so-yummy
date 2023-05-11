import { useState } from 'react';
import { LogoutBtn } from './LogoutBtn';
import { UserInfoModal } from 'components/UserModal/UserInfoModal/UserInfoModal';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { TextModal, IconPen ,  ModalW} from './Header.styled';

const UserLogoModal = ({ onClose }) => {
  const [onShow, setOnShow] = useState(false);

  return (
    <>
      <ModalWindow onClose={onClose}>
        <ModalW>
        <TextModal>
          <span>Edit profile</span>
          <IconPen onClick={() => setOnShow(true)} />
        </TextModal>
          <LogoutBtn onClose={onClose} />
          </ModalW>
      </ModalWindow>
      {onShow && <UserInfoModal onClose={onClose} />}
    </>
  );
};

export { UserLogoModal };
