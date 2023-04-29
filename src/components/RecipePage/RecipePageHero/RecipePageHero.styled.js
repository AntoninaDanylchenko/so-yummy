import styled from '@emotion/styled';

import bgImageMobile from '../../../images/recipe/flat-lay-assortment_mobile.jpg';
import bgImageMobile2x from '../../../images/recipe/flat-lay-assortment_mobile@2x.jpg';
import bgImageTablet from '../../../images/recipe/flat-lay-assortment_tablet.jpg';
import bgImageTablet2x from '../../../images/recipe/flat-lay-assortment_tablet@2x.jpg';
import bgImageDesctop from '../../../images/recipe/flat-lay-assortment-vegetables_desktop.jpg';
import bgImageDesctop2x from '../../../images/recipe/flat-lay-assortment-vegetables_desktop@2x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 144px;
  padding-bottom: 90px;
  position: relative;
  top: -63px;
  margin-bottom: -63px;
  z-index: -1;
  background-image: url(${bgImageMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgImageMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    padding-top: 136px;
    padding-bottom: 32px;
    background-image: url(${bgImageTablet});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgImageTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    padding-top: 164px;
    background-image: url(${bgImageDesctop});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgImageDesctop2x});
    }
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[7]};
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.accent.mainBtnBg};
  text-align: center;
  margin-bottom: 18px;

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[10]};
    line-height: 44px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  font-family: ${p => p.theme.fonts};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 16px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.title.userText};
  text-align: center;
  padding: 0 38px 0 38px;
  margin-bottom: 24px;

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 24px;
    padding: 0 131px 0 131px;
  }

  @media (${p => p.theme.device.desktop}) {
    margin-bottom: 30px;
    padding: 0 392px 0 392px;
  }
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts};
  font-style: normal;
  font-weight: ${p => p.theme.regular};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 15px;
  color: ${p => p.theme.primaryText.btn};

  background-color: transparent;
  border-radius: ${p => p.theme.radii[6]};
  border: 2px solid ${p => p.theme.accent.mainBtnBg};

  max-width: 150px;
  padding: 10px 18px;
  margin: 0 auto 42px auto;

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: 24px;

    max-width: 270px;
    padding: 18px 44px;
    margin-bottom: 60px;
  }

  @media (${p => p.theme.device.desktop}) {
    margin-bottom: 48px;
  }
  :hover,
  :focus {
    color: ${p => p.theme.secondary.recipePreparation};
    background: ${p => p.theme.accent.mainBtnBg};
    transition: ${p => p.theme.transition};
  }
`;

export const Time = styled.p`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts};
  font-style: normal;
  font-weight: ${p => p.theme.medium};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 14px;
  color: ${p => p.theme.primaryText.btn};
  margin: 0 auto;

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 20px;
  }
  svg {
    fill: ${p => p.theme.primaryText.btn};
    width: 12px;
    height: 12px;
    margin-right: 5px;

    @media (${p => p.theme.device.tablet}) {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;
