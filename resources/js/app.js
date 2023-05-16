import './bootstrap';
import 'bootstrap'
import Inputmask from "inputmask";
import FormSender from "./form-sender";
import './components/sliders/home-about-swiper';
import './components/sliders/home-card-swiper'
import { validatePhone } from "./helpers";

Inputmask({ "mask": "+7 (999) 999-99-99" }).mask('[name=phone]');

document.querySelectorAll('.order-form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const { target } = event

        if (!validatePhone(target.querySelector('input[name=phone]').value)) return

        const submitButton = target.querySelector('button[type=submit]')
        submitButton.setAttribute('disabled', 'true')
        submitButton.textContent = 'Подождите...'

        new FormSender(event)
    })
})
