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
  border-radius: ${p => p.theme.radii[2]};
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
  background-color: ${p => p.theme.mainBg};
  border: none;
  border-bottom: 1px solid ${p => p.theme.borderLine};
  padding-bottom: 18px;
  outline: none;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  opacity: 0.5;
  ::placeholder {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.43;
    letter-spacing: -0.02em;
    color: ${p => p.theme.input.input};
    opacity: 1;
    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes[4]};
    }
  }
  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const SelectWrap = styled.div`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${p => p.theme.borderLine};
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
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

export const DescrSelect = styled.div`
  width: 120px;
  height: 43px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.mainBg};
  border-bottom: 1px solid ${p => p.theme.borderLine};
  cursor: pointer;
  svg {
    color: ${p => p.theme.accent.iconFollow};
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 140px;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const SelectText = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const CategoryList = styled.ul`
  width: 123px;
  height: 144px;
  background-color: ${p => p.theme.primary.selectBg};
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: ${p => p.theme.shadows[1]};
  border-radius: ${p => p.theme.radii[1]};
  overflow-y: scroll;
  z-index: 3;
  @media screen and (min-width: 768px) {
    width: 132px;
    height: 162px;
  }
`;

export const CategoryItem = styled.li`
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  opacity: 0.5;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  :hover {
    color: ${p => p.theme.accent.iconFollow};
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const TimeList = styled.ul`
  width: 98px;
  height: 144px;
  background-color: ${p => p.theme.primary.selectBg};
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: ${p => p.theme.shadows[1]};
  border-radius: ${p => p.theme.radii[1]};
  overflow-y: scroll;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 110px;
    height: 162px;
  }
`;

export const TimeItem = styled.li`
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  opacity: 0.5;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  :hover {
    color: ${p => p.theme.accent.iconFollow};
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
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
  color: ${p => p.theme.inputError};
  font-size: ${p => p.theme.fontSizes[3]}px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;
