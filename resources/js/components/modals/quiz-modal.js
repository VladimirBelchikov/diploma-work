import Swiper from "swiper";

function init() {
    const quiz = document.querySelector('.quiz-modal')

    if (!quiz) return

    const questionsObj = {
        mk: [
            { question: 'Какой кабинет вам нужен?', answers: ['Выставочный', 'Учебный', 'Мастерская'] },
            { question: 'На какой срок?', answers: ['Один день', 'Неделя-месяц', 'Необходимо больше'] },
            { question: 'Наступи на лицо', answers: ['Да', 'Нет', 'не знаю'] }
        ],
        phsession: [{ question: '', answers: '' }, { question: '', answers: '' }, { question: '', answers: '' }],
        couch: [{ question: '', answers: '' }, { question: '', answers: '' }, { question: '', answers: '' }]
    }

    const triggers = document.querySelectorAll('[data-js=open-quiz-modal]')
    const closeButton = quiz.querySelector('.quiz-modal__close')
    const swiperContainer = quiz.querySelector('.quiz-modal__swiper')
    const swiperWrapper = quiz.querySelector('.quiz-modal__swiper > .swiper-wrapper')

    function handleCloseModal(event) {
        if (event.target === quiz) closeModal()
    }

    function closeModal() {
        quiz.style.display = 'none'
        document.body.style.paddingRight = ''
        document.body.style.overflowY = ''

        document.removeEventListener('click', handleCloseModal)
    }

    function showModal(event) {
        event.stopPropagation()

        quiz.style.display = 'flex'
        document.body.style.paddingRight = '17px'
        document.body.style.overflowY = 'hidden'

        document.addEventListener('click', handleCloseModal)
    }

    const swiper = new Swiper(swiperContainer)

    function createSlide(item) {
        const answers = item.answers
            .map(ans => `<button class="button quiz-modal__slide-button">${ ans }</button>`)
            .join('')

        return `
                <div class="swiper-slide">
                    <p class="quiz-modal__slide-title">${ item.question }</p>
                    <div class="quiz-modal__slide-answers">
                        ${ answers }
                    </div>
                </div>
            `
    }

    function handleClick() {
        swiper.slideNext()
    }

    function saveMsg() {

    }

    quiz.querySelectorAll('[data-quiz-ans]').forEach(button => {
        button.addEventListener('click', ({ target }) => {
            const ansArr = questionsObj[target.dataset.quizAns]
            ansArr.forEach(item => {
                swiperWrapper.insertAdjacentHTML('beforeend', createSlide(item))
            })
            swiper.update()
            swiper.slideNext()
            quiz.querySelectorAll('.quiz-modal__slide-button').forEach(button => {
                button.addEventListener('click', handleClick)
            })
        })
    })

    triggers.forEach(trigger => {
        trigger.addEventListener('click', showModal)
    })
    closeButton.addEventListener('click', closeModal)
}

document.addEventListener('DOMContentLoaded', init)
