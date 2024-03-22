// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config///
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@nuxt/image',
    'vue-yandex-maps/nuxt',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-mongoose',
    '@sidebase/nuxt-auth',
  ],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client'},
    {src: '~/plugins/useFontAwesome.ts', mode: 'all',},
    {src: '~/plugins/useVueDatePicker.ts', mode: 'all',},
    {src: '~/plugins/useVueYandexMaps.ts', mode: 'all',},
    {src: '~/plugins/useGSTC.ts', mode: 'client',},
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
    authSecret: '',
    yandexApi: '',
    yandexGeocode: process.env.NUXT_YANDEX_GEOCODE,
    public: {
      adminIde: process.env.NUXT_ADMIN_IDE,
      ganttSecretKey: process.env.NUXT_GANTT_SECRET_KEY,
    }
  },
  yandexMaps: {
    apikey: process.env.NUXT_YANDEX_API,
  },
  mongoose: {
    uri: process.env.NUXT_MONGODB_URI
  },
  nuxtServerUtils: {
    mongodbUri: process.env.NUXT_MONGODB_URI
  },
  auth: {
    baseURL: `${process.env.NUXT_AUTH_ORIGIN}/api/auth`,
    provider: {
        type: 'authjs'
    },
    origin: process.env.NUXT_AUTH_ORIGIN,
  },
})
