import React from 'react';
import {
  RightNavList,
  RightNavItem,
  RightContainer,
  // IconSearch,
  LinkNav,
} from './Header.styled';

import SearchIcon from '@mui/icons-material/Search';


const RightNav = () => {
  return (
    <RightContainer>
      <RightNavList>
        <RightNavItem>
          <LinkNav to="/main">Main</LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to={`/categories/${'beef'}`}>Categories</LinkNav>
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
            <SearchIcon />
          </LinkNav>
        </RightNavItem>
      </RightNavList>
    </RightContainer>
  );
};

export { RightNav };
