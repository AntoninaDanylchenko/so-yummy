import React from 'react';
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
  return (
    <NavBox>
      <Nav>
        <NavBarInnerContainer>
          <Logo />
        </NavBarInnerContainer>
        <RightNav />
        <BurgerMenu />
        <UserBox>
          <UserMenu />
          <TogglerBoxUser>
            <ThemeToggler />
          </TogglerBoxUser>
        </UserBox>
      </Nav>
    </NavBox>
  );
};

export default Navigation;
