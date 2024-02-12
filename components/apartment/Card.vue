<script setup>

const map = shallowRef(null)
const thumbsSwiper = ref(null);
const icon = ref(['far', 'heart'])
const settings = {
    location: {
        center: [37.617644, 55.755819],
        zoom: 9,
    },
}

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const changeIcon = (isHover) => {
    if (isHover) {
        icon.value = ['fas', 'heart']
    }
    else {
        icon.value = ['far', 'heart']
    }
}
</script>
<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h1>Название квартиры</h1>
                <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Добавить в избранное"> 
                    <FontAwesomeIcon @mouseover="changeIcon(true)" @mouseleave="changeIcon(false)" class="text-danger fs-2" :icon="icon" />
                </button>
                
            </div>
            <Swiper :navigation="true" :modules="[SwiperNavigation, SwiperThumbs, SwiperFreeMode, SwiperZoom]"
                :thumbs="{ swiper: thumbsSwiper }" class="swiper-slider" :autoHeight="true" :zoom="true">
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_1.jpg" alt="Квартира" class="w-100 img-fluid rounded" sizes="md:600px" />
                </SwiperSlide>
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="w-100 img-fluid rounded" sizes="md:600px" />
                </SwiperSlide>
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="w-100 img-fluid rounded" sizes="md:600px" />
                </SwiperSlide>
            </Swiper>
            <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSlidesProgress="true" class="swiper-slider-thumbs mt-2" :autoHeight="true">
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_1.jpg" alt="Квартира"
                        class="img-slider-thumb img-fluid w-100 rounded border-2" sizes="md:300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="img-slider-thumb img-fluid w-100 rounded"
                        sizes="md:300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="img-slider-thumb img-fluid w-100 rounded"
                        sizes="md:300px" />
                </SwiperSlide>
            </Swiper>
            <hr>
            <h2>О квартире:</h2>
            <div class="d-flex mb-2">
                <span class="badge rounded-pill text-bg-light me-2">2 гостя</span>
                <span class="badge rounded-pill text-bg-light me-2">1 кровать</span>
                <span class="badge rounded-pill text-bg-light me-2">32 кв.м</span>
            </div>
            <p class="card-text">
                Описание квартиры для CEO
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolore praesentium deleniti culpa
                illo sapiente. Pariatur sit possimus illo inventore debitis porro aspernatur labore, molestiae
                laudantium deleniti, incidunt tenetur rerum!
            </p>
            <hr>
            <h2>Удобства:</h2>
            <ul class="list-group max-w-100 comforts-list">
                <li class="list-group-item d-flex align-items-center justify-content-between">
                    <span>Кондиционер</span>
                    <FontAwesomeIcon class="square-check-icon" :icon="['far', 'square-check']" />
                </li>
                <li class="list-group-item d-flex align-items-center justify-content-between">
                    <span>Фен</span>
                    <FontAwesomeIcon class="square-check-icon" :icon="['far', 'square-check']" />
                </li>
                <li class="list-group-item d-flex align-items-center justify-content-between">
                    <span>Косметический ремонт</span>
                    <FontAwesomeIcon class="square-check-icon" :icon="['far', 'square-check']" />
                </li>
                <li class="list-group-item d-flex align-items-center justify-content-between">
                    <span>Телевизор</span>
                    <FontAwesomeIcon class="square-check-icon" :icon="['far', 'square-check']" />
                </li>
                <li class="list-group-item d-flex align-items-center justify-content-between">
                    <span>Электрический чайник</span>
                    <FontAwesomeIcon class="square-check-icon" :icon="['far', 'square-check']" />
                </li>
            </ul>
            <hr>
            <h2>Расположение:</h2>
            <p class="card-text">
                Адрес: Ставрополь, Рогожникова 7
            </p>
            <div>
                <YandexMap v-model="map" :settings="settings" height="320px">
                    <YandexMapDefaultSchemeLayer />
                </YandexMap>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>