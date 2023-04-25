import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0.01, 0.01, 0.01);
  z-index: 1200;
  border-radius: 10px;
`;

export const ModalW = styled.div`
  position: absolute;
  z-index: 1;
  top: 72px;
  right: 60px;
  width: 161px;
  height: 130px;

  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 28px;

  border-radius: 10px;
  background-color: white;
  transform: ${({ isOpen }) =>
    !isOpen ? 'translateY(-10%)' : 'translateY(0)'};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 760px) {
    top: 80px;
    right: 220px;
    width: 177px;
    height: 144px;
    gap: 32px;
  }
`;
