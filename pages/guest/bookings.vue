<template>
    <div class="row mt-4 row-cols-1 g-3">
        <div class="col" v-for="(item, index) in 4" :key="index">
            <ApartmentPreview :is-vertical-layout="true" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'user'
})
</script>

<style lang="scss" scoped></style>