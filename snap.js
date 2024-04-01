const close = document.querySelector(".menu")
const open = document.querySelector(".open")
const navItems = document.querySelector(".nav-items")
const login = document.querySelector(".login")
console.log(login);
const lists = document.querySelector(".labels")


function closeMenu(){
  open.classList.toggle("responsive")
  navItems.classList.toggle('show')

  // login.classList.toggle("close")
  // login.classList.toggle("open")
}
// function closeMenu(){
//  close.classList.toggle("")
// }


