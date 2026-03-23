<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()

const faqTitleId = 'services-mei-faq-title'
const openIndex = ref(null)

const items = computed(() => {
  const list = tm('services.meiFaq.items')
  return Array.isArray(list) ? list : []
})

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section
    id="faq"
    class="mt-14 scroll-mt-28 lg:mt-20 lg:scroll-mt-32"
    :aria-labelledby="faqTitleId"
  >
    <h2 :id="faqTitleId" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
      {{ t('services.meiFaq.title') }}
    </h2>
    <p class="mb-8 max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-base">
      {{ t('services.meiFaq.subtitle') }}
    </p>
    <div class="space-y-3">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="overflow-hidden rounded-xl border border-gray-300/90 bg-gray-50"
      >
        <button
          :id="'faq-trigger-' + i"
          type="button"
          class="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-gray-100/80 lg:px-5"
          :aria-expanded="openIndex === i"
          :aria-controls="'faq-panel-' + i"
          @click="toggle(i)"
        >
          <span class="text-base font-semibold text-gray-900">{{ item.q }}</span>
          <svg
            class="size-5 shrink-0 text-green-600 transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === i }"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          v-show="openIndex === i"
          :id="'faq-panel-' + i"
          role="region"
          :aria-labelledby="'faq-trigger-' + i"
          class="border-t border-gray-200 px-4 pt-2 pb-4 text-sm leading-relaxed text-gray-600 lg:px-5 lg:pt-3 lg:pb-5 lg:text-base"
        >
          {{ item.a }}
        </div>
      </div>
    </div>
  </section>
</template>
