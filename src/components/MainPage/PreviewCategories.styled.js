import styled from '@emotion/styled';

export const RecipesList = styled.ul`
  @media screen and ${p => p.theme.device.tablet} {
    display: flex;
    gap: 32px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    display: flex;
    gap: 14px;
  }
`;
