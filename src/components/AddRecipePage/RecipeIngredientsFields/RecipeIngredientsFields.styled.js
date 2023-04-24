import styled from '@emotion/styled';

export const IngredientsWrap = styled.div`
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const FormSubtitle = styled.p`
  /* font-weight: ${p => p.theme.fontWeights.semibold}; */
  font-size: 24px;
  /* line-height: ${p => p.theme.lineHeights.single}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textSubTitle}; */
`;

export const CountWrap = styled.div`
  /* display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 609px;
  } */
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92px;
  height: 28px;
  /* border: 1px solid ${p => p.theme.colors.counter}; */
  border-radius: 18px;
  @media screen and (min-width: 768px) {
    width: 110px;
    height: 32px;
  }
`;

export const MinusButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    height: 14px;
    width: 14px;
    /* color: ${p => p.theme.colors.counter}; */
    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const PlusButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    /* color: ${p => p.theme.colors.accent}; */
    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Number = styled.p`
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.heading}; */
  /* color: ${p => p.theme.colors.textTitle}; */
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.m}px; */
    /* line-height: ${p => p.theme.lineHeights.large}; */
  }
`;

export const IngredientItem = styled.li`
  width: 343px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngrInput = styled.input`
  width: 194px;
  height: 53px;
  margin-right: 14px;
  padding: 16px;
  /* background-color: ${p => p.theme.colors.inputBackground}; */
  /* border-radius: ${p => p.theme.radius.small}; */
  border: none;
  outline: none;
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.mainDark}; */
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
    /* font-size: ${p => p.theme.fontSizes.l}px; */
  }
`;

export const IngrList = styled.ul`
  width: 194px;
  height: 154px;
  position: absolute;
  z-index: 3;
  /* background: ${p => p.theme.colors.mainLight}; */
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  /* border-radius: ${p => p.theme.radius.small}; */
  overflow-y: scroll;
  padding: 8px 18px;
  @media screen and (min-width: 768px) {
    width: 398px;
    height: 172px;
  }
`;

export const IngrItem = styled.li`
  font-size: 12px;
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 6px;
  }
  :hover,
  :focus {
    color: rgba(139, 170, 54, 1);
  }
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
  }
`;

export const IngrNumberLabel = styled.div`
  position: relative;
  width: 84px;
  height: 53px;
  margin-right: 22px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    margin-right: 157px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const NumberInput = styled.input`
  width: 84px;
  height: 53px;
  padding: 16px 0 16px 10px;
  /* background-color: #f5f5f5; */
  /* background-color: ${p => p.theme.colors.measure}; */
  outline: none;
  border: none;
  /* border-radius: ${p => p.theme.radius.small}; */
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textPrimary}; */
  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    /* font-size: ${p => p.theme.fontSizes.l}px; */
  }
`;

export const UnitSelect = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 16px 8px 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 53px;
  /* background-color: ${p => p.theme.colors.unit}; */
  outline: none;
  border: none;
  /* border-radius: ${p => p.theme.radius.small}; */
  @media screen and (min-width: 768px) {
    width: 55px;
    height: 59px;
    background-position: 28px 22px;
  }
  svg {
    /* color: ${p => p.theme.colors.accent}; */
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SelectText = styled.span`
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textPrimary}; */
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.l}px; */
  }
`;

export const UnitList = styled.ul`
  width: 84px;
  height: 112px;
  padding: 12px 28px;
  /* background-color: ${p => p.theme.colors.mainLight}; */
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  /* border-radius: ${p => p.theme.radius.small}; */
  z-index: 5;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 97px;
    height: 128px;
  }
`;

export const UnitItem = styled.li`
  font-size: 12px;
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  :hover,
  :focus {
    color: rgba(139, 170, 54, 1);
  }
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
  }
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    /* color: ${p => p.theme.colors.textPrimary}; */
  }
`;

export const Error = styled.p`
  margin-top: 4px;
  color: brown;
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.m}px; */
    margin-top: 8px;
  }
`;

export const NumberError = styled.p`
  margin-top: 4px;
  color: brown;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;
