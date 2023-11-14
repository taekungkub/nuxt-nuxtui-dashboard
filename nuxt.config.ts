// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {},
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth", "@formkit/auto-animate/nuxt", "@nuxtjs/color-mode", "nuxt-icon", "@morev/vue-transitions/nuxt", "@pinia/nuxt", "@nuxt/content", "@nuxt/image"],
  css: ["@/assets/css/theme.css", "@/assets/css/main.css"],
  ui: {
    global: true,
    // icons: ["mdi", "simple-icons"],
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    globalAppMiddleware: false, //if true now pages will require sign-in.
  },
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
  },
  content: {
    highlight: {
      theme: "github-light",
    },
  },
  routeRules: {
    "/": { redirect: "/home" },
  },
})
