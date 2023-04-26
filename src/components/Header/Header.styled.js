import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../images/icon/logo.svg';
import { ReactComponent as Search } from '../../images/icon/search.svg';
import { ReactComponent as Pen } from '../../images/icon/pen.svg';
import { ReactComponent as Arrow } from '../../images/icon/arrow-right.svg';
import { ReactComponent as Close } from '../../images/icon/close.svg';
import { ReactComponent as Burger } from '../../images/icon/burger.svg';

import MainBgMob from '../../images/leafs/pasta-spinach-main_mobile.png';
import MainBgMob2 from '../../images/leafs/pasta-spinach-main_mobile@2x.png';
import MainBgTab from '../../images/leafs/pasta-spinach-main_tablet.png';
import MainBgTab2 from '../../images/leafs/pasta-spinach-main_tablet@2x.png';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
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

export const IconSearch = styled(Search)`
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

export const IconBurger = styled(Burger)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.title.text};
`;

export const IconClose = styled(Close)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.title.text};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  background-color: ${p => p.theme.mainBg};
  padding-top: 20px;

  @media ${p => p.theme.device.tablet} {
    padding-top: 19px;
    justify-content: center;
  }

  @media ${p => p.theme.device.desktop} {
    padding-top: 18px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  /* @media ${p => p.theme.device.tablet} {
    gap: 380px;
  } */

  @media ${p => p.theme.device.desktop} {
    gap: 110px;
  }
`;

// export const UserBox = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;

//   @media ${p => p.theme.device.tablet} {
//     gap: 54px;
//   }
// `;

export const NavBoxUser = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  position: absolute;
  left: 16px;

  @media ${p => p.theme.device.tablet} {
    left: 42px;
  }

  @media ${p => p.theme.device.desktop} {
    left: 80px;
  }
`;

export const NavBarExtendedContainer = styled.div`
  top: 1px;
  right: 1px;
  width: 100%;
  height: 100%;
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
    gap: 200px;
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

export const RightContainer = styled.div`
  margin-left: 187px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightNavList = styled.ul`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const RightNavItem = styled.li`
  padding: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 20px;
  height: 20px;
  top: 30px;
  right: 54px;
  z-index: 10;
  cursor: pointer;
  border: none;
  position: absolute;
  background-color: transparent;

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 900px) {
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

export const ButtonModal = styled.button`
  background-color: rgba(139, 170, 54, 1);
  color: rgba(250, 250, 250, 1);
  border-radius: 24px 44px;
  border: transparent;
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

export const UserLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
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
