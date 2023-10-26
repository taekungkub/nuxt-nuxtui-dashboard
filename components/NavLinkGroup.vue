<template>
  <LinkGroup :items="menus" />
</template>

<script setup lang="ts">
const menus = ref([
  {
    title: "",
    childrens: [
      {
        icon: "bxs:home",
        title: "Home",
        path: "/home",
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
    title: "",
    childrens: [
      {
        icon: "bxs:shopping-bags",
        title: "Products",
        path: "/products",
      },
    ],
  },
  {
    title: "",
    childrens: [
      {
        icon: "bxs:shopping-bags",
        title: "Orders",
        path: "/orders",
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
        icon: "bxs:cookie",
        title: "Signup",
        path: "/auth/signup",
      },
      {
        icon: "bxs:skull",
        title: "Forgotpassword",
        path: "/auth/forgotpassword",
      },
    ],
  },
])
</script>

<style scoped></style>
