import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyle, Backdrop } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  closeMouseClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.onClick();
    }
  };

  handleClose = e => {
    if (e.code === 'Escape') {
      return this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={this.closeMouseClick}>
        <ModalStyle>
          <img src={children} width="768" alt="" />
        </ModalStyle>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.string.isRequired,
};
