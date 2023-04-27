import styled from '@emotion/styled';
import { ReactComponent as LogoIcon } from '../../images/icon/footer-logo.svg';
import { ReactComponent as InputIcon } from '../../images/icon/email-tablet.svg';
import { ReactComponent as Facebook } from '../../images/icon/facebook.svg';
import { ReactComponent as Youtube } from '../../images/icon/youtube.svg';
import { ReactComponent as Twitter } from '../../images/icon/twitter.svg';
import { ReactComponent as Instagram } from '../../images/icon/instagram.svg';
import { LinkNav, NavEx } from '../Header/Header.styled';

export const Wrapper = styled.footer`
  position: relative;
  bottom: 66px;
  max-width: 375px;
  height: 435px;
  padding: 28px 85px 19px 86px;
  margin: 100px auto 0;
  background: #22252a;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 50px 94px 23.5px 32px;
    margin: 200px auto 0;
  }
`;

export const InfoWrap = styled.div`
  height: 326px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    height: 292px;
    margin-bottom: 32px;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  color: white;
  column-gap: 14px;
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }
`;

export const InnerBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    row-gap: 24px;
  }
`;

export const InfoBox = styled.div`
  height: 102px;
`;

export const SocialIconFacebook = styled(Facebook)``;
export const SocialIconYoutube = styled(Youtube)``;
export const SocialIconTwitter = styled(Twitter)``;
export const SocialIconInstagram = styled(Instagram)``;

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
`;

export const FooterLinkNav = styled(LinkNav)`
  color: white;

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

export const FooterSubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 12px;
  }
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
`;

export const FooterSubscribeButton = styled.button`
  width: 100%;
  height: 38px;
  padding: 0;
  color: white;
  background: #8baa36;
  border: none;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    max-width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 18px;
  }
`;
