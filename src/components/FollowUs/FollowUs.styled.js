import styled from '@emotion/styled';
import { ReactComponent as Facebook } from '../../images/icon/facebook.svg';
import { ReactComponent as Youtube } from '../../images/icon/youtube.svg';
import { ReactComponent as Twitter } from '../../images/icon/twitter.svg';
import { ReactComponent as Instagram } from '../../images/icon/instagram.svg';

export const SocialIconFacebook = styled(Facebook)`
  fill: ${p => p.theme.accent.iconFollow};
  transition: all 300ms linear;
`;
export const SocialIconYoutube = styled(Youtube)`
  fill: ${p => p.theme.accent.iconFollow};
  transition: all 300ms linear;
`;
export const SocialIconTwitter = styled(Twitter)`
  fill: ${p => p.theme.accent.iconFollow};
  transition: all 300ms linear;
`;
export const SocialIconInstagram = styled(Instagram)`
  fill: ${p => p.theme.accent.iconFollow};
  transition: all 300ms linear;
`;

export const LinksWrap = styled.div`
  display: none;
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const LinksTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.blackText.text};
  margin-bottom: 40px;
`;

export const LinksList = styled.ul`
  width: 163px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkItem = styled.li`
  svg {
    color: ${p => p.theme.accent.iconFollow};
    transition: color transition;
    :hover {
      color: ${p => p.theme.subtitle};
    }
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  margin: 0;
  padding: 0;

  &:hover svg {
    fill: ${p => p.theme.title.addBtnBg};
    transform: scale(1.2);
  }
`;
