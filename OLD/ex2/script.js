const buttons = document.getElementsByTagName("button")
const divMain = document.getElementById("caja")

Array.from(buttons).forEach((button) => {
   button.addEventListener("click", (el) => {
      let bColor = window
         .getComputedStyle(el.target, null)
         .getPropertyValue("background-color")
      divMain.style.backgroundColor = bColor
   })
})
