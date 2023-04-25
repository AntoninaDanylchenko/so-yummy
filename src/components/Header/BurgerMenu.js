import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  OpenLinksButton,
  NavBarExtendedContainer,
  NavEx,
  NavExBox,
  IconSearch,
  ImageBox,
  TogglerBox
} from './Header.styled';

import { ReactComponent as Close } from '../../images/icon/x-icon.svg';
import { ReactComponent as Burger } from '../../images/icon/burger.svg';
import { ThemeToggler } from './ThemeToggler';

const BurgerMenu = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
      <OpenLinksButton onClick={() => setExtendNavbar(curr => !curr)}>
        {!extendNavbar ? (
          <>
            <Burger />
          </>
        ) : (
          <>
            <Close />
          </>
        )}
      </OpenLinksButton>
      {extendNavbar && (
        <NavBarExtendedContainer>
          <NavExBox>
            <NavEx>
              <NavLink to="/category/:categoryName">Categories</NavLink>
              <NavLink to="/add">Add recipes</NavLink>
              <NavLink to="/my">My recipes</NavLink>
              <NavLink to="/favorite">Favorites</NavLink>
              <NavLink to="/shopping-list">Shopping list</NavLink>
              <NavLink to="/search">
                <IconSearch />
                <span> Search</span>
              </NavLink>
            </NavEx>
            <TogglerBox><ThemeToggler/></TogglerBox>
            <ImageBox></ImageBox>
          </NavExBox>
        </NavBarExtendedContainer>
      )}
    </>
  );
};

export { BurgerMenu };
