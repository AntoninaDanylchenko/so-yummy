import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 343px;
  height: 56px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid ${p => p.theme.borderLine};
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
  }

  @media (${p => p.theme.device.desktop}) {
    overflow-y: hidden;
    width: 1240px;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: 10px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    &:hover {
      &::-webkit-scrollbar {
        display: block;
      }
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 343px;
  height: 34px;
  gap: 28px;

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    height: 38px;
    gap: 55px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.borderLine};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 14px;
  padding-bottom: 26px;

  &.active {
    position: relative;
    color: ${p => p.theme.accent.mainBtnBg};
  }

  &.active::after {
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    background-color: ${p => p.theme.accent.mainBtnBg};
  }

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 18px;
    padding-bottom: 24px;
  }

  @media (${p => p.theme.device.tablet}) {
    padding-bottom: 24px;
  }
`;
