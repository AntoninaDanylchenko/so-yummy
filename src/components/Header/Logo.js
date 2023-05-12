import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkNav, IconLogo } from './Header.styled';

const Logo = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  

  return (
    <LinkNav to="/" state={{ from: backLink }} >
      <IconLogo />
    </LinkNav>
  );
};

export { Logo };
