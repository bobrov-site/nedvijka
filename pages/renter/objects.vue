<template>
    <div>
        <div class="row mt-4">
            <div class="col-12">
            <NuxtLink class="btn btn-primary btn-lg" to="/apartments/create">Добавить объект</NuxtLink>
            </div>
        </div>
        <div class="row mt-4 row-cols-1 g-3">
            <div class="col" v-for="(item, index) in 4" :key="index">
                <ApartmentPreview :is-vertical-layout="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'user'
})
</script>

<style lang="scss" scoped></style>