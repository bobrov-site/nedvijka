<script setup>
const comfortsList = [
    'Кондиционер',
    'Фен',
    'Косметический ремонт',
    'Телевизор',
    'Электрический чайник',
]
defineProps({
    isEditable: {
        type: Boolean,
    }   
})
</script>

<template>
    <div class="apartmentModal modal fade" id="apartmentModal" tabindex="-1" aria-labelledby="apartmentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="apartmentModalLabel">Подробная информация о квартире</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Название:</h2>
                        <p class="modal-text">Название квартиры</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Описание:</h2>
                        <p class="modal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos
                            ex praesentium harum sequi dicta vel consectetur cum accusamus iusto quas molestiae libero,
                            vitae odio in ipsum eveniet ratione quisquam!</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Изображения:</h2>
                        <div class="row apartments-modal-images g-3">
                            <div class="col-4">
                                <NuxtImg class="apartments-modal-img" src="/images/apartment_1.jpg" alt="Квартира"
                                    sizes="md:900px" />
                            </div>
                            <div class="col-4">
                                <NuxtImg class="apartments-modal-img" src="/images/apartment_2.jpg" alt="Квартира"
                                    sizes="md:900px" />
                            </div>
                            <div class="col-4">
                                <NuxtImg class="apartments-modal-img" src="/images/apartment_3.jpg" alt="Квартира"
                                    sizes="md:900px" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Количество комнат:</h2>
                        <p class="modal-text">2</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Количество кроватей:</h2>
                        <p class="modal-text">2</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Количество квадратов:</h2>
                        <p class="modal-text">42 кв.м</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Максимальное количество гостей:</h2>
                        <p class="modal-text">4</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Город:</h2>
                        <p class="modal-text">Ставрополь</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Адрес:</h2>
                        <p class="modal-text">Рогожникова 7</p>
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Удобства:</h2>
                        <ApartmentComfortsList :comfortsList="comfortsList" />
                    </div>
                    <div class="mb-2">
                        <h2 class="modal-title fs-4">Цена сутки:</h2>
                        <p class="modal-text">2 033₽</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>