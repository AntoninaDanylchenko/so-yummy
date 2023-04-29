import React from 'react';
import { useLocation } from 'react-router-dom';
import { FooterLogoLinkNav, IconLogo, IconLogoText } from './Footer.styled';

const Logo = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <FooterLogoLinkNav to="/" state={{ from: backLink }}>
      <IconLogo />
      <IconLogoText>So Yummy</IconLogoText>
    </FooterLogoLinkNav>
  );
};

export { Logo };
