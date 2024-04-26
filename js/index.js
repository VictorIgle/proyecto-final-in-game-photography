'use strict'

const menuButton = document.querySelector('.Header-btn')
const nav = document.querySelector('.Header-nav')

menuButton.addEventListener(`click` , ()=>
    nav.classList.toggle('isActive')
)