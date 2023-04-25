import styled from '@emotion/styled';

export const FormSubtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.primaryText.text};
`;

export const RecipeText = styled.textarea`
  width: 343px;
  min-height: 154px;
  padding: 10px 16px;
  margin: 24px 0 18px;
  background-color: 'rgba(217, 217, 217, 0.25)';
  outline: none;
  border: none;
  border-radius: ${p => p.theme.radii[1]};
  resize: none;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.input.input};
  opacity: 0.5;
  ::placeholder {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1;
    letter-spacing: -0.02em;
    color: 'rgba(0, 0, 0, 0.8)';
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
  color: brown;
  font-size: ${p => p.theme.fontSizes[3]};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
    margin-bottom: 32px;
  }
`;
