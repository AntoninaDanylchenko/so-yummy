import React from 'react';
import {
  Nav,
  NavBox,
  NavBarInnerContainer,
  NavBoxUser,
  UserBox,
} from './Header.styled';
import { Logo } from './Logo';
import { RightNav } from './RightNav';
import { BurgerMenu } from './BurgerMenu';
import UserMenu from 'components/Header/UserMenu';
import { ThemeToggler } from './ThemeToggler';

const Navigation = () => {
  return (
    <Nav>
      <NavBox>
        <NavBarInnerContainer>
          <Logo />
        </NavBarInnerContainer>
        <RightNav />
        <UserBox>
          <UserMenu />
          <NavBoxUser>
            <ThemeToggler />
          </NavBoxUser>
           </UserBox>
         <BurgerMenu />
      </NavBox>
    </Nav>
  );
};

export default Navigation;
