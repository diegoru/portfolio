/*Abre e fecha menu lateral em modo mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    /* Alternando entre list e X */
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")
    /* Adicionando classe menu-nav-active ao body para aparecer e desaparecer menu */
    body.classList.toggle("menu-nav-active")
})

/* Fecha o menu ao clicar em algum item e muda o icone para list*/

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})