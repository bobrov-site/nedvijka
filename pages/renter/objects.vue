<template>
    <div>
        <div class="row mt-4">
            <div class="col-12">
            <NuxtLink class="btn btn-primary btn-lg" to="/apartments/create">Добавить объект</NuxtLink>
            </div>
        </div>
        <div class="row mt-4 row-cols-1 g-3">
            <div class="col" v-for="apartment in apartments" :key="apartment.id">
                <ApartmentPreview 
                :name="apartment.name"
                :address="apartment.address"
                :city="apartment.city"
                :adults="Number(apartment.adults)"
                :children="Number(apartment.children)"
                :max-guests="Number(apartment.maxGuests)"
                :rooms-count="Number(apartment.roomsCount)"
                :price="apartment.price"
                :is-vertical-layout="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
onMounted(async() => {
    await chooseLoadingMethod();
})
const apartments = ref([])
const config = useRuntimeConfig();
const chooseLoadingMethod = async() => {
    if (useUserStore().user.id === config.public.adminIde ) {
        try {
            apartments.value = await loadApartmentsBnovo();
        }
        catch(e) {
            console.log(e)
        }
        
    }
    //TODO добавить способ подругзки от пользователей не админ 
}
definePageMeta({
    layout: 'user'
})
</script>

<style lang="scss" scoped></style>