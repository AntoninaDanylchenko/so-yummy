import React from 'react';
import {
  RightNavList,
  RightNavItem,
  RightContainer,
  IconSearch,
  LinkNav,
} from './Header.styled';

const RightNav = () => {
  return (
    <RightContainer>
      <RightNavList>
        <RightNavItem>
          <LinkNav to="/main">Main</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/category/:categoryName">Categories</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/add">Add recipes</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/my">My recipes</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/favorite">Favorites</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/shopping-list">Shopping list</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/search">
            <IconSearch />
          </LinkNav>
        </RightNavItem>
      </RightNavList>
    </RightContainer>
  );
};

export { RightNav };
