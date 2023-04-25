import { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function updateScrollLock() {
  if (modalRoot.childElementCount > 0) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

const Modal = ({ onClose, children }) => {
  const backdropRef = createRef();
  console.log(typeof onClose);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      updateScrollLock();
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  return createPortal(
    <Overlay ref={backdropRef} onClick={handleBackdropClick}>
      <ModalW>{children}</ModalW>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Modal };
