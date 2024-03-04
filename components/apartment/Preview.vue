<template>
    <div class="card">
        <div class="row">
            <div class="col-12" :class="{ 'col-md-6': isVerticalLayout }">
                <!-- TODO для каждого слайдера свой айди -->
                <div ref="sliderContainer" id="sliderApartmentPreview" class="sliderapartmentPreview carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#sliderapartmentPreview" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#sliderapartmentPreview" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#sliderapartmentPreview" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <NuxtImg src="/images/apartment_1.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                        <div class="carousel-item">
                            <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                        <div class="carousel-item">
                            <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                    </div>
                    <div class="carousel-split position-absolute w-100 h-100 top-0 d-flex">
                        <div @mouseover="toggleSlide(index)" v-for="(col, index) in 3" :key="index" class="col h-100"></div>
                    </div>
                </div>
            </div>
            <div class="col-12" :class="{ 'col-md-6 d-flex align-items-center': isVerticalLayout, }">
                <div class="card-body">
                    <h5 class="card-title">{{ props.name }}</h5>
                    <!-- кол-во человек, колво-кроватей, квадратура -->
                    <div class="d-flex flex-wrap mb-2">
                        <div>
                            <span class="badge rounded-pill text-bg-light">{{ props.maxGuests }} гостя</span>
                        </div>
                        <div>
                            <span class="badge rounded-pill text-bg-light">{{ roomsCount }} комнаты</span>
                        </div>
                        <!-- TODO выяснить за кровать -->
                        <div>
                            <span class="badge rounded-pill text-bg-light">1 кровать</span>
                        </div>
                        <!-- TODO добавить количество квадратов -->
                        <!-- <div>
                            <span class="badge rounded-pill text-bg-light">32 кв.м</span>
                        </div> -->
                    </div>
                    <p class="card-text mb-2">{{ props.city }}, {{ props.address }}</p>
                    <div>
                        <a href="#" class="btn btn-primary">{{props.price}}₽ за сутки</a>
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
    isAuth: {
        type: Boolean,
        default: false,
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
    }
})

const sliderContainer = ref(null)
const carousel = ref(null)
onMounted(() => {
    carousel.value = new $bootstrap.Carousel(sliderContainer.value)
})

const toggleSlide = (index) => {
    carousel.value.to(index);
}
</script>

<style lang="scss" scoped></style>