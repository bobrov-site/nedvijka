<template>
    <div class="row">
        <div class="col-12 col-md-8">
            <div class="card p-4 search-form h-100">
                <SearchForm form-title="Начните поиск"/>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <SliderBenefits/>
        </div>
    </div>
    <div class="row mt-4 mb-2">
        <div class="col-12">
            <h2>Доступные квартиры</h2>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div v-for="(item, index) in 4" :key="index" class="col">
            <ApartmentPreview/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>