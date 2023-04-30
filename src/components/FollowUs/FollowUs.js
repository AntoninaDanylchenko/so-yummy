import {
  LinksWrap,
  LinksTitle,
  LinksList,
  SocialIconLink,
  SocialIconFacebook,
  SocialIconYoutube,
  SocialIconTwitter,
  SocialIconInstagram,
} from '../FollowUs/FollowUs.styled';

export const FollowUs = () => {
  return (
    <>
      <LinksWrap>
        <LinksTitle>Follow us</LinksTitle>
        <LinksList>
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
        </LinksList>
      </LinksWrap>
    </>
  );
};
