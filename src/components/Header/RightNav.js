import React from 'react';
import { useParams } from 'react-router-dom';
import {
  RightNavList,
  RightNavItem,
  RightContainer,
  // IconSearch,
  LinkNav,
} from './Header.styled';

import SearchIcon from '@mui/icons-material/Search';

const RightNav = () => {
  const recipe = useParams();
  return (
    <RightContainer>
      <RightNavList>
        <RightNavItem>
          <LinkNav to={`/categories/${'beef'}`} recipe={recipe}>
            Categories
          </LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/add" recipe={recipe}>
            Add recipes
          </LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/my" recipe={recipe}>
            My recipes
          </LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/favorite" recipe={recipe}>
            Favorites
          </LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/shopping-list" recipe={recipe}>
            Shopping list
          </LinkNav>
        </RightNavItem>
        <RightNavItem>
          <LinkNav to="/search" recipe={recipe}>
            <SearchIcon />
          </LinkNav>
        </RightNavItem>
      </RightNavList>
    </RightContainer>
  );
};

export { RightNav };
