import React from 'react';
import { Link, Box, Item } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box>
      <Item>
        <Link to="/register">Registration</Link>
      </Item>
      <Item>
        <Link to="/signin">Sign in</Link>
      </Item>
    </Box>
  );
};
export default AuthNav;