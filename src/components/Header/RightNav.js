import React from 'react';
import { NavLink } from 'react-router-dom';
import { RightNavList, RightNavItem, RightContainer } from './Header.styled';

const RightNav = () => {
  return (
    <RightContainer>
      <RightNavList>
        <RightNavItem>
          <NavLink to="/main">Main</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/category/:categoryName">Category</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/add">Add recipes</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/my">My recipes</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/favorite">Favorite</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </RightNavItem>
        <RightNavItem>
          <NavLink to="/search">Search</NavLink>
        </RightNavItem>
      </RightNavList>
    </RightContainer>
  );
};

export { RightNav };
