import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './ModalWindows.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindows = ({ children, onclose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onclose();
    }
  };

  const handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onclose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
