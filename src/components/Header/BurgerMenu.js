import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  OpenLinksButton,
  NavBarExtendedContainer,
  NavEx,
  NavExBox,
  IconSearch
} from './Header.styled';
import { ReactComponent as Burger } from '../../images/icon/burger.svg';
import { ReactComponent as Close } from '../../images/icon/x-icon.svg';

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
              <NavLink to="/main">Main</NavLink>

              <NavLink to="/category/:categoryName">Category</NavLink>

              <NavLink to="/add">Add recipes</NavLink>

              <NavLink to="/my">My recipes</NavLink>

              <NavLink to="/favorite">Favorite</NavLink>

              <NavLink to="/shopping-list">Shopping list</NavLink>

              <NavLink to="/search"><IconSearch /><span>  Search</span></NavLink>
            </NavEx>
          </NavExBox>
        </NavBarExtendedContainer>
      )}
    </>
  );
};

export { BurgerMenu };
