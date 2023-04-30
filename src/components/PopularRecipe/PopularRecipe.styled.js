import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.subtitle};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularList = styled.ul`
  width: 343px;
  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 319px;
    display: block;
  }
`;

export const PopularItem = styled(Link)`
  width: 343px;
  height: 98px;
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const PopularImage = styled.img`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  border-radius: ${p => p.theme.radii[3]};
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 102px;
  }
  @media screen and (min-width: 1440px) {
    width: 97px;
    margin-right: 11px;
  }
`;

export const PopularSubtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 1.29;
  letter-spacing: -0.24px;
  color: ${p => p.theme.subtitle};
  width: 212px;
  margin-bottom: 3px;
`;

export const PopularText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${p => p.theme.recipeText};
  width: 212px;
  height: 50px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 208px;
  }
  @media screen and (min-width: 1440px) {
    width: 196px;
  }
`;

// export const NotFound = styled.p`
//   font-weight: ${p => p.theme.fontWeights.medium};
//   font-size: ${p => p.theme.fontSizes.m}px;
//   line-height: ${p => p.theme.lineHeights.heading};
//   letter-spacing: -0.24px;
//   color: ${p => p.theme.colors.textSubTitle};
// `;
