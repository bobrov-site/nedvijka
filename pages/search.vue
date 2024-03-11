<script setup lang="ts">
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapDefaultSchemeLayer, VueYandexMaps } from 'vue-yandex-maps';

onMounted(async () => {
    await loadGeoCode();
    await loadApartmentsByQueries();

})

const map = shallowRef<null | YMap>(null);
const queries = useRoute().query
const cityPoint = ref({
    x: null,
    y: null,
});
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
    catch (e) {
        throw new createError({
            statusCode: 500,
            statusMessage: e.message
        })
    }
}

const loadGeoCode = async () => {
    try {
        const response = await $fetch('/api/map/geocode', {
            params: {
                geocode: queries.city,
            }
        })
        cityPoint.value = response.geocode
    }
    catch (e) {
        throw new createError({
            statusCode: 400,
            statusMessage: e.message
        })
    }
}

const getGeoDataFromApartments = () => {
    return useSearchApartmentsStore().apartments.map((apartment) => {
        const geo = {
            x: apartment.geo_data.x,
            y: apartment.geo_data.y
        }
        return geo
    })
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
                        center: [cityPoint.x, cityPoint.y],
                        zoom: 12,
                    }
                }">
                <YandexMapDefaultSchemeLayer />
                <YandexMapDefaultFeaturesLayer />
                <template v-for="(geo, index) in getGeoDataFromApartments()" :key="index">
                    <YandexMapDefaultMarker
                        :settings="{ coordinates: [Number(geo.y), Number(geo.x)], color: '#0d6efd' }" />
                </template>
            </YandexMap>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>