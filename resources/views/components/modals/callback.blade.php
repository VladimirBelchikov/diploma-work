<div class="modal fade callback-modal"
     id="callback-modal"
     tabindex="-1"
     aria-labelledby="callback-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="callback-modalLabel">Заявка на обратный звонок</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="form order-form">
                    @csrf
                    <div class="mb-3">
                        <label class="form-label w-100">
                            Ваше имя
                            <input type="text"
                                   name="name"
                                   class="form-control"
                                   placeholder="name@example.com"
                            >
                        </label>
                    </div>
                    <div class="mb-3">
                        <label class="form-label w-100">
                            <span>Ваш номер телефона</span>
                            <input class="form-control"
                                   name="phone"
                                   type="tel"
                                   placeholder="+7 (000) 000-00-00"
                                   required
                            >
                        </label>
                    </div>
                    <button type="submit" class="button">Отправить</button>
                </form>
            </div>

        </div>
    </div>
</div>
