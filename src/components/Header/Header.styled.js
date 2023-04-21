import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../images/icon/logo.svg';
import { ReactComponent as Search } from '../../images/icon/search.svg';

// import MainBgMob from '../../images/main/main-bg_mobile.png';
// import MainBgMob2 from '../../images/main/main-bg_mobile@2x.png';
// import MainBgTab from '../../images/main/main-bg_tablet.png';
// import MainBgTab2 from '../../images/main/main-bg_tablet@2x.png';

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: rgba(34, 37, 42, 1);
  /* font-size */
  /* font-family */
  margin: 10px;
`;
export const IconLogo = styled(LogoIcon)`
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    display: block;
    margin: 0 auto;
  }
`;

export const IconSearch = styled(Search)`
  display: inline;
  width: 20px;
  height: 20px;
  /* position: ; */

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    display: inline;
  }
`;

// export const

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  /* height: ${({ extendNavbar }) => (extendNavbar ? '100vh' : '80px')}; */
  display: flex;
  /* gap: 166px; */
  justify-content: space-between;
  background-color: #ececec;
  position: fixed;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  /* height: ${({ extendNavbar }) => (extendNavbar ? '100vh' : '80px')}; */
  display: flex;
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* height: ${({ extendNavbar }) => (extendNavbar ? '100vh' : '80px')}; */
  background-color: orange;
  align-items: center;
`;

export const NavExBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const NavEx = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const LeftContainer = styled.div`
  flex: 10%;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightNavList = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    transform: ${({ open }) => (!open ? 'translateX(100%)' : 'translateX(0)')};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    flex-flow: column nowrap;
    background-color: #ececec;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 375px;
    padding-top: 34px;
  }
`;

export const RightNavItem = styled.li`
  padding: 18px 10px;

  @media screen and (max-width: 768px) {
    color: rgba(34, 37, 42, 1);
  }
`;

export const OpenLinksButton = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const TextModal = styled.p`
  font-family: Poppins;
  font-weight: 500;
  size: 14px;
`;

export const ButtonModal = styled.button`
  background-color: transparent;
  color: green;
  border-radius: 24px 44px;
  border: 1px solid green;
`;

//   display: flex;
//   flex-flow: row nowrap;
//   width: 100vw;
//   height: 100vh; */
//   z-index: -1;
//   margin: 0 auto;
//   padding: 0;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-color: #ececec;
//   background-image: url('${MainBgMob }');
//   @media screen and (min-device-pixel-ratio: 2) and (min-width: 320px),
//     screen and (min-resolution: 192dpi) and (min-width: 320px),
//     screen and (min-resolution: 2dppx) and (min-width: 320px) {
//     & {
//       background-image: url('${MainBgMob2}');
//     }
//   }
//   @media screen and (min-width: 768px) and (max-width: 1000px) {
//     background-position: center bottom 0;
//     width: 100vw;
//     height: 100vh;
//     background-size: cover;
//     background-image: url('${MainBgTab}');
//     @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1200px),
//       screen and (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1200px),
//       screen and (min-resolution: 2dppx) and (min-width: 768px) and (max-width: 1200px) {
//       & {
//         background-image: url('${MainBgTab2}');
//       }
//     }
//   }
//   @media screen and (min-width: 1200px) {
//       background-image: none;
//   }
