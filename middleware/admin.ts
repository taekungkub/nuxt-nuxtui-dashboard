import { useUserStore } from "../store/user"

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore()

  const support = ["admin", "superadmin"]

  if (!support.includes(user.role)) {
    return abortNavigation()
    // return navigateTo("/exception/404") if go custom page
  }
})
