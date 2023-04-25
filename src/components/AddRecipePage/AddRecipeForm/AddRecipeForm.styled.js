import styled from '@emotion/styled';

export const AddRecipeSection = styled.section`
  padding-bottom: 72px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.title.subtittle};
  margin-top: 30px;
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  width: 129px;
  height: 46px;
  border-radius: 24px 44px;
  border: none;
  background-color: ${p => p.theme.title.addBtnBg};
  color: ${p => p.theme.primary.background};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 1.43;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.accent.mainBtnBg};
  }
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }
`;
