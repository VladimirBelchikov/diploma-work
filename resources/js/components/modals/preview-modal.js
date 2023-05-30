import Swiper, { Navigation } from "swiper";
import data from "inputmask/lib/dependencyLibs/data";

function init() {
    const modal = document.querySelector('#preview-modal')

    if (!modal) return

    const title = modal.querySelector('.preview-modal__title')
    const description = modal.querySelector('.preview-modal__description')
    const swiperContainer = modal.querySelector('.preview-modal__swiper')
    const swiperWrapper = modal.querySelector('.swiper-wrapper')
    const typeInput = modal.querySelector('[name=type]')

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        modules: [Navigation],
    })

    modal.addEventListener('show.bs.modal', ({ relatedTarget }) => {
        const { dataset } = relatedTarget
        if (dataset.title) title.textContent = dataset.title
        if (dataset.description) description.innerHTML = dataset.description
        if (dataset.type) typeInput.value = dataset.type
        if (dataset.images) {
            const images = dataset.images.split('&')
            images.forEach((image) => {
                console.log(image)
                swiperWrapper.insertAdjacentHTML(
                    'beforeend',
                    `<div class="swiper-slide">
                              <img class="preview-modal__img" src="${ image }" alt="">
                          </div>`
                )
            })
        }
    })


    modal.addEventListener('hide.bs.modal', () => {
        title.textContent = ''
        description.innerHTML = ''
        swiperWrapper.innerHTML = ''
        typeInput.value = ''
    })
}

document.addEventListener('DOMContentLoaded', init)
