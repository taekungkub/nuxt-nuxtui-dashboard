<template>
  <UContainer>
    <div class="mt-20">
      <UCard header="Login" text="Login using  your email address and password" class="max-w-[500px] block mx-auto">
        <UForm :state="formState" @submit="submit" class="mt-4">
          <UFormGroup label="Email" name="email">
            <UInput v-model="formState.email" />
          </UFormGroup>
          <UFormGroup label="Displayname" name="displayname" class="mt-4">
            <UInput v-model="formState.displayname" />
          </UFormGroup>
          <UFormGroup label="Password" name="Password" class="mt-4">
            <UInput v-model="formState.password" type="password" />
          </UFormGroup>
          <UButton block type="submit" class="mt-4"> Submit </UButton>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
  middleware: "auth", //Global middleware disalbed
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/profile",
  },
})

const formState = reactive({
  email: "",
  displayname: "",
  password: "",
})

async function submit(event: any) {
  const data = await $fetch("/api/auth/signup", {
    method: "post",
    body: { ...formState },
  })

  console.log(data)
}
</script>

<style scoped></style>
