// variáveis - variables

  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#weight')
  const inputHeight = document.querySelector('#height')

// object literal
  const Modal = {

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

  Modal.close()

 form.onsubmit = event => {
  event.preventDefault()
   
   const weight = inputWeight.value
   const height = inputHeight.value
   
   const result = IMC(weight, height)
   const message = `Seu IMC é de ${result}`
   
   // abrir o modal
     Modal.message.innerText = message
     Modal.open()
    }
    
    // fechar o modal
      Modal.buttonClose.onclick = () => 
  
      Modal.close()

// função do IMC
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }