import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../images/icon/arrow-right.svg';

export const IconArrow = styled(ArrowIcon)`
  display: block;
`;

export const TitleWrap = styled.span``;
export const Title = styled.h2``;

export const LinkRecipes = styled(Link)`
  display: flex;
  gap: 10px;
`;
