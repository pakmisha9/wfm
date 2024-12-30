// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: "wfm-app",
      short_name: "wfm",
      description: "description",
      start_url: "/",
      theme_color: "#000",
      icons: [
        {
          src: 'img/logos/64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'img/logos/144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'img/logos/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/logos/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
})