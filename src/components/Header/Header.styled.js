import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../images/icon/logo.svg';
import { ReactComponent as Pen } from '../../images/icon/pen.svg';
import { ReactComponent as Arrow } from '../../images/icon/arrow-right.svg';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import MainBgMob from '../../images/leafs/pasta-spinach-main_mobile.png';
import MainBgMob2 from '../../images/leafs/pasta-spinach-main_mobile@2x.png';
import MainBgTab from '../../images/leafs/pasta-spinach-main_tablet.png';
import MainBgTab2 from '../../images/leafs/pasta-spinach-main_tablet@2x.png';

export const HeaderBox = styled.header`
  max-width: 375px;
  margin: 0 auto;
  background-color: transparent;

  @media ${p => p.theme.device.tablet} {
    max-width: 768px;
  }

  @media ${p => p.theme.device.desktop} {
    max-width: 1440px;
  }
`;

export const NavBox = styled.div`
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  @media ${p => p.theme.device.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${p => p.theme.device.desktop} {
    max-width: 1440px;
    padding: 0 100px;
  }
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.primaryText.text};
  font-family: ${p => p.theme.fonts};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: calc(
    (${p => p.theme.fontWeights.medium}) / (${p => p.theme.fontSizes[5]})
  );

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: calc(
      (${p => p.theme.fontWeights.medium}) / (${p => p.theme.fontSizes[7]})
    );
  }

  @media ${p => p.theme.device.desktop} {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: calc(
      (${p => p.theme.fontWeights.medium}) / (${p => p.theme.fontSizes[3]})
    );
  }

  &.active {
    color: rgba(139, 170, 54, 1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  background-color: transparent;

  @media ${p => p.theme.device.tablet} {
    padding-top: 19px;
    justify-content: flex-start;
  }

  @media ${p => p.theme.device.desktop} {
    padding-top: 18px;
    justify-content: center;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;

  @media ${p => p.theme.device.tablet} {
    margin-right: 36px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-left: auto;
  }
`;

export const RightContainer = styled.div`
  margin-left: 107px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const RightNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const RightNavItem = styled.li`
  padding: 10px;
`;

export const TogglerBoxUser = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const NavBarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  position: sticky;
  left: 30px;
  top: 10px;

  @media ${p => p.theme.device.tablet} {
    left: 32px;
    top: 17px;
  }

  @media ${p => p.theme.device.desktop} {
    left: 100px;
    top: 20px;
  }
`;

export const NavBarExtendedContainer = styled.div`
  top: 0px;
  right: 1px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.ligthGreen.deleteBtnBg};
  z-index: 5;
  overflow: hidden;
`;

export const TogglerBox = styled.div`
  position: absolute;
  bottom: 18px;
  left: 16px;

  @media ${p => p.theme.device.tablet} {
    bottom: 32px;
    left: 32px;
  }
`;

export const ImageBox = styled.div`
  top: 320px;
  left: 120px;
  width: 80%;
  height: 80%;
  position: absolute;

  z-index: -1;
  transform: rotate(20deg);
  background-position: center bottom 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${p => p.theme.ligthGreen.deleteBtnBg};
  background-image: url('${MainBgMob}');

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    & {
      background-image: url('${MainBgMob2}');
    }
  }

  @media ${p => p.theme.device.tablet} {
    top: 300px;
    left: 240px;
    width: 80%;
    height: 80%;
    transform: rotate(50deg);
    background-position: bottom 0;
    background-image: url('${MainBgTab}');

    @media screen and (min-device-pixel-ratio: 2) and (min-width: 450px) and (max-width: 900px),
      screen and (min-resolution: 192dpi) and (min-width: 450px) and (max-width: 900px),
      screen and (min-resolution: 2dppx) and (min-width: 450px) and (max-width: 900px) {
      & {
        background-image: url('${MainBgTab2}');
      }
    }
  }

  @media screen and (min-width: 900px) {
    background-image: none;
  }
`;

