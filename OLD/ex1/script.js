// Variables
const success = document.getElementsByClassName("resultado")[0]

const inputName = document.getElementById("nombre")
const inputSubject = document.getElementById("asunto")
const inputMessage = document.getElementById("mensaje")

const errorName = document.getElementsByClassName("errorNombre")[0]
const errorSubject = document.getElementsByClassName("errorAsunto")[0]
const errorMessage = document.getElementsByClassName("errorMensaje")[0]

const submitButton = document.getElementById("botton")

const allP = document.getElementsByTagName("p")

// Regex pattern
let regexPattern = /^[\p{L} ]+$/u

// Event listener
submitButton.addEventListener("click", (e) => {
   // Success boolean
   let fail = false
   // Hide success message
   success.style.display = "none"
   // Hide all error messages
   Array.from(allP).forEach((e) => {
      e.style.display = "none"
   })

   // If there's no name ...
   if (!inputName.value) {
      errorName.textContent = "El nombre es requerido"
      errorName.style.display = "block"
      fail = true
   }
   // If there IS a name BUT contains non-alphabetic characters
   else if (!regexPattern.test(inputName.value)) {
      errorName.textContent = "Ingresar solo caracteres alfabéticos"
      errorName.style.display = "block"
      fail = true
   }

   // If there's no subject
   if (!inputSubject.value) {
      errorSubject.textContent = "El asunto es requerido"
      errorSubject.style.display = "block"
      fail = true
   }
   // If there IS a subject BUT contains non-alphabetic characters
   else if (!regexPattern.test(inputSubject.value)) {
      errorSubject.textContent = "Ingresar solo caracteres alfabéticos"
      errorSubject.style.display = "block"
      fail = true
   }

   // If there's no message
   if (!inputMessage.value) {
      errorMessage.textContent = "El mensaje es requerido"
      errorMessage.style.display = "block"
      fail = true
   }
   // If there IS a message BUT contains non-alphabetic characters
   else if (!regexPattern.test(inputMessage.value)) {
      errorMessage.textContent = "Ingresar solo caracteres alfabéticos"
      errorMessage.style.display = "block"
      fail = true
   }

   // If there's NO error
   if (!fail) {
      success.textContent = "Mensaje enviado con éxito !!!"
      success.style.display = "block"
   }

   e.preventDefault()
})
