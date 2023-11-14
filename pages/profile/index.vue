<template>
  <UContainer>
    <h3 class="text-xl font-bold">Authentication Overview</h3>
    <p class="text-sm">See all available authentication & session information below.</p>

    <div v-if="status === 'loading'">Loading...</div>
    <div v-else>
      <pre v-if="status"><span>Status:</span> {{ status }}</pre>
      <p>
        {{ data?.user }}
      </p>
      <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
      <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>

      <UButton variant="outline" color="red" @click="signOut()">Loout</UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
})

const { data, status, signOut, getCsrfToken, getProviders } = useAuth()

const providers = await getProviders()
const csrfToken = await getCsrfToken()

useHead({
  title: "My Profile",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Make building modern web applications with Nuxt3 a breeze",
    },
  ],
})
</script>

<style scoped></style>
