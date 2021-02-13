// get elements
const burgerIcone = document.getElementsByClassName('burger-menu-icone')[0];
const rect1 = document.getElementsByClassName("rect")[0];
const rect2 = document.getElementsByClassName("rect")[1];
const rect3 = document.getElementsByClassName("rect")[2];
const menu = document.getElementsByClassName('menu')[0];

// listeners
burgerIcone.addEventListener('click', openMenu);


//functions
function openMenu(){
  menu.classList.add("open-menu");
  menu.classList.remove("close-menu");
  closeIcone();
  burgerIcone.removeEventListener("click", openMenu);
  burgerIcone.addEventListener("click", closeMenu);
}

function closeMenu(){
  menu.classList.remove("open-menu");
  menu.classList.add("close-menu");
  openIcone();
  burgerIcone.removeEventListener("click", closeMenu);
  burgerIcone.addEventListener("click", openMenu);
}

function closeIcone(){
  burgerIcone.classList.add("close-burger-icone");
  rect1.classList.add("rect1");
  rect2.classList.add("rect2");
  rect3.classList.add("rect3");
  rect1.setAttribute("x", -20);
  rect1.setAttribute("y", 25);
  rect3.setAttribute("x", 10);
  rect3.setAttribute("y", -4);
}

function openIcone(){
  burgerIcone.classList.remove("close-burger-icone");
  rect1.classList.remove("rect1");
  rect2.classList.remove("rect2");
  rect3.classList.remove("rect3");
  rect1.setAttribute("x", 0);
  rect1.setAttribute("y", 0);
  rect3.setAttribute("x", 0);
  rect3.setAttribute("y", 33.3);
}