import { YandexMap, YandexMapDefaultSchemeLayer} from 'vue-yandex-maps';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('YandexMap', YandexMap);
    nuxtApp.vueApp.component('YandexMapDefaultSchemeLayer', YandexMapDefaultSchemeLayer);
})