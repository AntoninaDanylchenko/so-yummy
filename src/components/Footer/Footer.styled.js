import styled from '@emotion/styled';
import { ReactComponent as LogoIcon } from '../../images/icon/footer-logo.svg';
import { ReactComponent as InputIcon } from '../../images/icon/email-tablet.svg';
import { ReactComponent as Facebook } from '../../images/icon/facebook.svg';
import { ReactComponent as Youtube } from '../../images/icon/youtube.svg';
import { ReactComponent as Twitter } from '../../images/icon/twitter.svg';
import { ReactComponent as Instagram } from '../../images/icon/instagram.svg';
import { LinkNav, NavEx } from '../Header/Header.styled';

export const MainWrapper = styled.footer`
  position: relative;
  margin-bottom: 66px;
  background: ${p => p.theme.title.addBtnBg};

  @media screen and (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 114px;
  }
`;

export const Wrapper = styled.div`
  max-width: 375px;
  height: 435px;
  padding: 28px 85px 19px 86px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 423px;
    padding: 50px 94px 23.5px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 414px;
    padding: 64px 100px 49.5px 100px;
  }
`;

export const BottomTextWrapper = styled.div`
  position: absolute;
  bottom: -38px;
  left: 50%;
  display: flex;
  height: 10px;
  width: 228px;
  column-gap: 14px;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    bottom: -42px;
    width: 326px;
    column-gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -64px;
    width: 338px;
    height: 14px;
  }
`;

export const BottomTextReserved = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${p => p.theme.title.text};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const BottomTextService = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${p => p.theme.title.text};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const InfoWrap = styled.div`
  height: 326px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    height: 292px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 240px;
    margin-bottom: 40.5px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 235px;
    margin-bottom: 0;
    column-gap: 159px;
  }
`;

export const InnerBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 102px;
  padding-left: 16px;
  list-style: disc;
  row-gap: 10px;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    height: auto;
    max-width: 450px;
    row-gap: 12px;
  }
`;

export const InfoItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fafafa;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  column-gap: 14px;
`;

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  margin: 0;
  padding: 0;

  &:hover svg {
    fill: ${p => p.theme.primary.userBg};
  }
`;

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

export const FooterLogoLinkNav = styled(LinkNav)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 32px;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    margin: 0;
    column-gap: 12px;
    justify-content: flex-start;
  }
`;

export const FooterNavEx = styled(NavEx)`
  margin-bottom: 32px;
  gap: 14px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    max-width: 90px;
    margin: 0;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 92px;
    gap: 24px;
  }
`;

export const FooterLinkNav = styled(LinkNav)`
  color: white;
  transition: all 300ms linear;

  &.active {
    color: ${p => p.theme.accent.subscribeBg};
  }

  &:hover {
    color: ${p => p.theme.accent.subscribeBg};
  }

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
  }
`;

export const IconLogo = styled(LogoIcon)`
  display: block;
  width: 40px;
  height: 40px;

  @media ${p => p.theme.device.tablet} {
    display: block;
    width: 44px;
    height: 44px;
  }
`;

export const IconLogoText = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  width: 102px;
  height: 18px;
  color: #fafafa;
  flex: none;
  order: 1;
  flex-grow: 0;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    width: 159px;
    height: 28px;
  }
`;

export const FooterSubscribeWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    row-gap: 0;
  }
`;

export const FooterSubscribeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 338px;
  margin-bottom: 28px;
  row-gap: 14px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const FooterSubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #fafafa;
`;

export const FooterSubscribetext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

export const FooterSubscribeLabel = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 768px) {
    max-width: 259px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 338px;
    height: 59px;
    margin-bottom: 16px;
  }
`;

export const FooterSubscribeInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 10px;
  padding: 11.5px 10px 11.5px 42px;
  color: white;
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    padding: 14.5px 20px 14.5px 51px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 27px;
    padding: 17.5px 20px 17.5px 51.5px;
  }
`;

export const FooterSubscribeInputIcon = styled(InputIcon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 16px;
  height: 12px;

  @media screen and (min-width: 768px) {
    left: 15px;
    width: 20px;
    height: 16px;
  }

  @media screen and (min-width: 1440px) {
    left: 15.5px;
  }
`;

export const FooterSubscribeButton = styled.button`
  width: 100%;
  height: 38px;
  padding: 0;
  color: white;
  background: ${p => p.theme.accent.subscribeBg};
  border: none;
  border-radius: 6px;
  transition: all 300ms linear;

  &:hover {
    color: ${p => p.theme.title.addBtnBg};
  }

  @media screen and (min-width: 768px) {
    max-width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 338px;
    height: 60px;
  }
`;
