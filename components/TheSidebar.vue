<template>
  <USlideover
    v-model="isOpen"
    :side="'left'"
    :ui="{
      base: 'p-3 overflow-y-auto rounded-r-lg	',
      width: 'w-screen max-w-[300px]',
    }"
  >
    <slot />
  </USlideover>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
})

const emit = defineEmits(["update:modelValue"])
const route = useRoute()
const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    return emit("update:modelValue", val)
  },
})

watch(
  () => route.path,
  (newValue, oldValue) => {
    if (newValue) {
      emit("update:modelValue", false)
    }
  }
)
</script>

<style scoped></style>
