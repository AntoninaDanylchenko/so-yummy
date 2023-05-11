import React, { useState } from 'react';
import {
  Nav,
  NavBox,
  NavBarInnerContainer,
  TogglerBoxUser,
  UserBox,
} from './Header.styled';
import { Logo } from './Logo';
import { RightNav } from './RightNav';
import { BurgerMenu } from './BurgerMenu';
import UserMenu from 'components/Header/UserMenu';
import { ThemeToggler } from './ThemeToggler';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const modalProps = { isOpen, open, toggleModal };
  return (
    <NavBox>
      <Nav>
        <NavBarInnerContainer>
          <Logo />
        </NavBarInnerContainer>
        <RightNav />
        <BurgerMenu onClose={() => setIsOpen(false)} />
        <UserBox>
          <UserMenu
            {...modalProps}
            // isOpen={isOpen}
            // open={open}
            // toggleModal={toggleModal}
          />
          <TogglerBoxUser>
            <ThemeToggler />
          </TogglerBoxUser>
        </UserBox>
      </Nav>
    </NavBox>
  );
};

export default Navigation;
