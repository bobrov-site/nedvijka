<script setup>
const user = useUserStore();

definePageMeta({
    layout: 'user'
})
</script>
<template>
    <div class="row mt-4 row-cols-1 g-3">
        <div class="col" v-for="(item, index) in 1" :key="index">
            <ApartmentPreview :is-vertical-layout="true" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>