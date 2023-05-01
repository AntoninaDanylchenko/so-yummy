import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;
`;

export const Form = styled.form`
  position: relative;
  width: 295px;
  margin-left: auto;

  @media screen and (${p => p.theme.device.tablet}) {
    margin: 0;
    width: 369px;
  }
  @media screen and (${p => p.theme.device.desktop}) {
    width: 510px;
  }
`;

export const Input = styled.input`
  margin-top: 50px;
  width: 295px;
  height: 52px;
  padding: 17px 115px 17px 32px;
  background-color: ${p => p.theme.secondary.searchBg};
  color: ${p => p.theme.primaryText.text};
  border-radius: 24px 44px;
  border: 2px solid ${p => p.theme.borderInput};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 1.5;
  outline: none;
  @media screen and (${p => p.theme.device.tablet}) {
    width: 369px;
    height: 59px;
    margin-top: 40px;
    padding-right: 165px;
    font-size: ${p => p.theme.fontSizes[4]};
  }
  @media screen and (${p => p.theme.device.desktop}) {
    width: 510px;
    height: 70px;
    margin-top: 50px;
  }
`;
export const SearchBtn = styled.button`
  position: absolute;
  top: 50px;
  right: 0;
  width: 113px;
  height: 52px;

  background-color: ${p => p.theme.btnBg};
  color: ${p => p.theme.primary.textFooter};
  border-radius: 24px 44px;

  border: none;
  border: transparent;

  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1.5;
  transition: color ${p => p.theme.transition},
    background-color ${p => p.theme.transition};
  :hover,
  :focus {
    background-color: ${p => p.theme.title.addBtnBg};
    color: ${p => p.theme.primary.textFooter};
    outline: none;
  }
  @media screen and (${p => p.theme.device.tablet}) {
    top: 40px;
    width: 161px;
    height: 59px;
    font-size: ${p => p.theme.fontSizes[4]};
  }
  @media screen and (${p => p.theme.device.desktop}) {
    height: 70px;
    top: 50px;
  }
`;
