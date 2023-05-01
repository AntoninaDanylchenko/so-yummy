import styled from '@emotion/styled';
const Square = styled.div`
  transform: rotate(-25deg);
  animation: ping 3000ms ease-out infinite;
  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
  @keyframes ping {
    0% {
      transform: rotate(-25deg);
      opacity: 1;
    }
    50% {
      transform: rotate(-25deg) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: rotate(-25deg);
      opacity: 1;
    }
  }
`;

export const GreenLeftSquare = styled(Square)`
  position: absolute;
  width: 8px;
  height: 8px;
  /* left: 120px; */
  left: calc(100vw * 1 / 5);
  top: 76px;
  z-index: -1;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  animation-delay: 250ms;

  @media (${p => p.theme.device.tablet}) {
    width: 14px;
    height: 14px;
    top: 85px;
    /* left: 219px; */
  }

  @media (${p => p.theme.device.desktop}) {
    /* left: 328px; */
    top: 117px;
  }
`;

export const BlackSquare = styled(Square)`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 247px;
  top: 140px;
  left: calc(100vw * 3 / 5);

  background: ${p => p.theme.title.text};
  border-radius: 50%;

  z-index: -1;

  animation-delay: 500ms;

  @media (${p => p.theme.device.tablet}) {
    width: 12px;
    height: 12px;
    /* left: 437px; */
    top: 155px;
    border-radius: 3px;
    transform: rotate(-25deg);
  }

  @media (${p => p.theme.device.desktop}) {
    /* left: 807px; */
    top: 205px;
  }
`;

export const GreenRightSquare = styled(Square)`
  position: absolute;
  width: 8px;
  height: 8px;
  /* right: 23px; */
  right: calc(100vw * 1 / 4);
  top: 108px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  z-index: -1;

  animation-delay: 1000ms;

  @media (${p => p.theme.device.tablet}) {
    width: 14px;
    height: 14px;
    /* right: 15px; */
    top: 98px;
  }

  @media (${p => p.theme.device.desktop}) {
    /* right: 171px; */
    top: 135px;
  }
`;
