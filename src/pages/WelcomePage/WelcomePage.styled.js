import styled from '@emotion/styled';

import RonizeMob from '../../images/main/ronise-daluz_mobile.jpg';
import RonizeMob2 from '../../images/main/ronise-daluz_mobile@2x.jpg';
import RonizeTab from '../../images/main/ronise-daluz_tablet.jpg';
import RonizeTab2 from '../../images/main/ronise-daluz_tablet@2x.jpg';
import RonizeDesk from '../../images/main/ronise-daluz_desktop.jpg';
import RonizeDesk2 from '../../images/main/ronise-daluz_desktop@2x.jpg';

export const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  margin: 0 auto;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  background-image: url('${RonizeMob}');

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    & {
      background-image: url('${RonizeMob2}');
    }
  }

  @media ${p => p.theme.device.tablet} {
    background-position: center bottom 0;
    /* width: 100vw;
    height: 100vh; */
    /* background-size: cover; */
    background-image: url('${RonizeTab}');

    @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1200px),
      screen and (min-resolution: 192dpi) and (min-width: 768px) and (max-width: 1200px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) and (max-width: 1200px) {
      & {
        background-image: url('${RonizeTab2}');
      }
    }
  }

  @media ${p => p.theme.device.desktop} {
    /* background-position: center bottom 0; */
    /* width: 100vw;
    height: 100vh;
    background-size: cover; */
    background-image: url('${RonizeDesk}');

    @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
      screen and (min-resolution: 192dpi) and (min-width: 1200px),
      screen and (min-resolution: 2dppx) and (min-width: 1200px) {
      & {
        background-image: url('${RonizeDesk2}');
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: calc(50vh - 120px) 0;
  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 450px) and (max-width: 1200px) {
    /* padding: 342px 0; */
  }

  @media ${p => p.theme.device.desktop} {
    /* padding-top: 214px 0; */
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  color: rgba(250, 250, 250, 1);
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.06em;
  line-height: 1;
  text-align: center;
  font-family: inherit;

  @media ${p => p.theme.device.tablet} {
    font-size: 24px;
    line-height: 1.62;
    font-weight: 600;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: 24px;
    line-height: 1.36;
    font-weight: 600;
  }
`;

export const Text = styled.p`
  color: rgba(250, 250, 250, 1);
  font-size: 14px;
  line-height: 1.28;
  font-weight: 400;
  width: 305px;
  margin-bottom: 44px;

  @media ${p => p.theme.device.tablet} {
    font-size: 18px;
    line-height: 1.33;
    width: 505px;
    margin-bottom: 40px;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: 18px;
    line-height: 1.33;
    width: 540px;
    margin-bottom: 40px;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 54px;
  height: 54px;
  margin: 0 auto 28px;

  @media ${p => p.theme.device.tablet} {
    width: 68px;
    height: 68px;
    display: block;
    margin: 0 auto 44px;
  }
`;
