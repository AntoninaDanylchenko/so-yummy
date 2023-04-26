import styled from '@emotion/styled';

import notFoundMobile from '../../images/notFound/bro_mobile.png';
import notFoundMobile2x from '../../images/notFound/bro_mobile@2x.png';
import notFoundTablet from '../../images/notFound/bro_tablet.png';
import notFoundTablet2x from '../../images/notFound/bro_tablet@2x.png';
import notFoundDesktop from '../../images/notFound/bro_desktop.png';
import notFoundDesktop2x from '../../images/notFound/bro_desktop@2x.png';

export const NotFoundSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 284px;

  background-image: url(${notFoundMobile});
  background-repeat: no-repeat;
  background-size: 259px;
  background-position: center top 90px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${notFoundMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    background-image: url(${notFoundTablet});
    background-size: 498px;
    background-position: center top 100px;

    padding-top: 459px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notFoundTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    background-image: url(${notFoundDesktop});
    background-size: 498px;
    background-position: center top 78px;

    padding-top: 501px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${notFoundDesktop2x});
    }
  }
`;
export const NotFoundText = styled.p`
  width: 306px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (${p => p.theme.device.tablet}) {
    width: 450px;
  }
`;

export const NotFoundSpanBolt = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  @media (${p => p.theme.device.tablet}) {
    font-size: 24px;
  }
`;
export const NotFoundSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  @media (${p => p.theme.device.tablet}) {
    font-size: 18px;
  }
`;
