import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const Card = styled.div`
  transition: transform ${p => p.theme.transition};
  :hover {
    transform: scale(1.05);
  }

  position: relative;
  overflow: hidden;
  width: 343px;
  height: 323px;
  border-radius: ${p => p.theme.radii[2]};

  @media (${p => p.theme.device.tablet}) {
    width: 336px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  &:hover::before {
    animation: shine 0.75s;
    animation: shine 0.75s;
  }

  @keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
`;

export const PrewievImg = styled.img`
  display: block;
  width: 343px;

  @media (${p => p.theme.device.tablet}) {
    width: 336px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 300px;
    height: 323px;
  }
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 26px;
  left: 18px;

  padding-left: 16px;
  width: 307px;
  height: 52px;
  background: ${p => p.theme.secondary.recipeBg};
  border-radius: ${p => p.theme.radii[2]};

  @media (${p => p.theme.device.tablet}) {
    width: 300px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 268px;
  }
`;

export const Title = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
