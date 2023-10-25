<template>
  <div>permission admin</div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth", "admin"],
})
</script>

<style scoped></style>
