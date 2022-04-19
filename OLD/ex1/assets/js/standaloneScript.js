// Desarrollar un código para validar un formulario de contacto utilizando el evento submit y las expresiones regulares que permitan el ingreso de caracteres desde la “A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información.
const sucess = document.getElementById("sucess")
const form = document.getElementById("form")
const inputName = document.getElementById("name")
const inputSubject = document.getElementById("subject")
const inputMessage = document.getElementById("message")
const submitButton = document.getElementById("submit")
const allP = document.getElementsByTagName("p")
const requiredP = document.getElementsByClassName("required")
const regexFailP = document.getElementsByClassName("regexFail")

// let pattern = /^[A-Za-z ]+$/ //Easiest
// let pattern = /^[A-Za-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ ]+$/ //Second easiest pre ES9
let regexPattern = /^[\p{L} ]+$/u //Latest

submitButton.addEventListener("click", (e) => {
   let fail = false
   Array.from(allP).forEach((e) => {
      e.style.display = "none"
   })

   if (!inputName.value) {
      requiredP[0].style.display = "block"
      fail = true
   } else if (!regexPattern.test(inputName.value)) {
      console.log(inputName.value)
      console.log("regex fallo!")
      regexFailP[0].style.display = "block"
      fail = true
   }

   if (!inputSubject.value) {
      requiredP[1].style.display = "block"
      fail = true
   } else if (!regexPattern.test(inputSubject.value)) {
      regexFailP[1].style.display = "block"
      fail = true
   }

   if (!inputMessage.value) {
      requiredP[2].style.display = "block"
      fail = true
   } else if (!regexPattern.test(inputMessage.value)) {
      regexFailP[2].style.display = "block"
      fail = true
   }

   if (!fail) {
      sucess.style.display = "block"
      form.parentNode.insertBefore(sucess, form)
   }
})
