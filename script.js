// variáveis - variables

  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#weight')
  const inputHeight = document.querySelector('#height')

  const modalWrapper = document.querySelector('.modal-wrapper')
  const modalMessage = document.querySelector('.modal .title span')
  const modalBtnClose = document.querySelector('.modal button.close')

  
  
  /* 3 maneiras de criar e atribuir função a um evento */
  
  /*1ª forma:
   form.onsubmit = function() {}
  */
 
  /* 2ª forma:arrow function
    form.onsubmit = () => {}
  */
  
  /* 3ª forma:
    form.onsubmit = handlesubmit
    function handleSubmit() {
      
    }
  */
 
 form.onsubmit = event => {
  event.preventDefault()
   
   const weight = inputWeight.value
   const height = inputHeight.value
   
   const result = IMC(weight, height)
   const message = `Seu IMC é de ${result}`
   
   // abrir o modal
     modalMessage.innerText = message

   // add "open" para trocar a mensagem do modal
      modalWrapper.classList.add('open')
}

// remove "open" para trocar a mensagem do modal
  modalBtnClose.onclick = () => 
    modalWrapper.classList.remove('open')

// função do IMC
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }