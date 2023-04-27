import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Background from '../../images/main/main-bg_mobile.png';
import { ReactComponent as ArrowIcon } from '../../images/icon/arrow-main.svg';

export const Container = styled.div`
  /* background-image: url('${Background}'); */
  /* background-size: 58px auto, 375px auto; */
  /* background-position: top right, center;
  background-repeat: no-repeat; */
`;

export const TitleWrap = styled.span`
  display: flex;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[11]};
  line-height: 1;
  letter-spacing: -0.005em;
  color: ${p => p.theme.accent.mainBtnBg};
`;
export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[11]};
  line-height: 1;
  letter-spacing: -0.005em;
  color: ${p => p.theme.title.text};
`;
export const MainText = styled.p`
  margin: 0 auto 157px auto;
  max-width: 248px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${p => p.theme.primaryText.text};
`;

export const ContainerWrap = styled.div`
  max-width: 225px;
  margin-right: 34px;
  margin-left: 116px;
  margin-bottom: 115px;
  padding: 8px;
  background-color: ${p => p.theme.primary.background};
  border-radius: ${p => p.theme.radii[2]};
`;

export const Description = styled.p`
  margin-bottom: 4px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};
`;

export const DescriptionAccent = styled.span`
  color: ${p => p.theme.accent.mainBtnBg};
`;

export const LinkRecipes = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${p => p.theme.blackText.text};

  :hover,
  :focus {
    color: ${p => p.theme.accent.mainBtnBg};
  }
`;
export const IconArrow = styled(ArrowIcon)`
  /* display: block; */
  width: 12px;
  height: 9px;
  /* color: ${p => p.theme.blackText.text}; */
  /* :hover {
    color: ${p => p.theme.accent.mainBtnBg};
  } */
`;
