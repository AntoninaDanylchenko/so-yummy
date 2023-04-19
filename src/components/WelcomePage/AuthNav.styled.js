import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 12px 24px;
  border-radius: 24px 44px;
  text-decoration: none;
  text-align: center;
  border: 1px solid rgba(250, 250, 250, 1);
  color: rgba(250, 250, 250, 1);
  font-weight: 400;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: rgba(139, 170, 54, 1);
    border: transparent;
  }
  @media screen and (min-width: 768) and (max-width: 1199px) {
    padding: 22px 44px;
    @media screen and (min-width: 1200px) {
      padding: 22px 44px;
    }
  }
`;

export const Box = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  padding: 0;
  @media screen and (min-width: 768) {
    gap: 18px;
  }
  @media screen and (min-width: 1200px) {
    gap: 18px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
