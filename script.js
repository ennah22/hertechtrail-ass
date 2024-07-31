let buttonchanger= document.getElementById("btn");
let color = ["blue", "red", "green", "yellow", "pink", "orange", "brown", "Purple", "Lavender", "indigo", "olive"];
let colorIndex = 0;
let body = document.querySelector("body");
document.body.style.backgroundColor = "Tomato"
let Myspan = document.getElementById("colordisplay");
let MyColorlist = document.getElementById("colorlist");
 
function button (){
  body.style.backgroundColor = color[colorIndex];
  let Colortext = document.createElement("li");
  Colortext.textContent = color[colorIndex];
  MyColorlist.appendChild(Colortext);
  colorIndex = (colorIndex + 1) % color.length;
}

buttonchanger.addEventListener("click", button); 
