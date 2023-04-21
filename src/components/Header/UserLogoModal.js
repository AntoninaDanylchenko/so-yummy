import React from 'react';
import { Modal } from './Modal/Modal';
import { ReactComponent as Pen } from '../../images/icon/pen.svg';
import { ReactComponent as Arrow } from '../../images/icon/arrow-right.svg';
import { TextModal,ButtonModal } from './Header.styled';

const UserLogoModal = () => {
  return (
    <Modal>
      <TextModal>
        <span>Edit profile</span>
        <Pen />
      </TextModal>
      <ButtonModal>
        <span>Log out</span>
        <Arrow />
      </ButtonModal>
    </Modal>
  );
};

export { UserLogoModal };
