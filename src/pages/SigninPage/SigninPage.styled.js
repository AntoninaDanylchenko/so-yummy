import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import bgImgRectangleMobile from '../../images/form/rectangle_mobile.png';
import bgImgRectangleMobile2x from '../../images/form/rectangle_mobile@2x.png';
import bgImgRectangleTablet from '../../images/form/rectangle_tablet.png';
import bgImgRectangleTablet2x from '../../images/form/rectangle_tablet@2x.png';
import bgImgRectangleDesktop from '../../images/form/rectangle_desktop.png';
import bgImgRectangleDesktop2x from '../../images/form/rectangle_desktop@2x.png';

import imgPanaMobile from '../../images/form/food-pana_mobile.png';
import imgPanaMobile2x from '../../images/form/food-pana_mobile@2x.png';
import imgPanaTablet from '../../images/form/food-pana_tablet.png';
import imgPanaTablet2x from '../../images/form/food-pana_tablet@2x.png';
import imgPanaDesktop from '../../images/form/food-pana_desktop.png';
import imgPanaDesktop2x from '../../images/form/food-pana_desktop@2x.png';

export const Box = styled.section`
  width: 100vw;
  height: 100%;

  background-color: #fafafa;
  background-image: url(${imgPanaMobile}), url(${bgImgRectangleMobile});
  background-repeat: no-repeat;
  /* background-size: calc(100vw - 180px), cover; */
  background-size: 285px, cover;

  background-position: center bottom calc(50vh + 30px), center bottom -400px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${imgPanaMobile2x}), url(${bgImgRectangleMobile2x});
  }

  @media (${p => p.theme.device.tablet}) {
    background-image: url(${imgPanaTablet}), url(${bgImgRectangleTablet});
    background-size: 409px, cover;
    background-position: center bottom calc(50vh + 40px), center bottom -450px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgPanaTablet2x}), url(${bgImgRectangleTablet2x});
    }
  }

  @media (${p => p.theme.device.desktop}) {
    background-image: url(${imgPanaDesktop}), url(${bgImgRectangleDesktop});
    background-size: 532px, cover;
    background-position: left calc(5vw + 175px) top 115px, center top 364px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgPanaDesktop2x}),
        url(${bgImgRectangleDesktop2x});
    }
  }
`;

export const WrapperForm = styled.div`
  /* position: absolute; */
  max-width: 335px;
  /* margin-top: 305px; */
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 70px; //proof margin */
  /* left: 0;
  right: 0; */
  text-align: center;

  padding: 32px 28px 40px;

  background: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (${p => p.theme.device.tablet}) {
    max-width: 500px;
    /* margin-top: 444px; */
    padding: 44px 50px;
  }
  @media (${p => p.theme.device.desktop}) {
    margin-right: calc(5vw + 65px);
    /* margin-top: 122px; */
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.167;
  text-align: start;

  margin-bottom: 40px;
  /* identical to box height, or 117% */

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #fafafa;

  @media (${p => p.theme.device.tablet}) {
    font-size: 28px;
    line-height: 30px;

    margin-bottom: 50px;
  }
`;

export const LinkToSignup = styled(Link)`
  /* position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%, -50%); */

  display: block;

  margin-top: 32px;
  /* margin-left: auto;
  margin-right: auto; */

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-decoration-line: underline;
  color: #fafafa;
  /* color: red; */

  @media (${p => p.theme.device.tablet}) {
    font-size: 16px;
    line-height: 24px;
    /* margin-left: auto;
    margin-right: 180px; */
  }
  @media (${p => p.theme.device.desktop}) {
    display: flex;
    margin-right: 380px;
    justify-content: end;
  }
`;
