import styled from '@emotion/styled';
import { ReactComponent as MySVG } from '../../../images/icon/name-icon.svg';
import { ReactComponent as MySVG } from '../../../images/icon/pen.svg';
import { ReactComponent as MySVG } from '../../../images/icon/plus.svg';
import { ReactComponent as MySVG } from '../../../images/icon/x-icon.svg';


export const ModalContainer = styled.div`
  background: #ECECEC;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  width: 480px;
  height: 402px;
  position: relative;
`;

export const EditProfileButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  color: #8BAA36;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const LogoutBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  font-size: 16px;
  color: #8BAA36;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 18px;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  color: #8BAA36;
  margin-bottom: 16px;
`;

export const FormExample = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 26.67px;
  position: absolute;
  top: 16.74px;
  left: 18px;
  padding: 0px;
  gap: 8px;
  color: #D9D9D9;
`;

export const PencilIcon = styled.img`
  background-image: url(${pen.svg});
  width: 19px;
  height: 19px;
  position: absolute;
  left: 0px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 6px;
  background: #D9D9D9;
  padding: 8px 16px 8px 32px;
  margin-bottom: 16px;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 59px;
  position: absolute;
  left: 40px;
  top: 293px;
  padding: 21px 138px;
  gap: 8px;
  background: #8BAA36;
  border-radius: 6px;
  cursor: pointer;
  color: #ECECEC;
  border: none;
  font-size: 16px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${x-icon.svg});
`;