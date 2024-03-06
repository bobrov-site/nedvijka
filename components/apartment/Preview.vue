<template>
    <div class="card h-100">
        <div class="row">
            <div class="col-12" :class="{ 'col-md-6': isVerticalLayout }">
                <!-- TODO для каждого слайдера свой айди -->
                <div v-if="props.photos.length !== 0" ref="sliderContainer" :id="`sliderApartmentPreview${props.id}`" class="sliderApartmentPreview carousel slide">
                    <div class="carousel-indicators">
                        <button 
                        v-for="(photo, index) in props.photos" 
                        :key="index" 
                        type="button" 
                        :data-bs-target="`#sliderApartmentPreview${props.id}`"
                        :data-bs-slide-to="index"
                        :aria-current="index === 0"
                        :aria-label="`Slide ${index + 1}`"
                        :class="{ 'active': index === 0 }"
                        >
                        </button>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="(photo, index) in props.photos" :class="{ 'active': index === 0 }" class="carousel-item">
                            <NuxtImg :src="photo.thumb" :alt="`Комната ${index + 1}`" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                    </div>
                    <div class="carousel-split position-absolute w-100 h-100 top-0 d-flex">
                        <div @mouseover="toggleSlide(index)" v-for="(photo, index) in props.photos" :key="index" class="col h-100"></div>
                    </div>
                </div>
                <div v-else class="slider-no-photo d-flex align-items-center justify-content-center bg-secondary text-white">
                    <span class="fs-3">Фотографий нет</span>
                </div>
            </div>
            <div class="col-12" :class="{ 'col-md-6 d-flex align-items-center': isVerticalLayout,}">
                <div class="card-body">
                    <h5 class="card-title">{{ props.name }}</h5>
                    <!-- кол-во человек, колво-кроватей, квадратура -->
                    <div class="d-flex flex-wrap mb-2">
                        <div>
                            <span class="badge rounded-pill text-bg-light">{{ props.maxGuests }} гостя</span>
                        </div>
                        <div>
                            <span class="badge rounded-pill text-bg-light">{{ props.roomsCount }} комнаты</span>
                        </div>
                        <!-- TODO добавить количество кроватей -->                
                        <!-- TODO добавить количество квадратов -->
                    </div>
                    <p class="card-text mb-2">{{ props.city }}, {{ props.address }}</p>
                    <div>
                        <NuxtLink class="btn btn-primary" :to="`/apartments/${props.id}`">{{props.price}}₽ за сутки</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const props = defineProps({
    name: {
        type: String,
        default: 'Название квартиры'
    },
    address: {
        type: String,
        default: 'Адрес квартиры'
    },
    city: {
        type: String,
        default: 'Город'
    },
    maxGuests: {
        type: Number,
        default: 1
    },
    isVerticalLayout: {
        type: Boolean,
        default: false
    },
    adults: {
        type: Number,
        default: 1
    },
    children: {
        type: Number,
        default: 0
    },
    roomsCount: {
        type: Number,
        default: 1
    },
    bedsCount: {
        type: Number,
        default: 1,
    },
    price: {
        type: String,
        default: '2 099'
    },
    id: {
        type: String,
    },
    photos: {
        type: Array
    }
})

const sliderContainer = ref(null)
const carousel = ref(null)
const setCarousel = () => {
    if (props.photos.length === 0) {
        return
    }
    carousel.value = new $bootstrap.Carousel(sliderContainer.value)

}
onMounted(() => {
    setCarousel();
})

const toggleSlide = (index) => {
    carousel.value.to(index);
}
</script>

<style lang="scss" scoped></style>