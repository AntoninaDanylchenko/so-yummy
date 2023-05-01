import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';
import { useSelector } from 'react-redux';
import {
  ButtonUser,
  UserLogoBox,
  TextUserLogo,
  ImgUser,
} from './Header.styled';
import { selectAvatarURL, selectUser } from 'redux/auth/selector';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const { username } = useSelector(selectUser);
  const avatarURL = useSelector(selectAvatarURL);

  return (
    <>
      <UserLogoBox>
        <ButtonUser onClick={open}>
          <ImgUser src={avatarURL} alt={username} />
        </ButtonUser>
        <TextUserLogo>{username}</TextUserLogo>
        {isOpen && <UserLogoModal onClose={toggleModal} />}
      </UserLogoBox>
    </>
  );
};

export { UserLogo };
