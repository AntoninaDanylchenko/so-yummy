import styled from '@emotion/styled';

const UserLogoModal = styled.div`
  width: 480px;
  height: 402px;
  background-color: #ECECEC;
  border-radius: 24px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  position: relative;

  & svg.plus-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 69px;
    top: 81px;
    background-color: #8BAA36;
    border-radius: 50%;
  }

  & svg.name-icon {
    position: absolute;
    width: 47px;
    height: 47px;
    left: 28px;
    top: 28px;
    & button {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 432px;
      top: 24px;
      cursor: pointer;
    }
  }

  & form {
    position: absolute;
    width: 400px;
    height: 59px;
    left: 40px;
    top: 293px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 21px 138px;
    gap: 8px;
    background-color: #8BAA36;
    border-radius: 6px;

    & input {
      width: 100%;
      height: 100%;
      padding-left: 30px;
      border: none;
      background-color: transparent;
      color: #FFFFFF;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0.02em;
      &::placeholder {
        color: #D9D9D9;
      }
    }

    & svg.pen-icon {
      position: absolute;
      width: 19px;
      height: 19px;
      left: 18px;
      top: 16.74px;
    }

    & button {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 8px;
      background-color: transparent;
      border: none;
      & span {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.02em;
      }
    }

    & button.close-icon {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 432px;
      top: 24px;
    }
  }
`;

export default UserLogoModal;