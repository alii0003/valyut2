const menu = document.querySelector(".text");
let down_side=document.querySelector('.down-side')
const menuItems = document.querySelectorAll(".menuItem");
const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
let textMenyu=document.querySelectorAll('.text div')
document.body.classList.add('scrol');
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    document.body.classList.add('scrol')
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    document.body.classList.remove('scrol')
  }
}
btn.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});



