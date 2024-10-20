document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
    btnMenu = document.querySelector('.btn-menu'),
    menuLink = document.querySelectorAll('.menu-nav__link');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('menu--open')

        btnMenu.classList.toggle('btn-menu--open')
    })

    menuLink.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu--open')
    
            btnMenu.classList.remove('btn-menu--open')
        })
    })
})