<script setup>
onMounted(async() => {
    process.value = 'loading'
    apartments.value = await loadApartmentsBnovo();
    process.value = 'loaded'
})
const apartments = ref([])
const process = ref(null)
const setAlertStatus = () => {
    if (Object.hasOwn(route.query, 'isRegistred')) {
        alertStatuses.value.isRegistred = true
    }
    if (Object.hasOwn(route.query, 'isLogin')) {
        alertStatuses.value.isLogin = true
    }
    if (Object.hasOwn(route.query, 'isLogout')) {
        alertStatuses.value.isLogout = true
    }
}
const route = useRoute();
const alertStatuses = ref({
    isRegistred: false,
    isLogin: false,
    isLogout: false,
})
const reviews = [
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
    { name: 'Рустам', text: 'Отличный сайт, удобно пользоваться' },
]
watch(() => route.query, setAlertStatus)
</script>
<template>
    <div v-show="alertStatuses.isRegistred" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Вы успешно зарегистрированы!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-show="alertStatuses.isLogin" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Вы успешно зашли в систему!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-show="alertStatuses.isLogout" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Вы вышли из системы!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="row">
        <div class="col-12 col-md-8">
            <div class="card p-4 search-form h-100">
                <SearchForm form-title="Начните поиск" />
            </div>
        </div>
        <div class="col-12 col-md-4">
            <SliderBenefits />
        </div>
    </div>
    <div v-if="process === 'loading'" class="row mt-4">
            <div class="col-12">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    <div v-if="process === 'loaded'" class="row mt-4 mb-2">
        <div class="col-12">
            <h2>Доступные квартиры</h2>
        </div>
    </div>
    <div v-if="process === 'loaded'" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div v-for="apartment in apartments" :key="apartment.id" class="col">
            <ApartmentPreview 
            :name="apartment.name"
            :address="apartment.address"
            :city="apartment.city"
            :adults="Number(apartment.adults)"
            :children="Number(apartment.children)"
            :max-guests="Number(apartment.maxGuests)"
            :rooms-count="Number(apartment.roomsCount)"
            :price="apartment.price"
            :id="apartment.id"
            :photos="apartment.photos"
            />
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <h2>Отзывы</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <Swiper :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :breakpoints="{
    '768': {
        'slidesPerView': 4
    }
}" :navigation="false" :modules="[SwiperAutoplay]" :slidesPerView="1" :spaceBetween="30">
                <SwiperSlide v-for="(review, index) in reviews" :key="index">
                    <Review :name="review.name" :text="review.text" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>