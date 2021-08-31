var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
    menuButton.addEventListener('click', function () {
        menu.classList.toggle('header-active');
    })