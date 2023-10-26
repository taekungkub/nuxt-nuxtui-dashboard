<template>
  <div>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
      <UButton :variant="'ghost'" size="sm" :icon="activeIcon" color="gray"> </UButton>
      <template #item="{ item }">
        <span class="truncate" @click="$colorMode.preference = item.value">{{ item.label }}</span>
        <Icon :name="item.icon" class="flex-shrink-0 text-gray-400 dark:text-gray-500 ms-auto" />
      </template>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const activeIcon = computed(() => {
  if (colorMode.value === "system") return "i-heroicons-book-open-20-solid"
  else if (colorMode.value === "light") return "i-heroicons-sun-20-solid"
  else if (colorMode.value === "dark") return "i-heroicons-moon-20-solid"
  else if (colorMode.value === "sepia") return "i-heroicons-signal-20-solid"
  return "i-heroicons-book-open-20-solid"
})

const items = [
  [
    {
      label: "System",
      icon: "i-heroicons-book-open",
      click: () => {
        colorMode.preference = "system"
      },
    },
    {
      label: "Light",
      icon: "i-heroicons-sun",
      click: () => {
        colorMode.preference = "light"
      },
    },
    {
      label: "Dark",
      icon: "i-heroicons-moon",
      click: () => {
        colorMode.preference = "dark"
      },
    },
    {
      label: "Sepia",
      icon: "i-heroicons-signal",
      click: () => {
        colorMode.preference = "sepia"
      },
    },
  ],
]
</script>

<style lang="scss" scoped></style>
