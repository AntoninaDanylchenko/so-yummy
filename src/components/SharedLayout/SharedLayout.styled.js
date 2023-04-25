import styled from '@emotion/styled';

import pastaSpinachMobile from '../../images/leafs/pasta-spinach_mobile.png';
import pastaSpinachMobile2x from '../../images/leafs/pasta-spinach_mobile@2x.png';
import pastaSpinachTablet from '../../images/leafs/pasta-spinach_tablet.png';
import pastaSpinachTablet2x from '../../images/leafs/pasta-spinach_tablet@2x.png';
import pastaSpinachDesktop from '../../images/leafs/pasta-spinach_desktop.png';
import pastaSpinachDesktop2x from '../../images/leafs/pasta-spinach_desktop@2x.png';

import pastaSpinachDipMobile from '../../images/leafs/pasta-spinach-dip_mobile.png';
import pastaSpinachDipMobile2x from '../../images/leafs/pasta-spinach-dip_mobile@2x.png';
import pastaSpinachDipTablet from '../../images/leafs/pasta-spinach-dip_tablet.png';
import pastaSpinachDipTablet2x from '../../images/leafs/pasta-spinach-dip_tablet@2x.png';
import pastaSpinachDipDesktop from '../../images/leafs/pasta-spinach-dip_desktop.png';
import pastaSpinachDipDesktop2x from '../../images/leafs/pasta-spinach-dip_desktop@2x.png';

export const Box = styled.section`
  min-width: 100vw;
  min-height: 100vh;

  background-image: url(${pastaSpinachDipMobile}), url(${pastaSpinachMobile});
  background-repeat: no-repeat;
  background-size: 290px, 420px;
  /* background-size: calc(100vw - 180px), cover; */
  background-position: right 0px bottom 0px, left 0px bottom 0px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${pastaSpinachDipMobile2x}),
      url(${pastaSpinachMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    background-image: url(${pastaSpinachDipTablet}), url(${pastaSpinachTablet});
    background-size: 470px, 550px;

    background-position: right 0px bottom 0px, left 0px bottom 0px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${pastaSpinachDipTablet2x}),
        url(${pastaSpinachTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    background-image: url(${pastaSpinachDipDesktop}),
      url(${pastaSpinachDesktop});
    background-size: 430px, 558px;
    background-position: right 0px bottom 0px, left 0px bottom 0px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${pastaSpinachDipDesktop2x}),
        url(${pastaSpinachDesktop2x});
    }
  }
`;
