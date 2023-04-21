import React from 'react';
import { Nav, NavBarInnerContainer } from './Header.styled';
import { Logo } from './Logo';
import { RightNav } from './RightNav';
import { BurgerMenu } from './BurgerMenu';
import { UserLogo } from './UserLogo';
// import ThemeToggler from './ThemeToggler';

const Navigation = ({ extendNavbar }) => {
  return (
    <Nav extendNavbar={extendNavbar}>
      <NavBarInnerContainer>
        <Logo />
        <RightNav />
        {/* <ThemeToggler/> */}
        <UserLogo />
        <BurgerMenu />
      </NavBarInnerContainer>
    </Nav>
  );
};

export default Navigation;
