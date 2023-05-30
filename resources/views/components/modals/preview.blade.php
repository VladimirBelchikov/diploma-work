<div id="preview-modal"
     class="modal fade preview-modal"
     tabindex="-1"
     aria-labelledby="preview-modalLabel"
     aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="swiper preview-modal__swiper">
                    <div class="swiper-wrapper">
                        {{-- insert slides via dataset --}}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>

                <div class="preview-modal__text-container">
                    <h5 class="modal-title preview-modal__title" id="preview-modalLabel">
                        {{-- insert title via dataset --}}
                    </h5>
                    <div class="preview-modal__description">
                        {{-- insert text content via dataset --}}
                    </div>
                </div>
                <form class="form order-form">
                    @csrf
                    <input type="hidden" name="type" value="">
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
                <button type="button"
                        class="button preview-modal__button"
                        data-bs-target="#callback-modal"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                >
                    Оставить заявку
                </button>
            </div>
        </div>
    </div>
</div>
