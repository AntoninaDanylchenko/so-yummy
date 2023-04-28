import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';
import { ButtonUser, UserLogoBox, TextUserLogo, ImgUser } from './Header.styled';

const UserLogo = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const username  = useSelector(state => state.auth.user.user.username);
  const  avatarURL  = useSelector(state => state.auth.user.user.avatarURL);
  return (
    <>
      {!isLoggedIn && (
        <UserLogoBox>
          <ButtonUser onClick={open}>
            <ImgUser src={avatarURL} alt={username} loading="lazy" />
          </ButtonUser>
          <TextUserLogo>{username}</TextUserLogo>
          {isOpen && <UserLogoModal onClose={toggleModal} />}
        </UserLogoBox>
      )}
    </>
  );
};

export { UserLogo };
