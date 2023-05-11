import { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './ModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ children, onClose }) => {
  const backdropRef = createRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (modalRoot.childElementCount > 0) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
      {children}
    </Backdrop>,
    modalRoot
  );
};
