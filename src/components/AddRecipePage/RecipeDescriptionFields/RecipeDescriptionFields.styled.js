import styled from '@emotion/styled';

export const DescrWrap = styled.div`
  margin-bottom: 67px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const FileInputWrap = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  margin: 0 auto 32px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 357px;
    margin-right: 50px;
  }
`;

export const FileInput = styled.input`
  width: 279px;
  height: 260px;
  margin-top: 8px;
  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 335px;
    margin-top: 9px;
  }
`;

export const RecipeImage = styled.img`
  width: 279px;
  height: 268px;
  object-fit: cover;
  /* border-radius: ${p => p.theme.radius.regular}; */
  position: absolute;
  top: 0;
  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const Image = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
`;

export const InputWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 393px;
  }
`;

export const DescrInput = styled.input`
  width: 343px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: none;
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.inputText}; */
  opacity: 0.5;
  ::placeholder {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
    /* line-height: ${p => p.theme.lineHeights.large}; */
    letter-spacing: -0.02em;
    /* color: ${p => p.theme.colors.inputText}; */
    opacity: 1;
    @media screen and (min-width: 768px) {
      /* font-size: ${p => p.theme.fontSizes.m}px; */
    }
  }
  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    /* font-size: ${p => p.theme.fontSizes.m}px; */
  }
`;

export const SelectWrap = styled.div`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
  }
`;

export const DescrLabel = styled.div`
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.inputText}; */
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.m}px; */
  }
`;

export const DescrSelect = styled.div`
  width: 120px;
  height: 43px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    /* color: ${p => p.theme.colors.accent}; */
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 140px;
    /* font-size: ${p => p.theme.fontSizes.s}px; */
  }
`;

export const SelectText = styled.span`
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textPrimary}; */
  cursor: pointer;
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.m}px; */
  }
`;

export const CategoryList = styled.ul`
  width: 123px;
  height: 144px;
  /* background-color: ${p => p.theme.colors.mainLight}; */
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  /* border-radius: ${p => p.theme.radius.small}; */
  overflow-y: scroll;
  z-index: 3;
  @media screen and (min-width: 768px) {
    width: 132px;
    height: 162px;
  }
`;

export const CategoryItem = styled.li`
  font-size: 12px;
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  :hover {
    /* color: ${p => p.theme.colors.accent}; */
  }
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
  }
`;

export const TimeList = styled.ul`
  width: 98px;
  height: 144px;
  /* background-color: ${p => p.theme.colors.mainLight}; */
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  /* border-radius: ${p => p.theme.radius.small}; */
  overflow-y: scroll;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 110px;
    height: 162px;
  }
`;

export const TimeItem = styled.li`
  font-size: 12px;
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  :hover {
    /* color: ${p => p.theme.colors.accent}; */
  }
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
  }
`;

export const OneInputWrap = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Error = styled.p`
  margin-top: 8px;
  color: brown;
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  @media screen and (min-width: 768px) {
    /* font-size: ${p => p.theme.fontSizes.m}px; */
  }
`;
