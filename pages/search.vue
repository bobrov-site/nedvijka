<template>
    <div class="row mt-4">
        <div class="col-12">
            <SearchForm />
        </div>
    </div>
    <div class="row mt-4 flex-column-reverse flex-md-row">
        <div class="col-md-6">
            <div class="row row-cols-1 g-3">
                <div v-for="(item, index) in 4" :key="index" class="col">
                    <ApartmentCard :is-vertical-layout="true" />
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
        </YandexMap>
        </div>
    </div>
</template>

<script setup>
import { YandexMap} from 'vue-yandex-maps';
const map = shallowRef(null);
const route = useRoute()
// cityId, children, adult, start, end
</script>

<style lang="scss" scoped></style>