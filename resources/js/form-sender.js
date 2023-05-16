class FormSender {
    // Пропсы могут понадобиться, если нужны будут доп. параметры или проверки
    // Валидацию здесь лучше не делать и вынести её во внешние модули, иначе sender будет переполнен условиями
    constructor(event, props = {}) {
        this.event = event;
        this.sendForm();
    }

    sendForm = () => {
        this.event.preventDefault();
        const formData = new FormData(this.event.target);

        // Никакой обработки ответов нет, может быть нужно дописать в будущем
        fetch('api/order/create', {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
            mode: 'same-origin',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                data.success ? console.log('Form has been sent') : console.log('Form send error');
            })
            .catch((err) => console.log(err));
    }
}

export default FormSender;
