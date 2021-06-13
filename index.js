// mobile navbar slide 
const mMenu = document.getElementById("menuM") //icon triggred
const ac_navbar = document.getElementById("ac_nav") // panel triggred

mMenu.onclick = function(){
    ac_navbar.classList.toggle("slide_back")
}

