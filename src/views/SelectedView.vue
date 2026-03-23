<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import SelectedContactPanel from '@/components/SelectedContactPanel.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-[#FFFFFF] text-gray-900">
    <main class="pt-28 pb-20 lg:pt-32">
      <div class="mx-auto w-full max-w-6xl px-4 lg:px-6">
        <nav class="mb-5 max-w-3xl lg:mb-6" :aria-label="t('services.breadcrumbNavLabel')">
          <ol
            class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm leading-snug text-black italic"
          >
            <li>
              <RouterLink
                to="/"
                class="text-black transition-colors hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                {{ t('nav.home') }}
              </RouterLink>
            </li>
            <li class="text-black/50 select-none" aria-hidden="true">/</li>
            <li>
              <RouterLink
                to="/services"
                class="text-black transition-colors hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                {{ t('services.title') }}
              </RouterLink>
            </li>
            <li class="text-black/50 select-none" aria-hidden="true">/</li>
            <li>
              <span class="font-medium text-black" aria-current="page">
                {{ t('services.selectedBreadcrumb') }}
              </span>
            </li>
          </ol>
        </nav>

        <header class="mb-8 max-w-3xl lg:mb-10">
          <h1 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            {{ t('services.selectedTitle') }}
          </h1>
          <p class="text-base leading-relaxed text-gray-600 lg:text-lg">
            {{ t('services.selectedIntro') }}
          </p>
          <p class="mt-3 text-base leading-snug font-semibold text-[#047857] lg:text-lg">
            {{ t('services.selectedIntroHighlight') }}
          </p>
        </header>

        <SelectedContactPanel class="w-full" />
      </div>
    </main>
  </div>
</template>
