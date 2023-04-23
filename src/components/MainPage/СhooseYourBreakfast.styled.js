import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../images/icon/arrow-right.svg';

export const IconArrow = styled(ArrowIcon)`
  display: block;
  color: ${p => p.theme.colors.primary.userBackground};
  width: ${p => p.theme.fontSizes[4]};
  height: ${p => p.theme.fontSizes[4]};
`;

export const TitleWrap = styled.span`
  /* font-size: ${p => p.theme.fontSizes[9]}; */
`;
export const Title = styled.h2`
  /* color: ${p => p.theme.colors.primary.userBackground};
  font-size: ${p => p.theme.fontSizes[9]}; */
`;

export const LinkRecipes = styled(Link)`
  display: flex;
  gap: 10px;
`;
