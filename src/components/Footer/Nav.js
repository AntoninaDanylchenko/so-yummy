import {
  InfoWrap,
  SocialWrap,
  Box,
  InnerBox,
  InfoList,
  InfoItem,
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
            <InfoList>
              <InfoItem>Database of recipes that can be replenished </InfoItem>
              <InfoItem>
                Flexible search for desired and unwanted ingredients
              </InfoItem>
              <InfoItem>Ability to add your own recipes with photos</InfoItem>
              <InfoItem>Convenient and easy to use</InfoItem>
            </InfoList>
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
