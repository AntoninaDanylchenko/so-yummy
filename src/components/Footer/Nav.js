import {
  InfoWrap,
  SocialWrap,
  Box,
  InnerBox,
  InfoBox,
  FooterNavEx,
  FooterLinkNav,
  SocialIconFacebook,
  SocialIconYoutube,
  SocialIconTwitter,
  SocialIconInstagram,
} from './Footer.styled';
import { Logo } from './Logo';
import { SubscribeForm } from './SubscribeForm';

const FooterNav = () => {
  return (
    <>
      <InfoWrap>
        <Box>
          <InnerBox>
            <Logo />
            <InfoBox></InfoBox>
          </InnerBox>
          <FooterNavEx>
            <FooterLinkNav to="/categories/beef">Categories</FooterLinkNav>
            <FooterLinkNav to="/add">Add recipes</FooterLinkNav>
            <FooterLinkNav to="/my">My recipes</FooterLinkNav>
            <FooterLinkNav to="/favorite">Favorites</FooterLinkNav>
            <FooterLinkNav to="/shopping-list">Shopping list</FooterLinkNav>
          </FooterNavEx>
        </Box>
        <SubscribeForm />
      </InfoWrap>
      <SocialWrap>
        <SocialIconFacebook />
        <SocialIconYoutube />
        <SocialIconTwitter />
        <SocialIconInstagram />
      </SocialWrap>
    </>
  );
};

export { FooterNav };
