<script setup lang="ts">
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

onMounted(async () => {
    await loadApartmentsByQueries();
})
const map = shallowRef<null | YMap>(null);
const queries = useRoute().query
const loadApartmentsByQueries = async () => {
    try {
        useSearchApartmentsStore().apartments = await loadApartmentsBnovo();
        useSearchApartmentsStore().dashboard = await $fetch('/bnovo/dashboard', {
            method: 'GET',
            params: {
                start: queries.start,
                end: queries.end,
            }
        })
    }
    catch(e) {
        throw new createError({
            statusCode: 500,
            statusMessage: e.message
        })
    }
}
// cityId, children, adult, start, end
</script>

<template>
    <div class="search-page row flex-column-reverse flex-md-row">
        <div class="col-md-7 col-12">
            <div class="row row-cols-1 g-3">
                <div class="col">
                    <div class="card p-4 search-form h-100">
                        <SearchForm form-title="Поиск" />
                    </div>
                </div>
                <div v-for="apartment in useSearchApartmentsStore().apartments" :key="apartment.id" class="col">
                    <ApartmentPreview :name="apartment.name" :address="apartment.address" :city="apartment.city"
                        :adults="Number(apartment.adults)" :children="Number(apartment.children)"
                        :max-guests="Number(apartment.maxGuests)" :rooms-count="Number(apartment.roomsCount)"
                        :price="apartment.price" :id="apartment.id" :photos="apartment.photos"
                        :is-vertical-layout="true" />
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

<style lang="scss" scoped></style>