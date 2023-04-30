import {
  InfoWrap,
  Box,
  InnerBox,
  InfoList,
  InfoItem,
  FooterNavEx,
  FooterLinkNav,
  SocialWrap,
  SocialIconLink,
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
        <SocialIconLink
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <SocialIconFacebook />
        </SocialIconLink>

        <SocialIconLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <SocialIconYoutube />
        </SocialIconLink>

        <SocialIconLink
          href="https://twitter.com/?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <SocialIconTwitter />
        </SocialIconLink>

        <SocialIconLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <SocialIconInstagram />
        </SocialIconLink>
      </SocialWrap>
    </>
  );
};

export { FooterNav };
