<template>
  <div>
    <TheHeader @toggle="isOpen = !isOpen" />

    <TheSidebar v-model="isOpen">
      <NavLinkGroup />
    </TheSidebar>

    <main class="min-h-[calc(100vh-var(--header-height))]">
      <div class="flex flex-col lg:grid lg:grid-cols-10">
        <div class="lg:col-span-2">
          <aside class="hidden overflow-y-auto border-r border-border h-screen lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] p-2">
            <NavLinkGroup />
          </aside>
        </div>
        <div class="lg:col-span-8">
          <div class="mt-4">
            <slot />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style lang="scss" scoped></style>
