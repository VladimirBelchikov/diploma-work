import Swiper, { Navigation } from 'swiper'

function init() {
    const container = document.querySelector('.homeAbout__swiper')
    if (!container) return

    const swiper = new Swiper(container, {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        modules: [Navigation]
    })
}

document.addEventListener('DOMContentLoaded', init)
