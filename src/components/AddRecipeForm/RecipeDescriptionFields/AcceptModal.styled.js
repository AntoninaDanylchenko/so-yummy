import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const opacity = keyframes`
  0% {
    opacity: 0;
    transform: rotate(180deg) }
`;

export const Box = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${p => p.theme.mainBg};
  border-radius: 30px;
  box-shadow: ${p => p.theme.shadows[3]};
  animation: ${opacity} ${p => p.theme.transition};
  @media ${p => p.theme.device.mobile} {
    width: 375px;
    height: 812px;
  }

  @media ${p => p.theme.device.tablet} {
    width: 400px;
    height: 400px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 250px;
  }
`;

export const Content = styled.div`
  height: 180px;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  @media ${p => p.theme.device.mobile} {
    width: 299px;
    height: 269px;
  }

  @media ${p => p.theme.device.tablet} {
    width: 268px;
    height: 242px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 268px;
    height: 242px;
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font: ${p => p.theme.fonts.Poppins};
  font-size: ${p => p.theme.fontSizes[6]};
  color: ${p => p.theme.accent.iconFollow};
  margin-bottom: 24px;

  @media ${p => p.theme.device.mobile} {
    font-size: ${p => p.theme.fontSizes[9]};
    margin-bottom: 27px;
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[8]};
    margin-bottom: 28px;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[8]};
    margin-bottom: 28px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
