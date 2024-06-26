// import modal.js
  import { Modal } from './modal.js'
  import { AlertError } from "./alert-error.js"
  import { calculateIMC, notANumber } from "./utils.js"

// variáveis - variables

  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#weight')
  const inputHeight = document.querySelector('#height')

//Fechar a janela de erro ao digitar no campo
    inputWeight.oninput =() => AlertError.close()
    inputHeight.oninput =() => AlertError.close()

 form.onsubmit = event => {
    event.preventDefault()
   
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    // mostrar o alerta de erro na página
      if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
      }

      AlertError.close()
    
     const result = calculateIMC(weight, height)
     displayResultMessage(result)
  }
    
  function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    // abrir o modal
      Modal.message.innerText = message
      Modal.open()
  }

 
  
