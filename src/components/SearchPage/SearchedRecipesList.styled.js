import styled from '@emotion/styled';

export const SearchedRecipesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;

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
