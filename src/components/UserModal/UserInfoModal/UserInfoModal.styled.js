import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as UserIcon } from '../../../images/icon/name-icon.svg';
import { ReactComponent as Pencil } from '../../../images/icon/pen.svg';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 50%;
  width: 330px;
  height: 327px;
  padding: 32px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.primary.userBg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  border: 1px solid #8baa36;
  transform: translate(-50%, -50%);

  &:hover,
  .focus {
    border: 1px solid #8baa36;
  }

  @media ${p => p.theme.device.tablet} {
    width: 480px;
    height: 402px;
    top: 60%;
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 425px;
    border-radius: 30px;
  }
`;

export const Plus = styled(AddCircleOutlineIcon)`
  width: 24px;
  height: 24px;
  bottom: 10px;
  right: 3px;
  cursor: pointer;
  position: absolute;
  fill: ${p => p.theme.title.text};
`;

export const IconClose = styled(CloseIcon)`
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
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const IconUser = styled(UserIcon)`
  width: 18px;
  height: 18px;
  margin-right: 11px;
  fill: ${p => p.theme.title.text};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export const IconPencil = styled(Pencil)`
  display: inline;
  width: 12px;
  height: 12px;
  margin-left: 22px;
  cursor: pointer;
  fill: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    margin-left: 35px;
  }
`;

export const FormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const InputContainer = styled.div`
  width: 282px;
  height: 48px;
  padding: 16px 19px;
  margin-bottom: 24px;
  /* margin-right: auto;
  margin-left: auto; */
  border: 1px solid ${p => p.theme.primaryText.text};
  border-radius: 6px;
  text-align: center;

  @media ${p => p.theme.device.tablet} {
    width: 400px;
    height: 58px;
    padding: 16px 14px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  color: ${p => p.theme.primaryText.text};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[5]})
    );
  }
`;

export const FileInputWrap = styled.div`
  background-color: rgba(217, 217, 217, 1);
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  /* margin-left: auto;
  margin-right: auto; */
  margin-bottom: 34px;
  overflow: hidden;

  @media ${p => p.theme.device.tablet} {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-bottom: 52px;
  }
`;

export const Image = styled.picture`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  transform: translate(-50% -50%);
`;

export const FileInput = styled.input`
  width: 50px;
  height: 50px;
  margin-top: 8px;

  @media ${p => p.theme.device.desktop} {
    width: 357px;
    height: 335px;
    margin-top: 9px;
  }
`;

export const UserImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  transform: translate(-50% -50%);
  position: absolute;
  top: 10px;
  left: 10px;

  @media ${p => p.theme.device.tablet} {
    width: 103px;
    height: 103px;
  }
`;

export const Error = styled.p`
  margin-top: 8px;
  color: ${p => p.theme.inputError};
  font-size: ${p => p.theme.fontSizes[3]}px;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  cursor: pointer;
  width: 282px;
  height: 48px;
  padding: 14px 89px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid ${p => p.theme.primaryText.text};
  border-radius: 6px;
  text-align: center;
  background-color: rgba(139, 170, 54, 1);
  color: ${p => p.theme.primary.textFooter};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  @media ${p => p.theme.device.tablet} {
    width: 400px;
    height: 58px;
    padding: 18px 143px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;
