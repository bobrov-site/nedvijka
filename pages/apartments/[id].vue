<script setup>
onMounted(async () => {
    await loadApartment();
})
const date = ref()
const start = ref()
const end = ref()
const adult = ref(1)
const children = ref(0)
const isShowDropdown = ref(false)
const apartment = ref({})
const process = ref(null)

const handleDate = (modelData) => {
    date.value = modelData;
    start.value = parseDate(modelData[0])
    end.value = parseDate(modelData[1])
}

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
        <div class="col-12 col-md-5">
            <div class="card p-4 search-form position-sticky top-0">
                <div class="row mb-3">
                    <div class="col-12">
                        <h2>Информация по бронированию</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <BookingForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>