export const NavExBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 180px;

  @media ${p => p.theme.device.tablet} {
    margin-bottom: 130px;
  }
`;

export const NavEx = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${p => p.theme.device.tablet} {
    gap: 40px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 20px;
  height: 20px;
  top: 0;
  left: 244px;
  z-index: 7;
  cursor: pointer;
  border: none;
  position: relative;
  background-color: transparent;
  transition: ${p => p.theme.transition};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
    top: 0;
    left: 620px;
  }

  @media screen and (min-width: 1439px) {
    display: none;
  }
`;

export const TextModal = styled.p`
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.medium}) / (${p => p.theme.fontSizes[3]})
  );
  color: ${p => p.theme.primaryText.text};
`;

export const LogoutButton = styled.button`
  background-color: rgba(139, 170, 54, 1);
  color: rgba(250, 250, 250, 1);
  border-radius: 24px 44px;
  border: transparent;
  cursor: pointer;
  padding: 12px;

  @media ${p => p.theme.device.tablet} {
    padding: 18px;
  }
`;

export const ButtonUser = styled.button`
  width: 34px;
  height: 34px;
  border: black;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;

  @media ${p => p.theme.device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const ImgUser = styled.img`
  border-radius: 50%;
`;

export const UserLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 1;
`;

export const TextUserLogo = styled.p`
  text-decoration: none;
  color: ${p => p.theme.primaryText.text};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.semibold}) / (${p => p.theme.fontSizes[3]})
  );
`;

export const ModalLogout = styled.div`
  width: 330px;
  height: 179px;
  border-radius: 30px;
  padding: 24px 44px;
  background-color: ${p => p.theme.primary.background};

  @media ${p => p.theme.device.tablet} {
    width: 480px;
    height: 215px;
    padding: 40px 50px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 215px;
    padding: 40px 50px;
  }
`;

export const ModalBtnCancel = styled.button`
  cursor: pointer;
  width: 100px;
  height: 20px;
  padding: 14px 18px;
  border: none;
  border-radius: 6px;
  text-align: center;
  color: rgba(35, 38, 42, 1);
  background-color: rgba(217, 217, 217, 1);
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  &.active {
    background-color: #fafafa;
  }

  @media ${p => p.theme.device.tablet} {
    width: 114px;
    height: 23px;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }

  @media ${p => p.theme.device.desktop} {
    width: 114px;
    height: 23px;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;

export const ModalBtnLogout = styled.button`
  cursor: pointer;
  width: 100px;
  height: 20px;
  padding: 14px 18px;
  border: none;
  border-radius: 6px;
  text-align: center;
  color: rgba(250, 250, 250, 1);
  background-color: rgba(139, 170, 54, 1);
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  &.active {
    background-color: rgba(34, 37, 42, 1);
  }

  @media ${p => p.theme.device.tablet} {
    width: 114px;
    height: 23px;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }

  @media ${p => p.theme.device.desktop} {
    width: 114px;
    height: 23px;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;

export const ModalLogoutText = styled.p`
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[5]})
    );
  }

  @media ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[5]})
    );
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

export const IconSearch = styled(SearchIcon)`
  display: inline;
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    display: inline;
    width: 24px;
    height: 24px;
  }
`;

export const IconPen = styled(Pen)`
  display: inline;
  width: 12px;
  height: 12px;
  margin-left: 22px;
  fill: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    margin-left: 35px;
  }
`;

export const IconArrow = styled(Arrow)`
  display: inline;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  transform: translate(10%, 20%);

  @media ${p => p.theme.device.tablet} {
    width: 18px;
    height: 18px;
    margin-left: 7px;
    transform: translate(10%, 20%);
  }
`;

export const IconBurger = styled(MenuIcon)`
  width: 24px;
  height: 24px;

  color: ${p => p.theme.title.text};
`;

export const IconClose = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.title.text};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }
`;
