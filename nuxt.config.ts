// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client'},
    {src: '~/plugins/useFontAwesome.ts', mode: 'all',},
    {src: '~/plugins/useVueDatePicker.ts', mode: 'all',},
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker', '@fortawesome/vue-fontawesome']
}
})
