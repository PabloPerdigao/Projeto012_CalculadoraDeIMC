
// função validação NaN
  export function notANumber(value) {
    return isNaN(value) || value == ""
  }

// função do IMC
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }