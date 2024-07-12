let buttonchanger= document.getElementById("btn");
let color = ["blue", "red", "green", "yellow", "pink", "orange", "brown", "Purple", "Lavender", "indigo", "olive"];
let colorIndex = 0 
let body = document.querySelector("body")
let Myspan = document.getElementById("colordisplay")
 
function button (){
  body.style.backgroundColor = color[colorIndex];
  colorIndex = (colorIndex + 1 ) % color.length;
  Myspan.textContent = color[colorIndex]
}

buttonchanger.addEventListener("click", button); 
  