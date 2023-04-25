import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';
import { useSelector } from 'react-redux';
import { ButtonUser, UserLogoBox } from './Header.styled';

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { username, avatarURL } = useSelector(state => state.auth.user.user);

  return (
    <UserLogoBox>
      <ButtonUser onClick={open}>
        <img src={avatarURL} alt={username} loading="lazy" />
      </ButtonUser>
      <p>{username}</p>
      {isOpen && <UserLogoModal onClose={toggleModal} />}
    </UserLogoBox>
  );
};

export { UserLogo };
