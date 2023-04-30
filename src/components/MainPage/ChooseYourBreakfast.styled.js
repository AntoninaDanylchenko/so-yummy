import styled from '@emotion/styled';
import EastIcon from '@mui/icons-material/East';

export const TitleWrap = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[11]};
  line-height: 1;
  letter-spacing: -0.005em;
  color: ${p => p.theme.accent.mainBtnBg};

  @media screen and ${p => p.theme.device.tablet} {
    justify-content: flex-start;
    margin-bottom: 24px;
    font-size: ${p => p.theme.fontSizes[12]};
  }
  @media screen and ${p => p.theme.device.desktop} {
    margin-bottom: 14px;
    font-size: ${p => p.theme.fontSizes[13]};
  }
`;
export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[11]};
  line-height: 1;
  letter-spacing: -0.005em;
  color: ${p => p.theme.title.text};

  @media screen and ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[12]};
  }
  @media screen and ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[13]};
  }
`;
export const MainText = styled.p`
  margin: 0 auto 364px auto;
  max-width: 248px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.primaryText.text};

  @media screen and ${p => p.theme.device.tablet} {
    margin: 0 auto 32px 0;
    max-width: 362px;
    text-align: start;
  }
  @media screen and ${p => p.theme.device.desktop} {
    max-width: 465px;
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 1.33;
  }
`;

export const ContainerWrap = styled.div`
  position: absolute;
  max-width: 225px;
  top: 460px;
  right: 135px;
  padding: 8px;
  background-color: ${p => p.theme.primary.background};
  border-radius: ${p => p.theme.radii[2]};
  @media screen and ${p => p.theme.device.tablet} {
    right: 0;
    top: 372px;
    right: 32px;
    max-width: 260px;
    padding: 12px;
  }
  @media screen and ${p => p.theme.device.desktop} {
    top: 462px;
    right: 122px;
    padding: 16px;
  }
`;

export const Description = styled.p`
  margin-bottom: 4px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};
  @media screen and ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.43;
  }
`;

export const DescriptionAccent = styled.span`
  color: ${p => p.theme.accent.mainBtnBg};
  @media screen and ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.43;
  }
`;

export const WrapLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.2;
  letter-spacing: 0.2px;
  outline: none;
  color: ${p => p.theme.blackText.text};
  transition: color ${p => p.theme.transition};
  :hover,
  :focus {
    color: ${p => p.theme.accent.mainBtnBg};
  }
`;

export const IconArrow = styled(EastIcon)`
  width: 12px;
  height: 9px;
  fill: ${p => p.theme.blackText.text};
  transition: fill ${p => p.theme.transition};
  :hover {
    fill: ${p => p.theme.accent.mainBtnBg};
  }
`;
