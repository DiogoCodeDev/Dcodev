<script setup>
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue'
import { useTemplateStore } from '@/stores/template.js'

const templateStore = useTemplateStore()
const { mainTemplate } = storeToRefs(templateStore)

const handleGetMainTemplate = async () => {
  await templateStore.getMainTemplate()
}

onBeforeMount(() => {
  handleGetMainTemplate()
    .then(() => {
      const theme = mainTemplate.value?.theme
      if (!theme || typeof theme !== 'object') return
      for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(`${key}`, value)
      }
    })
    .catch(() => {})
})
</script>

<template>
  <div id="app" class="min-h-screen w-full bg-[#FFFFFF] font-sans text-gray-900">
    <MainNavbar />
    <main class="w-full bg-[#FFFFFF]">
      <RouterView />
    </main>
    <MainFooter />
  </div>
</template>
