<template>
  <UContainer>
    <div class="mt-20">
      <UCard header="Login" text="Login using  your email address and password" class="mx-auto max-w-[500px]">
        <!--if successful -->
        <UAlert title="Login successful" color="green" v-if="loginSuccess" />

        <!-- Error message -->
        <UAlert title="Login failed" color="red" v-if="loginError" />

        <div ref="formRef">
          <UForm :schema="SigninSchema" :state="state" @submit="submit" class="mt-4">
            <UFormGroup label="Email" name="email">
              <UInput v-model="state.email" placeholder="jsmith" />
            </UFormGroup>
            <UFormGroup label="Password" name="password" class="mt-4">
              <UInput v-model="state.password" type="password" placeholder="hunter2" />
            </UFormGroup>
            <UButton block type="submit" class="mt-4"> Submit </UButton>
          </UForm>
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <NuxtLink to="/auth/signup"> <UButton variant="soft">Register</UButton> </NuxtLink>
          </div>
          <div class="forgot">
            <NuxtLink to="/auth/forgotpassword"> <UButton variant="soft">forgot password?</UButton> </NuxtLink>
          </div>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types"
import { SigninSchema } from "../../../types/form.schema"

const { signIn } = useAuth()
const loginError = ref()
const loginSuccess = ref()

useHead({
  title: "Signin",
})

definePageMeta({
  layout: "empty",
  middleware: "auth", //Global middleware disalbed
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/profile",
  },
})

const state = ref({
  email: "jsmith",
  password: "hunter2",
})

async function submit(event: FormSubmitEvent<any>) {
  console.log(state)
  await signIn("credentials", { username: state.value.email, password: state.value.password, callbackUrl: "/profile" })
}
</script>

<style scoped></style>
