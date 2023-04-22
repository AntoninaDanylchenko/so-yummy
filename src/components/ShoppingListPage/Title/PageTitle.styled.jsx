import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-left: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #001833;

  @media (${p => p.theme.device.tablet}) {
    margin-left: 32px;
    font-size: 32px;
    line-height: 32px;
  }

  @media (${p => p.theme.device.desktop}) {
    margin-left: 100px;
    font-size: 44px;
    line-height: 44px;
  }
`;
