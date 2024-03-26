<script setup>
onMounted(async () => {
    await loadApartment();
})
const apartment = ref({})
const process = ref(null)
const searchApartments = useSearchApartmentsStore();
const loadApartment = async () => {
    //мы должны сделать запрос в бд на проверку есть ли такой апартамент по id
    //так же мы должны убедиться что provider === bnovo или provider === fridda
    //если есть такой, то мы загружаем апарты
    //если такого id нет, выкидываем ошибку 404

    //поскольку пока нет базы данных, то мы загружаем апартаменты из bnovo
    process.value = 'loading'
    const { id } = useRoute().params
    const apartments = await loadApartmentsBnovo();
    apartment.value = apartments.find((apartment) => apartment.id == id)
    if (!apartment.value) {
        process.value = 'loaded'
        return
    }
    if (apartment.value.geo_data.x === 0 && apartment.value.geo_data.y === 0) {
        apartment.value.geo_data = await setNewGeoCode(apartment.value)
    }
    searchApartments.city = apartment.value.city
    process.value = 'loaded'
}
</script>

<template>
    <div class="apartmentId row">
        <div class="col-12 col-md-7">
            <div v-if="process === 'loading'" class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <ApartmentCard v-if="process === 'loaded' && apartment" :name="apartment.name" :address="apartment.address"
                :city="apartment.city" :max-guests="apartment.maxGuests" :photos="apartment.photos"
                :rooms-count="Number(apartment.roomsCount)" :description="apartment.description"
                :geo-data="apartment.geo_data" />
            <div v-if="process === 'loaded' && !apartment">
                <h1>Ошибка! Объект не найден</h1>
                <NuxtLink class="btn btn-primary btn-lg" to="/">Вернуться на главную</NuxtLink>
            </div>
        </div>
        <div v-if="process === 'loaded' && apartment" class="col-12 col-md-5">
            <BookingForm/>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>