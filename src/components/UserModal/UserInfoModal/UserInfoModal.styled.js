import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as UserIcon } from '../../../images/icon/name-icon.svg';
import { ReactComponent as Pencil } from '../../../images/icon/pen.svg';

// export const ModalBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 5;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 330px;
  height: 327px;
  display: flex;
  justify-content: column;
  align-items: center;
  background-color: ${p => p.theme.primary.userBg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media ${p => p.theme.device.tablet} {
    width: 480px;
    height: 402px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 425px;
    border-radius: 30px;
  }
`;

export const IconClose = styled(CloseIcon)`
  width: 20px;
  height: 20px;
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
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  border: 1px solid ${p => p.theme.primary.userBg};
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
  width: 282px;
  height: 48px;

  @media ${p => p.theme.device.tablet} {
    width: 400px;
    height: 58px;
    padding: 16px 23px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
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

export const IconUser = styled(UserIcon)`
  width: 18px;
  height: 18px;
  fill: ${p => p.theme.title.text};

  @media ${p => p.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const IconPencil = styled(Pencil)`
  display: inline;
  width: 12px;
  height: 12px;
  margin-left: 22px;
  fill: ${p => p.theme.primaryText.text};

  @media ${p => p.theme.device.tablet} {
    margin-left: 35px;
  }
`;

export const FileInputWrap = styled.div`
  background-color: red;
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 54px;

  @media ${p => p.theme.device.tablet} {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }

  @media ${p => p.theme.device.tablet} {
    width: 103px;
    height: 103px;
    margin-bottom: 52px;
  }
`;

export const Image = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
`;

export const FileInput = styled.input`
  width: 279px;
  height: 260px;
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
  object-fit: cover;
  border-radius: ${p => p.theme.radii[2]};
  position: absolute;
  top: 0;
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
  cursor: pointer;
  width: 114px;
  height: 21px;
  padding: 14px 84px;
  background-color: rgba(139, 170, 54, 1);
  color: ${p => p.theme.primary.userBg};
  font-family: ${p => p.theme.fonts};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: calc(
    (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[3]})
  );

  @media ${p => p.theme.device.tablet} {
    width: 114px;
    height: 23px;
    padding: 18px 143px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: calc(
      (${p => p.theme.fontWeights.regular}) / (${p => p.theme.fontSizes[4]})
    );
  }
`;
