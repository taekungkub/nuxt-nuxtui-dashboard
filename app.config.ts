export default defineAppConfig({
  ui: {
    primary: "teal",
    gray: "cool",
    button: {
      default: {
        loadingIcon: "i-heroicons-arrow-path-solid",
      },
    },
    card: {},
    container: {
      constrained: "max-w-7xl",
    },
  },
  nuxtIcon: {
    size: "18px",
    class: "icon",
    aliases: {
      nuxt: "logos:nuxt-icon",
    },
  },
})
