/*Abre e fecha menu lateral em modo mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    /* Alternando entre 🍔 e X */
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")
    /* Adicionando classe menu-nav-active ao body para aparecer e desaparecer menu */
    body.classList.toggle("menu-nav-active")
})