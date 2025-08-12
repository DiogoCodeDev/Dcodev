<script setup>
import MainNavbar from './components/MainNavbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useTemplateStore } from '@/stores/template.js'

const templateStore = useTemplateStore()
const { mainTemplate } = storeToRefs(templateStore)

const handleGetMainTemplate = async () => {
  await templateStore.getMainTemplate()
}

onBeforeMount(() => {
  handleGetMainTemplate().then(() => {
    for (const [key, value] of Object.entries(mainTemplate.value.theme)) {
      console.log(mainTemplate.value)
      document.documentElement.style.setProperty(`${key}`, value)
    }
  })
})
</script>

<template>
  <div id="app" class="min-h-screen w-full bg-gray-900 font-sans text-white">
    <MainNavbar />
    <HeroBanner />
    <ServicesSection />
    <ContactSection />
  </div>
</template>

<style scoped>
/* No custom styles needed - all styles converted to Tailwind classes */
</style>
