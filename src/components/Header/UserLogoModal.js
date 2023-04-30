// import { useState } from 'react';
import { ModalW } from './Modal/Modal.styled';
import { LogoutBtn } from './LogoutBtn';
import { UserInfoModal } from 'components/UserModal/UserInfoModal/UserInfoModal';
import { TextModal, IconPen } from './Header.styled';

import { ModalConsumer } from './context/modal';

const UserLogoModal = () => {
  //   const [show, setShow] = useState(false);
  //   const [close, setClose] = useState(true);
  //   const [newModal, setNewModal] = useState(false);

  //   const open = () => setShow(true);
  //   const toggleModal = () => {
  //     setNewModal(!newModal);
  // }

  //   const openModal = newModal => {
  //      setNewModal(newModal);
  //     toggleModal();
  //   };

  return (
    <ModalConsumer>
      {/* <ModalLW onClose={onClose}> */}

      {({ showModal }) => (
        <>
          <ModalW>
            <TextModal>
              <span>Edit profile</span>
              <IconPen onClick={()=>showModal(<UserInfoModal/>)} />
            </TextModal>
            <LogoutBtn />
          </ModalW>
        </>
      )}
    </ModalConsumer>
  );
};

export { UserLogoModal };
