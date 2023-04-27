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