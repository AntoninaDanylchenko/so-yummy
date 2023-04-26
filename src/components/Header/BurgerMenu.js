import { useState } from 'react';
import {
  OpenLinksButton,
  NavBarExtendedContainer,
  NavEx,
  NavExBox,
  LinkNav,
  IconSearch,
  IconBurger,
  IconClose,
  ImageBox,
  TogglerBox,
} from './Header.styled';

import { ThemeToggler } from './ThemeToggler';

const BurgerMenu = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
      <OpenLinksButton onClick={() => setExtendNavbar(curr => !curr)}>
        {!extendNavbar ? (
          <>
            <IconBurger />
          </>
        ) : (
          <>
            <IconClose />
          </>
        )}
      </OpenLinksButton>
      {extendNavbar && (
        <NavBarExtendedContainer>
          <NavExBox>
            <NavEx>
              <LinkNav to="/category/:categoryName">Categories</LinkNav>
              <LinkNav to="/add">Add recipes</LinkNav>
              <LinkNav to="/my">My recipes</LinkNav>
              <LinkNav to="/favorite">Favorites</LinkNav>
              <LinkNav to="/shopping-list">Shopping list</LinkNav>
              <LinkNav to="/search">
                <IconSearch />
                <span> Search</span>
              </LinkNav>
            </NavEx>
            <TogglerBox>
              <ThemeToggler />
            </TogglerBox>
            <ImageBox></ImageBox>
          </NavExBox>
        </NavBarExtendedContainer>
      )}
    </>
  );
};

export { BurgerMenu };
