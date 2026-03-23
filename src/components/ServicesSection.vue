<template>
  <section class="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 xl:px-10">
    <div class="mx-auto max-w-6xl">
      <!-- Header Section -->
      <div
        class="mb-12 flex flex-col lg:mb-16 lg:flex-row lg:items-center lg:justify-between"
        data-aos="fade-up"
      >
        <!-- Service Tag: só desktop (oculto no mobile) -->
        <div class="hidden items-center lg:flex" data-aos="fade-right" data-aos-delay="100">
          <div
            class="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-xs font-medium text-green-700 lg:px-4 lg:py-2 lg:text-sm"
          >
            <svg class="h-3 w-3 lg:h-4 lg:w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            {{ t('serviceShowcase.tag') }}
          </div>
        </div>

        <!-- Main Heading -->
        <div class="lg:flex-1 lg:text-right" data-aos="fade-left" data-aos-delay="150">
          <h2 class="text-2xl leading-tight font-bold text-gray-800 lg:text-4xl xl:text-4xl">
            <span class="text-gray-900">{{ t('serviceShowcase.headingLine1') }}</span
            ><br />
            <span class="text-gray-700">{{ t('serviceShowcase.headingLine2') }}</span>
          </h2>
        </div>
      </div>

      <!-- Services List -->
      <div class="space-y-4 lg:space-y-6" data-aos="fade-up">
        <!-- Service 01: Branding -->
        <div class="rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:p-6 xl:p-8">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
              <span class="text-base font-medium text-gray-400 lg:text-lg">01</span>
              <h3 class="text-lg font-bold text-gray-800 lg:text-xl xl:text-2xl">
                {{ t('serviceShowcase.branding.title') }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.branding.tag1') }}</span
                >
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.branding.tag2') }}</span
                >
              </div>
            </div>
            <button
              type="button"
              @click="toggleService(0)"
              class="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-700 transition-colors hover:bg-green-100 lg:px-4 lg:py-2 lg:text-sm"
            >
              {{
                expandedServices[0] ? t('serviceShowcase.collapse') : t('serviceShowcase.details')
              }}
              <svg
                class="h-3 w-3 transition-transform duration-300 lg:h-4 lg:w-4"
                :class="{ 'rotate-180': expandedServices[0] }"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!-- Expanded Content -->
          <div
            v-if="expandedServices[0]"
            class="mt-4 border-t border-gray-200 pt-4 lg:mt-6 lg:pt-6"
          >
            <p class="text-sm leading-relaxed text-gray-600 lg:text-base">
              {{ t('serviceShowcase.branding.body') }}
            </p>
          </div>
        </div>

        <!-- Service 02: UX Design -->
        <div class="rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:p-6 xl:p-8">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
              <span class="text-base font-medium text-gray-400 lg:text-lg">02</span>
              <h3 class="text-lg font-bold text-gray-800 lg:text-xl xl:text-2xl">
                {{ t('serviceShowcase.ux.title') }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.ux.tag1') }}</span
                >
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.ux.tag2') }}</span
                >
              </div>
            </div>
            <button
              type="button"
              @click="toggleService(1)"
              class="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-700 transition-colors hover:bg-green-100 lg:px-4 lg:py-2 lg:text-sm"
            >
              {{
                expandedServices[1] ? t('serviceShowcase.collapse') : t('serviceShowcase.details')
              }}
              <svg
                class="h-3 w-3 transition-transform duration-300 lg:h-4 lg:w-4"
                :class="{ 'rotate-180': expandedServices[1] }"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!-- Expanded Content -->
          <div
            v-if="expandedServices[1]"
            class="mt-4 border-t border-gray-200 pt-4 lg:mt-6 lg:pt-6"
          >
            <p class="text-sm leading-relaxed text-gray-600 lg:text-base">
              {{ t('serviceShowcase.ux.body') }}
            </p>
          </div>
        </div>

        <!-- Service 03: Web Development -->
        <div class="rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:p-6 xl:p-8">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
              <span class="text-base font-medium text-gray-400 lg:text-lg">03</span>
              <h3 class="text-lg font-bold text-gray-800 lg:text-xl xl:text-2xl">
                {{ t('serviceShowcase.web.title') }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.web.tag1') }}</span
                >
                <span
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 lg:px-3 lg:py-1 lg:text-sm"
                  >{{ t('serviceShowcase.web.tag2') }}</span
                >
              </div>
            </div>
            <button
              type="button"
              @click="toggleService(2)"
              class="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-700 transition-colors hover:bg-green-100 lg:px-4 lg:py-2 lg:text-sm"
            >
              {{
                expandedServices[2] ? t('serviceShowcase.collapse') : t('serviceShowcase.details')
              }}
              <svg
                class="h-3 w-3 transition-transform duration-300 lg:h-4 lg:w-4"
                :class="{ 'rotate-180': expandedServices[2] }"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!-- Expanded Content -->
          <div
            v-if="expandedServices[2]"
            class="mt-4 border-t border-gray-200 pt-4 lg:mt-6 lg:pt-6"
          >
            <p class="text-sm leading-relaxed text-gray-600 lg:text-base">
              {{ t('serviceShowcase.web.body') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const expandedServices = ref([false, false, false])

const toggleService = index => {
  expandedServices.value[index] = !expandedServices.value[index]
}
</script>
