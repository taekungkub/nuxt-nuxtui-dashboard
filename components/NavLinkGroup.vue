<template>
  <div>
    <LinkGroup :items="menus" />
  </div>
</template>

<script setup lang="ts">
const menus = ref([
  {
    title: "",
    childrens: [
      {
        icon: "bxs:home",
        title: "Home",
        path: "/",
      },
    ],
  },
  {
    title: "",
    childrens: [
      {
        icon: "bxs:ball",
        title: "About",
        path: "/about",
      },
    ],
  },
  {
    title: "",
    childrens: [
      {
        icon: "bxs:balloon",
        title: "Profile",
        path: "/profile",
      },
    ],
  },

  {
    title: "",
    childrens: [
      {
        icon: "bxs:book-alt",
        title: "Doc",
        path: "/doc",
      },
    ],
  },
  {
    title: "Auth",
    childrens: [
      {
        icon: "bxs:lock",
        title: "Signin",
        path: "/auth/signin",
      },

      {
        icon: "i-heroicons-moon",
        title: "Signup",
        path: "/auth/signup",
      },
      {
        icon: "i-heroicons-moon",
        title: "Forgotpassword",
        path: "/auth/forgotpassword",
      },
    ],
  },
])
</script>

<style scoped></style>
