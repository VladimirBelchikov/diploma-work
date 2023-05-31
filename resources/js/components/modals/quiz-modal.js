import Swiper from "swiper";

function init() {
    const quiz = document.querySelector('.quiz-modal')

    if (!quiz) return

    const questionsObj = {
        mk: [
            {
                question: 'Какой кабинет вам нужен?', answers: ['Выставочный', 'Учебный', 'Мастерская']
            },
            {
                question: 'На какой срок?',
                answers: ['Один день', 'Неделя-месяц', 'От 1 до 6 месяцев', 'Более 6 месяцев']
            },
            {
                question: 'Что нужно из дополнительного оборудования?', answers: ['Подиумы', 'Софиты', 'Не нужно']
            }
        ],
        phsession: [
            {
                question: 'Какая студия вам нужна?', answers: ['Светлая', 'Темная', 'Бежевая']
            },
            {
                question: 'На какой срок вам нужна студия?',
                answers: ['Час', 'Два часа', 'Три часа', 'Более трех часов']
            },
            {
                question: 'Что нужно из дополнительного оборудования?',
                answers: ['Подиумы', 'Софиты', 'Декорации', 'Не нужно']
            }
        ],
        couch: [
            {question: 'Вопрос 1', answers: ['Ответ1', 'ответ 2', 'ответ 3']},
            {question: 'Вопрос 2', answers: ['ответ 1', 'ответ2', 'ответ 3']},
            {question: 'Вопрос 3', answers: ['ответ 1', 'ответ 2', 'ответ3']}
        ]
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

    const swiper = new Swiper(swiperContainer, {
        allowTouchMove: false,
    })

    function createSlide(item) {
        const answers = item.answers
            .map(ans => `<label class="button quiz-modal__slide-button" data-js="next-slide">
                                <input type="radio" value="${ ans }">
                                    ${ ans }
                            </label>`)
            .join('')

        return `
                <div class="swiper-slide" data-js="quiz-question">
                    <p class="quiz-modal__slide-title">${ item.question }</p>
                    <div class="quiz-modal__slide-answers">
                        ${ answers }
                    </div>
                </div>
            `
    }

    function createLastSlide() {
        const lastSlide = `<div class="swiper-slide">
                    <p class="quiz-modal__slide-title">Заполните форму</p>
                    <form action="" class="form quiz-form">
                        <input type="hidden" class="form-control" name="type" value="">
                        <input type="hidden" class="form-control" name="note" value="">
                        <input type="text" class="form-control" name="name" placeholder="Имя">
                        <input type="tel" class="form-control" name="phone" placeholder="Телефон" required>
                        <button type="submit" class="button">Отправить</button>
                    </form>
                </div>`
        swiperWrapper.insertAdjacentHTML('beforeend', lastSlide)
        swiper.update()
    }

    function handleClick() {
        swiper.slideNext()
    }

    function getInterview() {
        let leadMessage = ''
        const cards = swiperContainer.querySelectorAll('[data-js=quiz-question]')
        cards.forEach((card) => {
            const questionText = card.querySelector('.quiz-modal__slide-title').textContent
            const answer = card.querySelector('input[type=radio]:checked').value

            leadMessage += `Вопрос: ${ questionText }\nОтвет: ${ answer }\n\n`
        });
        return leadMessage
    }

    quiz.querySelectorAll('[data-quiz-ans]').forEach(button => {
        button.addEventListener('click', (event) => {
            const ansArr = questionsObj[event.target.dataset.quizAns]
            ansArr.forEach(item => {
                swiperWrapper.insertAdjacentHTML('beforeend', createSlide(item))
            })
            swiper.update()
            swiper.slideNext()
            quiz.querySelectorAll('[data-js=next-slide]').forEach(button => {
                button.addEventListener('click', (event) => {
                    handleClick()
                    if (swiper.isEnd) {
                        createLastSlide()
                        postForm()
                    }
                }, {once: true})
            })
        }, {once: true})
    })


    function postForm() {
        const quizForm = document.querySelector('.quiz-form')
        quizForm?.addEventListener('submit', (event) => {
            event.preventDefault()
            quizForm.querySelector('input[name=type]').value = swiperContainer.querySelector('[data-quiz-ans]:checked').value
            quizForm.querySelector('input[name=note]').value = getInterview()
        })
    }


    triggers.forEach(trigger => {
        trigger.addEventListener('click', showModal)
    })
    closeButton.addEventListener('click', closeModal)
}

document.addEventListener('DOMContentLoaded', init)
