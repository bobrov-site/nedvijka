
<script setup>
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
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">Заполните информацию о вашей квартире</h1>
            <UiFormEdit :apartment="apartment"/>
            <button class="btn btn-primary btn-lg">Создать квартиру</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>