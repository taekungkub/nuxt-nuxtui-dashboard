<template>
  <UContainer>
    <h2>Products</h2>

    <div v-if="pending">Loading...</div>

    <div v-for="item in data?.products" :key="item.id" v-else>
      <UCard class="mt-4">
        <p>{{ item }}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          <NuxtImg preload :src="img" :width="150" v-for="img in item.images" :key="img" />
        </div>

        <UButton :to="'/products/1' + item.id">Detail</UButton>
      </UCard>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const { data, pending, error, refresh } = await useDummyService.products()
</script>

<style scoped></style>
