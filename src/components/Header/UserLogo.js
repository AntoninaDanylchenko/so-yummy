// import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
  ButtonUser,
  UserLogoBox,
  TextUserLogo,
  ImgUser,
} from './Header.styled';
import { selectAvatarURL, selectUser } from 'redux/auth/selector';

const UserLogo = propsModal => {
  const { open, toggleModal, isOpen } = propsModal;
  const { pathname } = useLocation();
  const recipe = useParams();

  // const [isOpen, setIsOpen] = useState(false);

  // const open = () => setIsOpen(true);

  // const toggleModal = () => {
  //   setIsOpen(isOpen => !isOpen);
  // };

  const { username } = useSelector(selectUser);
  const avatarURL = useSelector(selectAvatarURL);
  console.log('isOpen', isOpen);

  return (
    <>
      <UserLogoBox>
        <ButtonUser onClick={open}>
          <ImgUser src={avatarURL} alt={username} />
        </ButtonUser>
        <TextUserLogo pathname={pathname} recipe={recipe}>
          {username}
        </TextUserLogo>
        {isOpen && <UserLogoModal onClose={toggleModal} />}
      </UserLogoBox>
    </>
  );
};

export { UserLogo };
