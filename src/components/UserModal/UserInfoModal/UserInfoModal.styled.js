<<<<<<< Updated upstream
import styled from '@emotion/styled';

export const UserInfoModalWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 402px;
  background: #FAFAFA;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const UserProfileImage = styled.div`
  position: absolute;
  width: 103px;
  height: 103px;
  left: 189px;
  top: 50px;
  background: #D9D9D9;
`;

export const UploadPhotoButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 258px;
  top: 131px;
  background: url(pen.svg) no-repeat;
`;

export const InputNameWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 58px;
  left: 40px;
  top: 203px;
`;

export const InputNameIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const InputName = styled.input`
  width: 352px;
  height: 27px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #23262A;
  opacity: 0.8;
  border: none;
  outline: none;
  padding-left: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SaveChangesButton = styled.button`
=======
import styled from "@emotion/styled";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 480px;
  height: 402px;
  background-color: #ececec;
  border-radius: 24px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  & svg {
    fill: #d9d9d9;
  }
`;

const FormContainer = styled.form`
  padding: 60px 32px 0 32px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background-color: #d9d9d9;
  border-radius: 6px;
  padding: 0 48px 0 16px;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #8baa36;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: 16.74px;
  left: 18px;
  font-size: 16px;
  line-height: 24px;
  color: #8baa36;
`;

const ExampleName = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 16.74px;
  right: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #8baa36;
`;

const PenIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 28px;
  width: 19px;
  height: 19px;
`;

const SaveButton = styled.button`
>>>>>>> Stashed changes
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 138px;
  gap: 8px;
  position: absolute;
  width: 400px;
  height: 59px;
  left: 40px;
<<<<<<< Updated upstream
  top: 32px;
  background: #8BAA36;
  border-radius: 6px;
`;

export const SaveChangesButtonText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  background: url(close-icon.svg) no-repeat;
  border: none;
  cursor: pointer;
`;
=======
  top: 293px;
  background: #8baa36;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: #679225;
  }

  &:disabled {
    background-color: #d9d9d9;
    color: #4d4d4d;
    cursor: default;
  }
`;
export {
    ModalBackdrop,
    ModalContainer,
    CloseButton,
    FormContainer,
    InputContainer,
    Input,
    InputLabel,
    ExampleName,
    PenIcon,
    SaveButton
}
>>>>>>> Stashed changes
