import styled from '@emotion/styled';

export const StyledItem = styled.li`
  width: 100%;
  transition: transform ${p => p.theme.transition};
  :hover {
    transform: scale(1.05);
  }

  @media (${p => p.theme.device.tablet}) {
    width: calc((100% - 32px) / 2);
  }
  @media (${p => p.theme.device.desktop}) {
    width: calc((100% - 42px) / 4);
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 323px;
  border-radius: ${p => p.theme.radii[2]};
  :hover {
    div {
      transform: scale(1.05);
      background: ${p => p.theme.accent.mainBtnBg};
    }
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

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 26px;
  left: 18px;
  text-overflow: ellipsis;
  padding-left: 16px;
  width: 307px;
  height: 52px;
  background: ${p => p.theme.secondary.recipeBg};
  border-radius: ${p => p.theme.radii[2]};
  transition: transform ${p => p.theme.transition},
    background ${p => p.theme.transition};
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
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};
`;
