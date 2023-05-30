import Swiper from "swiper";

function init() {
    const quiz = document.querySelector('.quiz-modal')

    if (!quiz) return

    const questionsObj = {
        mk: [
            { question: 'Какой кабинет вам нужен?', answers: ['Выставочный', 'Учебный', 'Мастерская'] },
            { question: 'На какой срок?', answers: ['Один день', 'Неделя-месяц', 'От 1 до 6 месяцев', 'Более 6 месяцев'] },
            { question: 'Что нужно из дополнительного оборудования?', answers: ['Подиумы', 'Софиты', 'Не нужно'] }
        ],
        phsession: [
            { question: 'Какая студия вам нужна?', answers: ['Светлая', 'Темная', 'Бежевая'] },
            { question: 'На какой срок вам нужна студия?', answers: ['Час', 'Два часа', 'Три часа', 'Более трех часов'] },
            { question: 'Что нужно из дополнительного оборудования?', answers: ['Подиумы', 'Софиты', 'Декорации', 'Не нужно'] }
        ],
        couch: [
            { question: 'Вопрос 1', answers: ['Ответ1', 'ответ 2', 'ответ 3'] },
            { question: 'Вопрос 2', answers: ['ответ 1', 'ответ2', 'ответ 3'] },
            { question: 'Вопрос 3', answers: ['ответ 1', 'ответ 2', 'ответ3'] }]
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
            .map(ans => `<label class="button quiz-modal__slide-button">
                                <input type="radio" value="${ ans }">
                                    ${ ans }
                            </label>`)
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

    function getInterview() {
        let leadMessage = '';
        const cards = swiperContainer.querySelectorAll('.quiz-modal__slide');
        cards.forEach((card) => {
            const questionText = card.querySelector('.quiz-modal__slide-title').textContent;
            const answer = card.querySelector('input[type="radio"]:checked').value;
            leadMessage += `Вопрос: ${questionText}\nОтвет: ${answer}\n\n`;
        });
        return leadMessage;
    }

    quiz.querySelectorAll('[data-quiz-ans]').forEach(button => {
        button.addEventListener('click', (event) => {
            const ansArr = questionsObj[event.target.dataset.quizAns]
            console.log(ansArr)
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
