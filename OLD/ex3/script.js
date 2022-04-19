// Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0.
const result = document.getElementsByClassName("resultado")[0]

const sumButton = document.getElementById("btn-sumar")
const subButton = document.getElementById("btn-restar")

const firstVal = document.getElementById("valor1")
const secondVal = document.getElementById("valor2")

sumButton.addEventListener("click", (_) => {
   const number1 = Number(firstVal.value)
   const number2 = Number(secondVal.value)
   let sum = number1 + number2

   result.innerText = sum
})

subButton.addEventListener("click", (_) => {
   const number1 = Number(firstVal.value)
   const number2 = Number(secondVal.value)
   let substraction = number1 - number2
   if (substraction < 0) substraction = 0

   result.innerText = substraction
})
