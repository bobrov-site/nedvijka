// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~/plugins/useBootstrap.ts', mode: 'client' },
    {src: '~/plugins/useFontAwesome.ts', mode: 'all',},
  ],
})
