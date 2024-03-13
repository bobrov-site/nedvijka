<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker } from 'vue-yandex-maps';
const props = defineProps({
    name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    maxGuests: {
        type: Number
    },
    photos: {
        type: Array
    },
    roomsCount: {
        type: Number,
        default: 1,
    },
    description: {
        type: String,
    },
    comfortsList: {
        type: Array,
    },
    geoData: {
        type: Object
    }
})
const map = shallowRef(null)
const thumbsSwiper = ref(null);

const iconHeart = ref(['far', 'heart'])
const iconCopy = ref(['far', 'copy'])
// const comfortsList = [
//     'Кондиционер',
//     'Фен',
//     'Косметический ремонт',
//     'Телевизор',
//     'Электрический чайник',
// ]
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const getHtmlDescription = () => {
    const splitDescription = props.description.split('\n')
    return splitDescription;
}

const isGeoDataExist = () => {
    if (props.geoData && props.geoData.x !== 0 && props.geoData.y !== 0) {
        return true
    }
    return false
}
const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
}
</script>
<template>
    <div class="apartment-card card">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h1>{{ props.name }}</h1>
                <button @click="copyLink" type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Скопировать ссылку">
                    <FontAwesomeIcon @mouseover="iconCopy = ['fas', 'copy']" @mouseleave="iconCopy = ['far', 'copy']" class="text-primary fs-3" :icon="iconCopy" />
                </button>
                <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Добавить в избранное"> 
                    <FontAwesomeIcon @mouseover="iconHeart = ['fas', 'heart']" @mouseleave="iconHeart = ['far', 'heart']" class="text-danger fs-3" :icon="iconHeart" />
                </button>
            </div>
            <Swiper :navigation="true" :modules="[SwiperNavigation, SwiperThumbs, SwiperFreeMode, SwiperZoom]"
                :thumbs="{ swiper: thumbsSwiper }" class="swiper-slider" :autoHeight="true" :zoom="true">
                <SwiperSlide v-for="(photo, index) in props.photos" :key="index">
                    <NuxtImg :src="photo.url" :alt="`Комната ${index + 1}`" class="swiper-slide-img w-100 img-fluid rounded" sizes="md:600px" />
                </SwiperSlide>
            </Swiper>
            <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSlidesProgress="true" class="swiper-slider-thumbs mt-2" :autoHeight="true">
                <SwiperSlide v-for="(photo, index) in props.photos" :key="index">
                    <NuxtImg :src="photo.thumb" :alt="`Превью комнаты ${index + 1}`"
                        class="img-slider-thumb img-fluid w-100 rounded border-2" sizes="md:300px" />
                </SwiperSlide>
            </Swiper>
            <hr>
            <h2>О квартире:</h2>
            <div class="d-flex mb-2">
                <span class="badge rounded-pill text-bg-light me-2">{{ props.maxGuests }} гостя</span>
                <span class="badge rounded-pill text-bg-light me-2">{{ props.roomsCount }} комната</span>
                <!-- TODO добавить количество кроватей -->
                
                <!-- TODO добавить количество квадратов -->
            </div>
            <div v-if="props.description">
                <div v-for="(line, index) in getHtmlDescription()" :key="line">
                    <p v-if="line !== ''" class="card-text">{{ line }}</p>
                    <br v-else > 
                </div>
            </div>
            <div v-if="props.comfortsList">
                <h2>Удобства:</h2>
                <ApartmentComfortsList :comfortsList="props.comfortsList"/>
            </div>
            <hr>
            <h2>Расположение:</h2>
            <p class="card-text">
                Адрес: {{ props.city }}, {{ props.address }}
            </p>
            <div v-if="isGeoDataExist()">
                <YandexMap v-model="map" :settings="{
                    location: {
                        center: [props.geoData.y, props.geoData.x],
                        zoom: 16
                    }
                }" height="320px">
                    <YandexMapDefaultSchemeLayer />
                    <YandexMapDefaultFeaturesLayer/>
                    <YandexMapDefaultMarker :settings="{coordinates: [props.geoData.y, props.geoData.x], color: '#0d6efd'}"/>
                </YandexMap>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>