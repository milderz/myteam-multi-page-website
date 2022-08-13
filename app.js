const switchCardBtn = document.querySelectorAll('.directors__btn')

const menuBtn = document.querySelector('.header__menu-btn')
const navBar = document.querySelector('.header__nav')
const menuIcon = document.querySelector('.header__menu-icon')
const elementsApplyFilter = document.querySelectorAll('.filter-el')


menuIcon.classList.add('fa-solid')
menuIcon.classList.add('fa-bars')


switchCardBtn.forEach(btn => {
    btn.addEventListener('click',  () => {
        const card = btn.parentElement

        card.classList.toggle('card-change-state')
       

    })
})
// directorsCard.classList.toggle('card-change-state')

ScrollReveal().reveal('.reveal-4s', { delay: 400, viewFactor: 1, reset: false })
ScrollReveal().reveal('.reveal-6s', { delay: 600, viewFactor: 1, reset: false })
ScrollReveal().reveal('.reveal-8s', { delay: 800, viewFactor: 1, reset: false })

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('nav--active')

        menuIcon.classList.toggle('fa-xmark')

        elementsApplyFilter.forEach(el => {
            el.classList.toggle('filter-el--active')
        })
})