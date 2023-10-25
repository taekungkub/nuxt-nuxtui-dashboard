<template>
  <div>
    <UContainer>
      <h2>Button</h2>
      <div class="flex items-center gap-2">
        <UButton color="primary">primary</UButton>
        <UButton color="teal"> teal</UButton>
        <UButton color="yellow"> yellow</UButton>
        <UButton color="rose"> rose</UButton>
        <UButton color="heart"> heart</UButton>
        <UButton color="warning"> warning</UButton>
      </div>

      <br />

      <h2>Button Style</h2>
      <div class="flex items-center gap-2">
        <UButton variant="solid" color="primary">solid</UButton>
        <UButton variant="ghost" color="primary">ghost</UButton>
        <UButton variant="link" color="primary">link</UButton>
        <UButton variant="outline" color="primary">outline</UButton>
        <UButton variant="soft" color="primary">soft</UButton>
        <UButton loading variant="soft" color="primary">loading</UButton>
      </div>

      <br />

      <h2>Transition</h2>
      <div class="flex items-center gap-2">
        <UButton variant="solid" color="primary" @click="isFade = !isFade">fade</UButton>
        <UButton variant="solid" color="primary" @click="isScale = !isScale">scale</UButton>
        <UButton variant="solid" color="primary" @click="isExpand = !isExpand">expand</UButton>
        <UButton variant="solid" color="primary" @click="isSlide = !isSlide">slide</UButton>
      </div>
      <TransitionFade>
        <div v-if="isFade">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat ea ab sapiente saepe numquam dicta facilis repellat, laborum laudantium in natus
          provident veritatis vitae ipsam ducimus officiis, repellendus illo?
        </div>
      </TransitionFade>
      <TransitionScale>
        <div v-if="isScale">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat ea ab sapiente saepe numquam dicta facilis repellat, laborum laudantium in natus
          provident veritatis vitae ipsam ducimus officiis, repellendus illo?
        </div>
      </TransitionScale>
      <TransitionExpand>
        <div v-if="isExpand">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat ea ab sapiente saepe numquam dicta facilis repellat, laborum laudantium in natus
          provident veritatis vitae ipsam ducimus officiis, repellendus illo?
        </div>
      </TransitionExpand>
      <TransitionSlide>
        <div v-if="isSlide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat ea ab sapiente saepe numquam dicta facilis repellat, laborum laudantium in natus
          provident veritatis vitae ipsam ducimus officiis, repellendus illo?
        </div>
      </TransitionSlide>

      <br />

      <h2>Modal</h2>

      <div class="flex items-center gap-2">
        <UButton label="Basic" @click="isOpen = true" />
      </div>

      <br />

      <h2>Typography</h2>

      <article>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h2>This is a h2 heading, and will be styled by the prose class</h2>
        <p>This paragraph tag is also styled by the prose class</p>
        <div class="text-caption">This is caption</div>
      </article>

      <UModal v-model="isOpen">
        <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex gap-2 items-center justify-between">
              <h2>Modal Title</h2>
            </div>
          </template>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam blanditiis. Expedita deserunt vitae suscipit commodi nostrum, fugiat explicabo
            sunt blanditiis ut quod, sit dolores optio illum aut rem voluptatum?
          </p>

          <template #footer>
            <div class="flex justify-end gap-2">
              <UButton label="Close" :variant="'soft'" @click="isOpen = false" />
              <UButton label="Confirm" />
            </div>
          </template>
        </UCard>
      </UModal>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)

const isFade = ref(false)
const isScale = ref(false)
const isExpand = ref(false)
const isSlide = ref(false)

useHead({
  title: "My First Nuxt",
})
</script>
