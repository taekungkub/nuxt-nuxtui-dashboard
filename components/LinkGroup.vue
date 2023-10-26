<template>
  <div class="menu" v-for="(item, index) in props.items" :key="index">
    <li class="text-sm pl-3 flex items-center flex-row gap-5 my-3 mt-5" v-if="item.title">
      <!-- <Icon name="i-heroicons-moon"></Icon> -->
      <div class="font-bold">{{ item.title }}</div>
    </li>
    <div>
      <div class="wrapper" v-for="(subItem, index) in item.childrens" :key="index">
        <NuxtLink :to="subItem.path" class="item" :class="isActiveLink(subItem.path)">
          <span>
            <Icon :name="subItem.icon" class="icon" :size="'1.225rem'"></Icon>
          </span>
          <span>{{ subItem.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array<{
      title: string
      childrens: Array<{
        icon: string
        title: string
        path: string
      }>
    }>,
  },
})
const route = useRoute()

function isActiveLink(myRoute: string) {
  if (route.fullPath.startsWith(myRoute)) {
    return "!text-primary-500"
  }
}
</script>

<style lang="scss" scoped>
.menu {
  .wrapper {
    @apply w-full flex flex-col  my-1;

    .item {
      @apply flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400  p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800;

      .icon {
        @apply ms-auto transform transition-transform duration-200;
      }
    }
  }
}
</style>
