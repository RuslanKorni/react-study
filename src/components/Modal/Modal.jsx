import React, { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
   window.addEventListener('keydown', this.handleClickEsc)
}
  
  handleClickEsc = e => {
    // перевірка клавіші Escape
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  //* Этот жизненный цикл полезен для снятия слушателей событий
  componentWillUnmount() {
window.removeEventListener('keydown', this.handleClickEsc)
  }

  //! закриття модалки по кліку на бекдроп
  handleClickBackdrop = e => {
    // перевірка чи клік був на бекдроп
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleClickBackdrop}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    )
  }
}

export default Modal;
