class FormSender {
    constructor(event, props = {}) {
        this.event = event;
    }

    sendForm = async () => {
        this.event.preventDefault();
        const formData = new FormData(this.event.target);

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
    }
}

export default FormSender;
