// 2. A partir de un selector de colores, cambia el color del cuadro principal al hacer click sobre uno de los colores. Ver las siguientes imágenes
const divColors = document.getElementsByClassName("color")
const divMain = document.getElementsByClassName("column-2")[0]
console.log(divMain)

Array.from(divColors).forEach((div) => {
   div.addEventListener("click", (el) => {
      let bColor = window
         .getComputedStyle(el.target, null)
         .getPropertyValue("background-color")
      divMain.style.backgroundColor = bColor
   })
})
