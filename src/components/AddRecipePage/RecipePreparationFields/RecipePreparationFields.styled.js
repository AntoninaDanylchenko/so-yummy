import styled from '@emotion/styled';

export const FormSubtitle = styled.p`
  /* font-weight: ${p => p.theme.fontWeights.semibold}; */
  font-size: 24px;
  /* line-height: ${p => p.theme.lineHeights.single}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.textSubTitle}; */
  //
`;

export const RecipeText = styled.textarea`
  width: 343px;
  min-height: 154px;
  padding: 10px 16px;
  margin: 24px 0 18px;
  /* background-color: ${p => p.theme.colors.inputBackground}; */
  outline: none;
  border: none;
  /* border-radius: ${p => p.theme.radius.small}; */
  resize: none;
  /* font-size: ${p => p.theme.fontSizes.s}px; */
  /* line-height: ${p => p.theme.lineHeights.large}; */
  letter-spacing: -0.02em;
  /* color: ${p => p.theme.colors.mainDark}; */
  opacity: 0.5;
  ::placeholder {
    /* font-size: ${p => p.theme.fontSizes.s}px; */
    /* line-height: ${p => p.theme.lineHeights.large}; */
    letter-spacing: -0.02em;
    /* color: ${p => p.theme.colors.mainDark}; */
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 505px;
    min-height: 224px;
    padding: 16px 22px;
    margin: 32px 0;
    ::placeholder {
      /* font-size: ${p => p.theme.fontSizes.l}px; */
    }
  }
`;

export const Error = styled.p`
  margin-bottom: 18px;
  color: brown;
  font-size: ${p => p.theme.fontSizes.s}px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
    margin-bottom: 32px;
  }
`;
