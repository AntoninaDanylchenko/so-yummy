import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

export const IconClose = styled(CloseIcon)`
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: ${p => p.theme.title.text};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media ${p => p.theme.device.tablet} {
    top: 24px;
    right: 24px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 330px;
  height: 179px;
  right: 150px;
  top: 20px;
  border-radius: 30px;
  padding: 44px 24px;
  border: 1px solid #8baa36;
  background-color: ${p => p.theme.primary.userBg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  &:hover,
  .focus {
    border: 1px solid #8baa36;
  }

  @media ${p => p.theme.device.tablet} {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
    right: 350px;
    top: 20px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 215px;
    padding: 50px;
  }
`;

export const ModalText = styled.p`
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );
  margin-bottom: 24px;
  color: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[5]})
    );
    margin-bottom: 32px;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[5]})
    );
    margin-bottom: 32px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${p => p.theme.device.desktop} {
    gap: 16px;
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  max-width: 100%;
  height: 100%;
  padding: 14px 18px;
  border: none;
  border-radius: 6px;
  text-align: center;
  color: rgba(250, 250, 250, 1);
  background-color: rgba(139, 170, 54, 1);
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  &.hover,
  &.focus {
    background-color: rgba(34, 37, 42, 1);
  }

  @media ${p => p.theme.device.tablet} {
    max-width: 100%;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;

export const CancelButton = styled.button`
  cursor: pointer;
  max-width: 100%;
  padding: 14px 18px;
  border: none;
  border-radius: 6px;
  text-align: center;
  color: rgba(35, 38, 42, 1);
  background-color: rgba(217, 217, 217, 1);
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  &.hover,
  &.focus {
    background-color: #fafafa;
  }

  @media ${p => p.theme.device.tablet} {
    max-width: 100%;
    padding: 18px 39px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;

