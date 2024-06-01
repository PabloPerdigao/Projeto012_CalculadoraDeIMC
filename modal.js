// object literal
export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  // shorthand funtion  
    open() {
      Modal.wrapper.classList.add('open')
    },
    close() {
      Modal.wrapper.classList.remove('open')
    }
}

// fechar o modal
Modal.buttonClose.onclick = () => {
  Modal.close()
}