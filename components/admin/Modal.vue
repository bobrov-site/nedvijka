<script setup>

const isEditable = ref(false)
const cities = ref([
    'Ставрополь',
    'Ростов',
    'Москва',
    'Санкт-Петербург'
])
const apartment = ref({
    name: 'Название квартиры',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos ex praesentium harum sequi dicta vel consectetur cum accusamus iusto quas molestiae libero, vitae odio in ipsum eveniet ratione quisquam!',
    images: [
        '/images/apartment_1.jpg',
        '/images/apartment_2.jpg',
        '/images/apartment_3.jpg'
    ],
    countRooms: 2,
    countBeds: 2,
    countSquare: 42,
    maxGuests: 4,
    city: 'Ставрополь',
    address: 'Рогожникова 7',
    comfortsList: [
        'Кондиционер',
        'Фен',
        'Косметический ремонт',
        'Телевизор',
        'Электрический чайник',
    ],
    priceDay: 2033,
});
const edit = () => {
    if (isEditable.value) {
        isEditable.value = false;
        return
    }
    isEditable.value = true
}

const onFileChange = (event) => {
    const files = event.target.files;
    if (files) {
        const filesArray = Array.from(files);
        filesArray.forEach((file) => {
            const imageUrl = URL.createObjectURL(file);
            apartment.value.images.push(imageUrl);
        });
    }
}

const removeImage = (index) => {
    const images = apartment.value.images.filter((_, i) => i !== index)
    apartment.value.images = images
}

const updateComfortsList = (event, index) => {
    apartment.value.comfortsList[index] = event.target.value
}

const addComfort = () => {
    apartment.value.comfortsList.push('');
}

const removeComfort = (index) => {
    const comfortsList = apartment.value.comfortsList.filter((_, i) => i !== index)
    apartment.value.comfortsList = comfortsList
}
</script>

<template>
    <div class="apartmentModal modal fade" tabindex="-1" aria-labelledby="apartmentModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="apartmentModalLabel">Подробная информация о квартире</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="!isEditable">
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Название:</h2>
                            <p class="modal-text">{{ apartment.name }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Описание:</h2>
                            <p class="modal-text">{{ apartment.description }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Изображения:</h2>
                            <div class="row apartments-modal-images g-3">
                                <div v-for="(image, index) in apartment.images" :key="index" class="col-4">
                                    <NuxtImg class="apartments-modal-img" :src="image" alt="Квартира" sizes="md:900px" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Количество комнат:</h2>
                            <p class="modal-text">{{ apartment.countRooms }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Количество кроватей:</h2>
                            <p class="modal-text">{{ apartment.countBeds }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Количество квадратов:</h2>
                            <p class="modal-text">{{ apartment.countSquare }} кв.м</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Максимальное количество гостей:</h2>
                            <p class="modal-text">{{ apartment.maxGuests }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Город:</h2>
                            <p class="modal-text">{{ apartment.city }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Адрес:</h2>
                            <p class="modal-text">{{ apartment.address }}</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Удобства:</h2>
                            <ApartmentComfortsList :comfortsList="apartment.comfortsList" />
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Цена сутки:</h2>
                            <p class="modal-text">{{ apartment.priceDay }}₽</p>

                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Пользователь:</h2>
                            <p class="modal-text">Иван Иванов</p>
                        </div>
                        <div class="mb-2">
                            <h2 class="modal-title fs-4">Id пользователя:</h2>
                            <p class="modal-text">1</p>
                        </div>
                    </div>
                    <UiFormEdit v-if="isEditable" :apartment="apartment" />
                </div>
                <div class="modal-footer">
                    {{ isEditable }}
                    <button v-if="!isEditable" @click="edit" type="button" class="btn btn-primary">Редактировать</button>
                    <button v-else @click="edit" type="button" class="btn btn-success">Сохранить</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>