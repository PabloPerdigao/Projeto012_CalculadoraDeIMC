// variáveis - variables

  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#weight')
  const inputHeight = document.querySelector('#height')

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

  console.log(weight, height)
}




// função do IMC
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }