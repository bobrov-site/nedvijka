<template>
    <div class="search-page row flex-column-reverse flex-md-row">
        <div class="col-md-7 col-12">
            <div class="row row-cols-1 g-3">
                <div class="col">
                    <div class="card p-4 search-form h-100">
                        <SearchForm form-title="Поиск" />
                    </div>
                </div>
                <div v-for="(item, index) in 4" :key="index" class="col">
                    <ApartmentPreview :is-vertical-layout="true" />
                </div>
            </div>
        </div>
        <div class="col-md-5 col-12">
            <YandexMap class="position-sticky yandex-map" v-model="map" :settings="{
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