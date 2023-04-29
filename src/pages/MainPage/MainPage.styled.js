import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import BackgroundMob from 'images/main/main-bg_mobile.png';
import BackgroundDesk from 'images/main/main-bg_desktop.png';
import BackgroundDesk2 from 'images/main/main-bg_desktop@2x.png';

// import SpinachMob from 'images/leafs/pasta-spinach-main_mobile.png';
import SpinachDesk from 'images/leafs/pasta-spinach-main_desktop.png';
import SpinachDesk2 from 'images/leafs/pasta-spinach-main_desktop@2x.png';

// import SpinachLeftMob from 'images/leafs/pasta-spinach-main1_mobile.png';
import SpinachLeftDesk from 'images/leafs/pasta-spinach-main1_desktop.png';
import SpinachLeftDesk2 from 'images/leafs/pasta-spinach-main1_desktop@2x.png';

// import PlateMob from 'images/leafs/unsplash_mobile.png';
import PlateDesk from 'images/leafs/unsplash_desktop.png';
import PlateDesk2 from 'images/leafs/unsplash_desktop@2x.png';

export const MainSection = styled.section`
  /* max-width: 1600px; */
  margin: 0 auto;
  margin-top: -64px;
  height: 777px;
  background: ${p => p.theme.mainBg};
  /* background-image: url(${BackgroundMob}); */

  background-repeat: no-repeat;
  @media screen and ${p => p.theme.device.tablet} {
    height: 640px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    height: 800px;
    background-image: url('${SpinachLeftDesk}'), url('${PlateDesk}'),
      url('${SpinachDesk}'), url('${BackgroundDesk}');
    background-position: left top, right 184px top 126px, right top,
      right -20px top;
    /* background-size: auto, auto, auto, auto; */
    ${p =>
      p.theme.media(
        SpinachLeftDesk2,
        PlateDesk2,
        SpinachDesk2,
        BackgroundDesk2
      )}
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and ${p => p.theme.device.mobile} {
    max-width: 375px;
  }
  @media screen and ${p => p.theme.device.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    max-width: 1440px;
    padding: 0 100px;
  }
`;

export const ContainerHero = styled(Container)`
  position: relative;
  padding-top: 132px;
  height: 100%;
  @media screen and (${props => props.theme.device.tablet}) {
    padding-top: 205px;
  }
  @media screen and (${props => props.theme.device.desktop}) {
    padding-top: 226px;
  }
`;

export const RecipeSection = styled.section`
  padding-top: 64px;
  padding-bottom: 100px;
  @media screen and ${p => p.theme.device.tablet} {
    padding-top: 72px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 118px;
  }
`;

export const RecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  @media screen and ${p => p.theme.device.tablet} {
    gap: 50px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    gap: 100px;
  }
`;

export const CategoryName = styled.h3`
  margin-bottom: 32px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[8]};
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${p => p.theme.subtitle};

  @media screen and ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[10]};
  }
`;

export const ButtonSeeAll = styled(Link)`
  display: block;
  width: 94px;
  margin-left: auto;
  margin-top: 24px;
  padding: 10px 24px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.29;
  text-align: center;

  color: ${p => p.theme.primary.textFooter};
  border-radius: ${p => p.theme.radii[1]};
  background-color: ${p => p.theme.btnBg};
  transition: transform ${p => p.theme.transition};
  :hover,
  :focus {
    transform: scale(1.1);
  }
  @media screen and ${p => p.theme.device.tablet} {
    margin-top: 40px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    margin-top: 50px;
  }
`;

export const ButtonOther = styled(Link)`
  display: block;
  width: 195px;
  margin: 40px auto 0 auto;
  padding: 14px 32px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.5;
  text-align: center;
  color: ${p => p.theme.title.text};
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${p => p.theme.accent.mainBtnBg};
  transition: background-color ${p => p.theme.transition};
  :hover,
  :focus {
    background-color: ${p => p.theme.accent.mainBtnBg};
  }
  @media screen and ${p => p.theme.device.tablet} {
    margin-top: 32px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    margin-top: 14px;
  }
`;
