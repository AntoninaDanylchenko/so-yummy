import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 343px;
  gap: 14px;

  @media (${p => p.theme.device.tablet}) {
    margin-top: 50px;
    width: 704px;
    gap: 43px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1160px;
  }
`;
