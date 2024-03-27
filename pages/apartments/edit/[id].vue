<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">Заполните информацию о вашей квартире</h1>
            <UiFormEdit :apartment="apartment"/>
            <button class="btn btn-primary btn-lg">Создать квартиру</button>
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    loadApartment();
})
const apartmentId = useRoute().params.id
const apartment = ref({
    name: '',
    description: '',
    images: [],
    countRooms: '',
    countBeds: '',
    countSquare: '',
    maxGuests: '',
    city: '',
    address: '',
    comfortsList: [],
    priceDay: '',
});

const loadApartment = async() => {
    const { id } = useRoute().params
    // const apartments = await loadApartmentsBnovo();
    // apartment.value = apartments.find((apartment) => apartment.id == id)
}
</script>

<style lang="scss" scoped>

</style>