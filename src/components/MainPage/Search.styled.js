import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  width: 295px;
  margin: 0 40px;
`;

export const Input = styled.input`
  width: 295px;
  height: 52px;
  padding: 17px 115px 17px 32px;
  background-color: ${p => p.theme.secondary.searchBg};
  color: ${p => p.theme.primaryText.text};
  border-radius: 24px 44px;
  border: 1px solid ${p => p.theme.borderInput};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 1.5;
  outline: none;
`;
export const ButtonSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 113px;
  height: 52px;

  background-color: ${p => p.theme.title.addBtnBg};
  color: ${p => p.theme.primary.textFooter};
  border-radius: 24px 44px;
  outline: none;
  border: transparent;

  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.5;

  :hover,
  :focus {
    background-color: ${props => props.theme.accent.iconFollow};
    color: ${props => props.theme.primary.background};
  }
`;
