import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkNav, LeftContainer, IconLogo } from './Header.styled';

const Logo = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <LeftContainer>
      <LinkNav to="/" state={{ from: backLink }}>
        <IconLogo />
      </LinkNav>
    </LeftContainer>
  );
};

export { Logo };
