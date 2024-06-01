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

// fechar o modal usando a tecla Esc (Escape), do teclado
  window.addEventListener('keydown', handleKeydown)

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      Modal.close()
    }
  }