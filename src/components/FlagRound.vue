<script setup>
import { computed } from 'vue'
import brazil from '@/assets/flags/brazil.svg'
import unitedStates from '@/assets/flags/united-states.svg'
import spain from '@/assets/flags/spain.svg'
import china from '@/assets/flags/china.svg'
import france from '@/assets/flags/france.svg'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
})

const URLS = {
  'pt-BR': brazil,
  'en-US': unitedStates,
  es: spain,
  'zh-CN': china,
  'fr-FR': france,
}

const src = computed(() => URLS[props.code] ?? brazil)
</script>

<template>
  <img
    :src="src"
    alt=""
    width="32"
    height="32"
    decoding="async"
    class="block h-full w-full object-cover object-center"
  />
</template>
