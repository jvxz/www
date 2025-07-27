// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      templateParams: {
        siteName: 'Jamie Jacobs',
      },
      titleTemplate: '%s',

    },
  },
  compatibilityDate: '2025-07-15',

  css: [
    '~/assets/css/globals.css',
  ],

  devtools: { enabled: true },

  eslint: {
    config: {
      import: false,
      standalone: false,
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500],
    },
  },
  icon: {
    customCollections: [
      {
        dir: './app/assets/icons',
        prefix: 'custom',
      },
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],

  nitro: {
    future: {
      nativeSWR: true,
    },
  },

  ogImage: {
    fonts: [
      'Nunito:400',
      'Nunito:700',
    ],
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/uses': {
      prerender: true,
    },
    '/work': {
      prerender: true,
    },
  },

  runtimeConfig: {
    wakatimeKey: '',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
