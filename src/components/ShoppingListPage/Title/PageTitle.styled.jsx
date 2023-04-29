import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-top: 50px;
  margin-left: 16px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[8]};
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.subtitle};

  @media (${p => p.theme.device.tablet}) {
    margin-top: 72px;
    margin-left: 32px;
    font-size: ${p => p.theme.fontSizes[9]};
    line-height: 32px;
  }

  @media (${p => p.theme.device.desktop}) {
    margin-top: 100px;
    margin-left: 100px;
    font-size: ${p => p.theme.fontSizes[10]};
    line-height: 44px;
  }
`;
