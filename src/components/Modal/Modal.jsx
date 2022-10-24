import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyle, Backdrop } from './Modal.styled';
const modalRoot = document.querySelector('#modal--root');

export const Modal = ({ children, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  });

  const closeMouseClick = e => {
    if (e.target === e.currentTarget) {
      return onClick();
    }
  };

  const handleClose = e => {
    if (e.code === 'Escape') {
      return onClick();
    }
  };

  return createPortal(
    <Backdrop onClick={closeMouseClick}>
      <ModalStyle>
        <img src={children} width="768" alt="" />
      </ModalStyle>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.string.isRequired,
};