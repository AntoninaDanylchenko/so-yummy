import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 31px 16px 100px 16px;

  @media ${p => p.theme.device.tablet} {
    gap: 53px;
  }
  @media ${p => p.theme.device.desktop} {
    flex-direction: row;
    padding: 33px 100px 200px 100px;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[7]};
  line-height: 24px;
  padding: 0px 16px 0px 16px;
  color: ${p => p.theme.blackText.text};

  @media ${p => p.theme.device.desktop} {
    flex-direction: row;
    align-items: center;
    padding: 0px 100px 0px 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 0;
  min-width: 21px;
  min-height: 21px;
  padding: 5px 14px;
  border-radius: 50%;

  background-color: ${p => p.theme.accent.mainBtnBg};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 18px;
  color: ${p => p.theme.secondary.recipePreparation};
`;

export const Desc = styled.p`
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 14px;
  color: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 18px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.radii[2]};

  @media ${p => p.theme.device.tablet} {
    width: 433px;
    height: 332px;
  }
`;
