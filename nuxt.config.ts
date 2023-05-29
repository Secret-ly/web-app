import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  experimental: {
    typedPages: true,
  },
  typescript: {
    strict: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    async (_, nuxt) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
    },
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ],
  },
  runtimeConfig: {
    secretKey: 'ABC',
    public: {
      apiEndpoint: 'endpoint'
    }
  },
});
