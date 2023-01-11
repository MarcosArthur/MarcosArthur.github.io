let cabecalho_menu_button = document.querySelector(".cabecalho-menu-button")
let cabecalho_menu = document.querySelector(".cabecalho__menu")
let job_item_button = document.querySelectorAll(".job-item-button")

cabecalho_menu_button.addEventListener("click", e => {
    e.preventDefault();

    cabecalho_menu_button.classList.toggle("rotate-button")
    cabecalho_menu.classList.toggle("open-menu")

})


job_item_button.forEach(e => {
    e.addEventListener('click', event => {
        removeClass(".job-item-button")
        removeClass(".job-card")
        event.preventDefault()
        let company = document.querySelector(e.dataset.company)
        company.classList.add('active')
        e.classList.add('active')
    })
})

function removeClass(className) {
    let job_item_button = document.querySelectorAll(className)
    job_item_button.forEach(e => {
        e.classList.remove("active")
    })
}