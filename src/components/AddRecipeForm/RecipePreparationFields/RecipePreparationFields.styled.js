import styled from '@emotion/styled';

export const FormSubtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[7]};
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.subtitle};
`;

export const RecipeText = styled.textarea`
  width: 343px;
  min-height: 154px;
  padding: 10px 16px;
  margin: 24px 0 18px;
  background-color: ${p => p.theme.background.placeholder};
  outline: none;
  border: 1px solid ${p => p.theme.secondary.recipePreparation};
  border-radius: ${p => p.theme.radii[1]};
  resize: none;
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
  }
  @media screen and (min-width: 768px) {
    width: 505px;
    min-height: 224px;
    padding: 16px 22px;
    margin: 32px 0;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[5]};
    }
  }
`;

export const Error = styled.p`
  margin-bottom: 18px;
  color: ${p => p.theme.inputError};
  font-size: ${p => p.theme.fontSizes[3]};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
    margin-bottom: 32px;
  }
`;
