import styled from '@emotion/styled';

import notFoundMobile from '../../images/notFound/bro_mobile.png';
import notFoundMobile2x from '../../images/notFound/bro_mobile@2x.png';
import notFoundTablet from '../../images/notFound/bro_tablet.png';
import notFoundTablet2x from '../../images/notFound/bro_tablet@2x.png';
import notFoundDesktop from '../../images/notFound/bro_desktop.png';
import notFoundDesktop2x from '../../images/notFound/bro_desktop@2x.png';

export const NotFoundSection = styled.section`
  width: 100vw;

  background-image: url(${notFoundMobile});
  background-repeat: no-repeat;
  background-size: 259px;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${notFoundMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    background-image: url(${notFoundTablet});
    background-size: 498px;
    /* background-position: center; */

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notFoundTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    background-image: url(${notFoundDesktop});
    background-size: 498px;
    /* background-position: center; */

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notFoundDesktop2x});
    }
  }
`;
