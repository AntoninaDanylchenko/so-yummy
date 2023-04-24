import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 114px;
  padding-bottom: 100px;
  @media screen and (min-width: 1440px) {
    padding-top: 136px;
    padding-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 164px;
  }
`;

export const Title = styled.h2`
  /* font-weight: ${p => p.theme.fontWeights.semibold}; */
  font-size: 28px;
  /* line-height: ${p => p.theme.lineHeights.single}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textTitle}; */
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SideWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: block;
    width: 319px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
    width: 1440px;
  }
`;
