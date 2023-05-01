import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 420px;
  margin-bottom: 50px;

  @media ${p => p.theme.device.tablet} {
    margin-top: 540px;
    margin-bottom: 96px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-top: 570px;
    margin-bottom: 100px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  margin-bottom: 24px;
  background: ${p => p.theme.accent.mainBtnBg};
  border-radius: ${p => p.theme.radii[2]};

  @media ${p => p.theme.device.tablet} {
    padding: 21px 32px;
  }

  @media ${p => p.theme.device.desktop} {
    padding: 21px 40px;
    margin-bottom: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 18px;

  @media ${p => p.theme.device.tablet} {
    gap: 38px;
  }

  @media ${p => p.theme.device.desktop} {
    gap: 109px;
  }
`;

export const Desc = styled.p`
  font-family: ${p => p.theme.fonts.Poppins};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 15px;
  letter-spacing: 0.03em;
  color: ${p => p.theme.secondary.recipePreparation};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 27px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${p => p.theme.device.tablet} {
    gap: 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 14px 29px 14px 14px;
  background: ${p => p.theme.ligthGreen.ingredientBg};
  border-radius: 8px;

  @media ${p => p.theme.device.tablet} {
    padding: 33px 58px 33px 40px;
  }

  @media ${p => p.theme.device.desktop} {
    padding: 27px 70px 27px 58px;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${p => p.theme.device.tablet} {
    gap: 40px;
  }

  @media ${p => p.theme.device.desktop} {
    gap: 66px;
  }
`;

export const Image = styled.img`
  width: 57px;
  height: 57px;

  @media ${p => p.theme.device.tablet} {
    width: 112px;
    height: 112px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 128px;
    height: 128px;
  }
`;

export const Title = styled.p`
  font-family: ${p => p.theme.fonts.Poppins};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.blackText.text};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[7]};
    line-height: 24px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  gap: 38px;

  @media ${p => p.theme.device.tablet} {
    gap: 78px;
  }

  @media ${p => p.theme.device.desktop} {
    gap: 151px;
  }
`;

export const Amount = styled.p`
  font-family: ${p => p.theme.fonts.Poppins};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 15px;
  color: ${p => p.theme.secondary.recipePreparation};
  padding: 4px;
  margin: auto 0;
  background: ${p => p.theme.accent.mainBtnBg};
  border-radius: ${p => p.theme.radii[1]};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 27px;
    padding: 4px 8px;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  label {
    cursor: pointer;
    display: flex;
  }
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 18px;
    height: 18px;

    @media ${p => p.theme.device.tablet} {
      width: 35px;
      height: 35px;
    }
  }
  input:checked {
    & + label::before {
      content: '\\2714';
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${p => p.theme.accent.mainBtnBg};
      font-weight: bold;
      font-size: 10px;

      @media ${p => p.theme.device.tablet} {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
  label::before {
    content: '';
    border: 1px solid rgba(126, 126, 126, 0.5);
    border-radius: 4px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;

    @media ${p => p.theme.device.tablet} {
      width: 35px;
      height: 35px;
    }
  }
`;
