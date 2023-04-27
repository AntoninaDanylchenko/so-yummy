import styled from '@emotion/styled';
import { ReactComponent as MySVG } from '../../../images/icon/x-icon.svg';
import { ReactComponent as MySVG } from '../../../images/icon/pen.svg';

export const ModalContainer = styled.div`
  background: #ECECEC;
  width: 480px;
  height: 402px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const FormContainer = styled.div`
  position: relative;
  padding: 48px 40px 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 86px;
  height: 26.67px;
  left: 18px;
  top: 16.74px;
  color: #8BAA36;
  font-size: 16px;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;
  background: transparent;
  color: #8BAA36;

  &:focus {
    outline: none;
  }
`;

export const EditIcon = styled.img`
  position: absolute;
  width: 19px;
  height: 19px;
  background-image: url(${pen.svg});
`;

export const SaveButton = styled.button`
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
  top: 293px;
  background: #8BAA36;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 432px;
  top: 24px;
  background: none;
  border: none;
  cursor: pointer;
  background-image: url(${x-icon.svg});
`;