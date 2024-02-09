// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@nuxt/image',
    'vue-yandex-maps/nuxt',
    'nuxt-swiper'
  ],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client'},
    {src: '~/plugins/useFontAwesome.ts', mode: 'all',},
    {src: '~/plugins/useVueDatePicker.ts', mode: 'all',},
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker', '@fortawesome/vue-fontawesome']
  },
  image: {
    quality: 80,
  },
  yandexMaps: {
    apikey: 'f82200e9-f4ed-4813-b122-0a28730623b1',
  },
})
