<template>
  <UContainer>
    <h2>Orders</h2>
    <UCard class="mt-4">
      <div class="flex my-4 justify-between">
        <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
        <UInput v-model="q" placeholder="Filter people..." />
      </div>
      <UTable
        v-model="selected"
        :columns="selectedColumns"
        :rows="currentRecord"
        :sort="{ column: 'title', direction: 'desc' }"
        sort-asc-icon="i-heroicons-arrow-up-20-solid"
        sort-desc-icon="i-heroicons-arrow-down-20-solid"
      >
        <template #name-data="{ row }">
          <span :class="[selected.find((person) => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </template>
      </UTable>
      <div class="flex justify-center border-t border-border pt-4">
        <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
      </div>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const columns = [
  {
    key: "id",
    label: "ID",
    sortable: false,
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
    sortable: false,
  },
  {
    key: "actions",
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

const selectedColumns = ref([...columns])
const page = ref(1)
const pageCount = 5
const selected = ref<typeof people>([])

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

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
]
</script>

<style scoped></style>
