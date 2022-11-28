let cabecalho_menu_button = document.querySelector('.cabecalho-menu-button')
let cabecalho_menu        = document.querySelector('.cabecalho__menu')
cabecalho_menu_button.addEventListener('click', e => {
    
    e.preventDefault();


    cabecalho_menu.classList.toggle("ts")

})