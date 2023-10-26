<template>
  <UContainer>
    <h2>Orders</h2>
    <UCard class="mt-4">
      <div class="my-2"><UInput v-model="q" placeholder="Filter people..." /></div>
      <UTable
        :columns="columns"
        :rows="currentRecord"
        :sort="{ column: 'title' }"
        sort-asc-icon="i-heroicons-arrow-up-20-solid"
        sort-desc-icon="i-heroicons-arrow-down-20-solid"
        :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', square: false }"
      />
      <UPagination v-model="page" :page-count="5" :total="people.length" class="mt-4" />
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "title",
    label: "Title",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
    direction: "desc",
  },
  {
    key: "role",
    label: "Role",
  },
]

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
]

const q = ref("")
const filteredRows = computed(() => {
  if (!q.value) {
    return people
  }
  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const page = ref(1)
const pageCount = 5

const currentRecord = computed(() => {
  return filteredRows.value.slice((page.value - 1) * pageCount, page.value * pageCount)
})

watch(
  () => q.value,
  (newValue, oldValue) => {
    if (newValue) {
      page.value = 1
    }
  }
)
</script>

<style scoped></style>
