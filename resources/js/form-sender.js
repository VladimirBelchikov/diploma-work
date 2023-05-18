class FormSender {
    // Пропсы могут понадобиться, если нужны будут доп. параметры или проверки
    // Валидацию здесь лучше не делать и вынести её во внешние модули, иначе sender будет переполнен условиями
    constructor(event, props = {}) {
        this.event = event;
    }

    sendForm = async () => {
        this.event.preventDefault();
        const formData = new FormData(this.event.target);

        // Никакой обработки ответов нет, может быть нужно дописать в будущем
        const response = await fetch('api/order/create', {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
            mode: 'same-origin',
            body: formData,
        })

        const data = await response.json()

        if (data.success) return true
            // .then((response) => response.json())
            // .then((data) => {
            //     data.success ? console.log('Form has been sent') : console.log('Form send error');
            // })
            // .catch((err) => console.log(err));
    }
}

export default FormSender;
