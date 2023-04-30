import styled from '@emotion/styled';

export const StyledItem = styled.li`
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
`;

export const PrewievImg = styled.img`
  height: 100%;
  object-fit: cover;
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
