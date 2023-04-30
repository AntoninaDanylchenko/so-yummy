import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;

  @media ${p => p.theme.device.tablet} {
    gap: 53px;
    margin-bottom: 200px;
  }
  @media ${p => p.theme.device.desktop} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-family: ${p=>p.theme.fonts.Poppins};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[7]};
  line-height: 24px;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  color: ${p => p.theme.blackText.text};

  @media ${p => p.theme.device.desktop} {
    flex-direction: row;
    align-items: center;
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
  font-family: ${p=>p.theme.fonts.Poppins};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 18px;
  color: ${p => p.theme.secondary.recipePreparation};
`;

export const Desc = styled.p`
  font-family: ${p=>p.theme.fonts.Poppins};
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
