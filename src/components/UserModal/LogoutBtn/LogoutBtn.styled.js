import styled from '@emotion/styled';

<<<<<<< Updated upstream
export const LogoutModal = styled.div`
=======
const ModalContainer = styled.div`
>>>>>>> Stashed changes
  position: relative;
  width: 480px;
  height: 215px;
  background: #FAFAFA;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

<<<<<<< Updated upstream
export const LogoutTitle = styled.h2`
=======
const ModalText = styled.p`
>>>>>>> Stashed changes
  position: absolute;
  width: 288px;
  height: 24px;
  left: 96px;
  top: 50px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #23262A;
`;

<<<<<<< Updated upstream
export const LogoutButton = styled.button`
=======
const ModalButtons = styled.div`
>>>>>>> Stashed changes
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
<<<<<<< Updated upstream
  padding: 21px 39px;
  gap: 8px;
  position: absolute;
  width: 192px;
  height: 59px;
  left: 40px;
  top: 120px;
  background: #8BAA36;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;

  &:hover {
    background: #6c8727;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 39px;
  gap: 8px;
  position: absolute;
  width: 192px;
  height: 59px;
  left: 248px;
  top: 120px;
  background: #D9D9D9;
  border-radius: 6px;
  color: #23262A;
  border: none;
  cursor: pointer;

  &:hover {
    background: #c2c2c2;
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
`;
   
=======
  gap: 8px;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 39px;
  width: 192px;
  height: 59px;
  background: #8BAA36;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #FAFAFA;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 39px;
  width: 192px;
  height: 59px;
  background: #D9D9D9;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #23262A;
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
  svg {
    width: 100%;
    height: 100%;
    fill: #23262A;
  }
`;
export {
    ModalContainer,
    ModalText,
    ModalButtons,
    LogoutButton,
    CancelButton,
    CloseButton
}
>>>>>>> Stashed changes
