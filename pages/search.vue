<template>
    <div class="row mt-4 flex-column-reverse flex-md-row">
        <div class="col-md-6">
            <div class="row row-cols-1 g-3">
                <div class="col">
                    <SearchForm form-title="Поиск" />
                </div>
                <div v-for="(item, index) in 4" :key="index" class="col">
                    <ApartmentPreview :is-vertical-layout="true" />
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <YandexMap v-model="map" :settings="{
                location: {
                    center: [37.617644, 55.755819],
                    zoom: 9,
                },
            }">
                <YandexMapDefaultSchemeLayer />
            </YandexMap>
        </div>
    </div>
</template>

<script setup>
const map = shallowRef(null);
const route = useRoute()
// cityId, children, adult, start, end
</script>

<style lang="scss" scoped></style>