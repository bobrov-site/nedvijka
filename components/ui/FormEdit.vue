<template>
    <form class="form-edit">
        <div class="mb-2">
            <label for="name" class="form-label">Название</label>
            <input v-model="props.apartment.name" id="name" type="text" class="form-control"
                placeholder="введите название квартиры">
        </div>
        <div class="mb-2">
            <label for="description" class="form-label">Описание</label>
            <textarea v-model="props.apartment.description" class="form-control" id="description" rows="10"></textarea>
        </div>
        <div class="mb-2">
            <label for="images" class="form-label">Изображения</label>
            <div class="row apartments-modal-images g-3 mb-2">
                <div v-for="(image, index) in props.apartment.images" :key="index" class="col-2">
                    <div class="position-relative">
                        <NuxtImg class="apartments-modal-img-preview" :src="image" alt="Квартира" sizes="md:300px" />
                        <button @click="removeImage(index)" type="button"
                            class="btn-close position-absolute top-0 end-0"></button>
                    </div>
                </div>
            </div>
            <input @change="onFileChange($event)" class="form-control" type="file" id="images" multiple>
        </div>
        <div class="mb-2">
            <label for="countRooms" class="form-label">Количество комнат</label>
            <input v-model="props.apartment.countRooms" id="countRooms" type="text" class="form-control"
                placeholder="введите количество комнтат">
        </div>
        <div class="mb-2">
            <label for="countBeds" class="form-label">Количество кроватей</label>
            <input v-model="props.apartment.countBeds" id="countBeds" type="text" class="form-control"
                placeholder="введите количество кроватей">
        </div>
        <div class="mb-2">
            <label for="countSquare" class="form-label">Количество квадратов</label>
            <input v-model="props.apartment.countSquare" id="countSquare" type="text" class="form-control"
                placeholder="введите количество квадратов">
        </div>
        <div class="mb-2">
            <label for="maxGuests" class="form-label">Максимальное количество гостей</label>
            <input v-model="props.apartment.maxGuests" id="maxGuests" type="text" class="form-control"
                placeholder="введите максимальное количество гостей">
        </div>
        <div class="mb-2">
            <label for="city" class="form-label">Город</label>
            <select v-model="props.apartment.city" class="form-select" aria-label="Default select example">
                <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
            </select>
        </div>
        <div class="mb-2">
            <label for="address" class="form-label">Адрес:</label>
            <input v-model="props.apartment.address" id="address" type="text" class="form-control" placeholder="введите адрес">
        </div>
        <div class="mb-2">
            <label for="comfortsList" class="form-label">Удобства</label>
            <div v-for="(comfort, index) in props.apartment.comfortsList" :key="index" class="mb-2 d-flex">
                <input @input="updateComfortsList($event, index)" v-model="props.apartment.comfortsList[index]" id="comfortsList"
                    type="text" class="form-control comforts-list-input me-2">
                <button @click="removeComfort(index)" type="button" class="btn btn-outline-danger">
                    <FontAwesomeIcon :icon="['fas', 'trash-can']" />
                </button>
            </div>
            <button @click="addComfort" type="button" class="btn btn-outline-primary">
                <FontAwesomeIcon :icon="['fas', 'fa-plus']" />
            </button>
        </div>
        <div class="mb-2">
            <label for="priceDay" class="form-label">Цена сутки в рублях</label>
            <input v-model="props.apartment.priceDay" id="priceDay" type="text" class="form-control" />
        </div>
    </form>
</template>

<script setup>
const props = defineProps({
    apartment: {
        type: Object
    }
})
const isEditable = ref(false)
const cities = ref([
    'Ставрополь',
    'Ростов',
    'Москва',
    'Санкт-Петербург'
])

const onFileChange = (event) => {
    const files = event.target.files;
    if (files) {
        const filesArray = Array.from(files);
        filesArray.forEach((file) => {
            const imageUrl = URL.createObjectURL(file);
            props.apartment.images.push(imageUrl);
        });
    }
}

const removeImage = (index) => {
    const images = props.apartment.images.filter((_, i) => i !== index)
    props.apartment.images = images
}

const updateComfortsList = (event, index) => {
    props.apartment.comfortsList[index] = event.target.value
}

const addComfort = () => {
    props.apartment.comfortsList.push('');
}

const removeComfort = (index) => {
    const comfortsList = props.apartment.comfortsList.filter((_, i) => i !== index)
    props.apartment.comfortsList = comfortsList
}
</script>

<style lang="scss" scoped></style>