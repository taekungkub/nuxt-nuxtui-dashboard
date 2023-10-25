import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Kieattisak Suparit",
    role: "admin",
  }),
  actions: {
    updateName(value: string) {
      this.user = value
    },
  },
  getters: {
    firstname(): string | undefined {
      return this.user.split(" ")[0]
    },
    lastname(): string | undefined {
      return this.user.split(" ")[1]
    },
  },
})
