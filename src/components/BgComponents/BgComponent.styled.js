import styled from '@emotion/styled';

export const GreenLeftSquare = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 120px;
  top: 76px;
  z-index: -1;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media (${p => p.theme.device.tablet}) {
    width: 14px;
    height: 14px;
    top: 85px;
    left: 219px;
  }

  @media (${p => p.theme.device.desktop}) {
    left: 328px;
    top: 117px;
  }
`;
export const BlackSquare = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  /* left: 247px; */
  top: 140px;
  left: calc(100vw * 2 / 3);

  background: ${p => p.theme.title.text};
  border-radius: 50%;

  z-index: -1;

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

export const GreenRightSquare = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  right: 23px;
  top: 108px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  z-index: -1;

  @media (${p => p.theme.device.tablet}) {
    width: 14px;
    height: 14px;
    right: 15px;
    top: 98px;
  }

  @media (${p => p.theme.device.desktop}) {
    right: 171px;
    top: 135px;
  }
`;
