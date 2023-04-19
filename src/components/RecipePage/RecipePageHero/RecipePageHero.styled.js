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
  /* position: absolute;
  top: 0;
  width: 100%; */
  background-image: url(${bgImageMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgImageMobile2x});
  }

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 32px;
    background-image: url(${bgImageTablet});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgImageTablet2x});
    }
  }

  @media screen and (min-width: 1200px) {
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #8baa36;
  margin: 0 auto 24px auto;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #22252a;
  margin: 0 auto 24px auto;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #23262a;

  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid #8baa36;

  max-width: 150px;
  padding: 10px 18px;
  margin: 0 auto 42px auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;

    max-width: 270px;
    padding: 18px 44px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 48px;
  }
  :hover,
  :focus {
    color: #fafafa;
    background: #8baa36;
    transition: all 0.5s ease-out;
  }
`;

export const Time = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #23262a;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
