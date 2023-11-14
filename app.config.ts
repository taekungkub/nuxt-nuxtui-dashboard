export default defineAppConfig({
  ui: {
    primary: "teal",
    gray: "cool",
    button: {
      default: {
        loadingIcon: "i-heroicons-arrow-path-solid",
      },
    },
    card: {
      base: "border-border rounded-default",
      divide: "divide-y divide-gray-100 dark:divide-gray-800",
    },

    table: {
      default: {
        // sortAscIcon: "i-heroicons-arrow-up-20-solid",
        // sortDescIcon: "i-heroicons-arrow-down-20-solid",
        // sortButton: {
        //   icon: "i-heroicons-sparkles-20-solid",
        // },
      },
    },
    modal: {
      base: "rounded-default",
      transition: {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
      },
    },

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
