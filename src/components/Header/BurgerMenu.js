import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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

const BurgerMenu = ({ onClose }) => {
  const { pathname } = useLocation();
  const recipe = useParams();

  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleBurger = () => {
    setExtendNavbar(curr => !curr);
    if (!extendNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    onClose();
  };

  const handleCloseToLinkModal = () => {
    setExtendNavbar(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <OpenLinksButton onClick={handleBurger}>
        {!extendNavbar ? (
          <>
            <IconBurger pathname={pathname} recipe={recipe} />
          </>
        ) : (
          <>
            <IconClose onClick={onClose} />
          </>
        )}
      </OpenLinksButton>
      {extendNavbar && (
        <NavBarExtendedContainer>
          <NavExBox>
            <NavEx>
              <LinkNav
                to={`/categories/${'beef'}`}
                onClick={handleCloseToLinkModal}
              >
                Categories
              </LinkNav>
              <LinkNav to="/add" onClick={handleCloseToLinkModal}>
                Add recipes
              </LinkNav>
              <LinkNav to="/my" onClick={handleCloseToLinkModal}>
                My recipes
              </LinkNav>
              <LinkNav to="/favorite" onClick={handleCloseToLinkModal}>
                Favorites
              </LinkNav>
              <LinkNav to="/shopping-list" onClick={handleCloseToLinkModal}>
                Shopping list
              </LinkNav>
              <LinkNav to="/search" onClick={handleCloseToLinkModal}>
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
