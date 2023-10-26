<template>
  <UContainer>
    <h2>Products {{ route.params.id }}</h2>
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <UCard class="mt-4">
        <p>{{ data }}</p>
      </UCard>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data, pending, error, refresh } = await useDummyService.product(route.params.id as string)
</script>

<style scoped></style>
