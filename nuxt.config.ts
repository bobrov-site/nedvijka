// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@nuxt/image',
    'vue-yandex-maps/nuxt',
    'nuxt-swiper',
    '@pinia/nuxt'
  ],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client'},
    {src: '~/plugins/useFontAwesome.ts', mode: 'all',},
    {src: '~/plugins/useVueDatePicker.ts', mode: 'all',},
    {src: '~/plugins/useVueYandexMaps.ts', mode: 'all',},
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker', '@fortawesome/vue-fontawesome']
  },
  image: {
    quality: 80,
  },
  runtimeConfig: {
    bnovoUsername: '',
    bnovoPassword: '',
  },
  yandexMaps: {
    apikey: process.env.NUXT_YANDEX_API,
  },
})
