import styled from '@emotion/styled';

import notResultMobile from '../../images/search/vegetable-fruit-basket_mobile.png';
import notResultMobile2x from '../../images/search/vegetable-fruit-basket_mobile@2x.png';
import notResultTablet from '../../images/search/vegetable-fruit-basket_tablet.png';
import notResultTablet2x from '../../images/search/vegetable-fruit-basket_tablet@2x.png';
import notResultDesktop from '../../images/search/vegetable-fruit-basket_desktop.png';
import notResultDesktop2x from '../../images/search/vegetable-fruit-basket_desktop@2x.png';

export const BgHolder = styled.div`
  width: 208px;
  height: 171px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (${p => p.theme.device.tablet}) {
    width: 350px;
    height: 225px;
  }
`;

export const BgImg = styled.div`
  width: 208px;
  height: 133px;

  @media (${p => p.theme.device.tablet}) {
    width: 350px;
    height: 225px;
  }

  background-image: url(${notResultMobile});
  background-repeat: no-repeat;
  background-size: 208px 133px;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${notResultMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    background-image: url(${notResultTablet});
    background-size: 350px 225px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notResultTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    background-image: url(${notResultDesktop});
    background-size: 350px 225px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notResultDesktop2x});
    }
  }
`;

export const Message = styled.p`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  vertical-align: middle;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 14px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.input.input};
  opacity: 0.5;

  @media (${p => p.theme.device.tablet}) {
    margin-top: 32px;
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: 24px;
  }
`;
