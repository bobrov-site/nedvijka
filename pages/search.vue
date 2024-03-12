<script setup lang="ts">
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps';

onMounted(async () => {
    await useSearchApartmentsStore().loadSearchApartments(queries.start, queries.end);
    await useSearchApartmentsStore().getGeoDataCity(queries.city);
    await useSearchApartmentsStore().getGeoDataFromApartments();
})
const map = shallowRef<null | YMap>(null);
const queries = useRoute().query
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
                        center: [useSearchApartmentsStore().cityPoint.x, useSearchApartmentsStore().cityPoint.y],
                        zoom: 12,
                    }
                }">
                <YandexMapDefaultSchemeLayer />
                <YandexMapDefaultFeaturesLayer />
                <YandexMapMarker v-for="(geo, index) in useSearchApartmentsStore().markers" :key="index" :settings="{ coordinates: [geo.y, geo.x], color: '#0d6efd', title: `${geo.title}₽` }" >
                    <div class="marker"></div>
                    <span class="badge text-bg-primary">{{ `${geo.title}₽` }}</span>
                </YandexMapMarker>
                
            </YandexMap>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.marker {
    position: relative;
    width: 20px;
    height: 20px;
    background: #ff0000;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 20px;
  } 
</style>