import Swiper, { Navigation } from 'swiper'

function init() {
    if (!document.querySelector('.cardSwiper')) return;

    const swiper = new Swiper('.cardSwiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            575.98: {
                slidesPerView: 2,
            },
            991.98: {
                slidesPerView: 3,
            }
        },
        modules: [Navigation]
    })
}

document.addEventListener('DOMContentLoaded', init)
