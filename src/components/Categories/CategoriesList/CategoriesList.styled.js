import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 343px;
  gap: 28px;

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    gap: 32px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
    gap: 100px 13px;
  }
`;

export const UnderList = styled.div`
  width: 343px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    height: 200px;
  }
  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
  }
`;
