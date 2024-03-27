<script setup>
onMounted(async () => {
    await loadApartment();
})
const process = ref(null)
const searchApartments = useSearchApartmentsStore();
const loadApartment = async () => {
    // TODO переделать на стор
    //мы должны сделать запрос в бд на проверку есть ли такой апартамент по id
    //так же мы должны убедиться что provider === bnovo или provider === fridda
    //если есть такой, то мы загружаем апарты
    //если такого id нет, выкидываем ошибку 404

    //поскольку пока нет базы данных, то мы загружаем апартаменты из bnovo
    process.value = 'loading'
    const { id } = useRoute().params
    const apartments = await loadApartmentsBnovo();
    searchApartments.currentApartment = apartments.find((apartment) => apartment.id == id)
    if (!searchApartments.currentApartment) {
        process.value = 'loaded'
        return
    }
    if (searchApartments.currentApartment.geo_data.x === 0 && searchApartments.currentApartment.geo_data.y === 0) {
        searchApartments.currentApartment.geo_data = await setNewGeoCode(searchApartments.currentApartment)
    }
    searchApartments.city = searchApartments.currentApartment.city
    searchApartments.currentApartment = searchApartments.currentApartment
    process.value = 'loaded'
}
</script>

<template>
    <div class="apartmentId row">
        <div class="col-12 col-md-7">
            <div v-if="process === 'loading'" class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <ApartmentCard v-if="process === 'loaded' && searchApartments.currentApartment" :name="searchApartments.currentApartment.name" :address="searchApartments.currentApartment.address"
                :city="searchApartments.currentApartment.city" :max-guests="searchApartments.currentApartment.maxGuests" :photos="searchApartments.currentApartment.photos"
                :rooms-count="Number(searchApartments.currentApartment.roomsCount)" :description="searchApartments.currentApartment.description"
                :geo-data="searchApartments.currentApartment.geo_data" />
            <div v-if="process === 'loaded' && !searchApartments.currentApartment">
                <h1>Ошибка! Объект не найден</h1>
                <NuxtLink class="btn btn-primary btn-lg" to="/">Вернуться на главную</NuxtLink>
            </div>
        </div>
        <div v-if="process === 'loaded' && searchApartments.currentApartment" class="col-12 col-md-5">
            <BookingForm/>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>