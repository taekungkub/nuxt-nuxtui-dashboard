<template>
  <header class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
      <div class="flex items-center justify-between gap-3 h-[--header-height]">
        <div class="lg:flex-1 flex items-center gap-1.5">
          <Icon name="nuxt" size="2rem" />
          <Icon name="NuxtIcon" />
        </div>

        <!-- <ul class="gap-x-8 hidden lg:flex">
          <li class="relative">
            <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/getting-started">Documentation </a>
          </li>
          <li class="relative">
            <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/getting-started/examples">Examples </a>
          </li>
          <li class="relative">
            <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/playground">Playground </a>
          </li>
          <li class="relative">
            <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/pro">Pro </a>
          </li>
        </ul> -->
        <div class="hidden md:flex items-center justify-end lg:flex-1 gap-1.5">
          <UButton :variant="'ghost'" size="sm" icon="i-heroicons-swatch-20-solid" color="primary"> </UButton>
          <UButton :variant="'ghost'" size="sm" icon="i-heroicons-magnifying-glass-20-solid" color="gray"> </UButton>
          <ColorModePicker />
        </div>

        <div class="flex md:hidden">
          <UButton :variant="'ghost'" size="sm" icon="i-heroicons-bars-3 " color="gray" @click="emit('toggle')"> </UButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { getSession, data, status, signOut } = useAuth()

const emit = defineEmits(["toggle"])
</script>

<style scoped></style>
