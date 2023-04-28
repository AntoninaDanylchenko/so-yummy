import styled from '@emotion/styled';

export const StyledItem = styled.li`
  transition: transform ${p => p.theme.transition};
  :hover {
    transform: scale(1.05);
  }
`;

export const Card = styled.div`
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
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};
`;
