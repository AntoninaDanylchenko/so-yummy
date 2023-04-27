import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainSection = styled.section`
  padding-top: 68px;
  padding-bottom: 83px;
`;
export const RecipeSection = styled.section`
  padding-top: 64px;
  padding-bottom: 100px;
`;

export const RecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const CategoryName = styled.h3`
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[8]};
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  text-transform: capitalize;

  color: ${p => p.theme.subtitle};
`;

export const ButtonSeeAll = styled(Link)``;

export const ButtonOther = styled(Link)``;
