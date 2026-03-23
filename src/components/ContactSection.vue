<template>
  <section
    class="bg-[#FFFFFF] px-4 pb-0 max-lg:overflow-x-clip sm:px-6 md:pb-20 lg:px-8 lg:pb-20 xl:px-10"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Top: citação + estatísticas + imagem -->
      <div
        class="relative mb-0 overflow-hidden border-y border-white/10 bg-gray-900 px-5 py-12 max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2 max-lg:rounded-t-[1.5rem] max-lg:rounded-b-none max-lg:border-x-0 sm:px-8 sm:max-lg:rounded-t-[1.75rem] md:mb-8 lg:mb-10 lg:rounded-3xl lg:border lg:border-white/10 lg:px-10 lg:py-16 xl:px-12"
        data-aos="fade-up"
      >
        <div
          class="bg-grid-dcodev animate-grid-move-up pointer-events-none absolute inset-0 z-0 motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div class="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- Left: Contact Section -->
          <div
            class="space-y-6 text-center lg:text-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div>
              <blockquote
                class="mb-6 text-2xl leading-tight font-bold text-[#05DF72] lg:text-3xl"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {{ t('contact.quote') }}
              </blockquote>
              <p
                class="text-sm leading-snug text-gray-300 lg:w-[32rem] lg:text-base lg:leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {{ t('contact.lead') }}
              </p>
            </div>

            <div
              ref="statsExperienceRef"
              class="mt-10 grid grid-cols-2 justify-items-center gap-x-8 gap-y-1 sm:mt-12 sm:gap-x-12 lg:mt-14 lg:justify-items-start lg:gap-x-16 xl:mt-16 xl:gap-x-20"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div class="flex flex-col items-center gap-1 lg:items-start">
                <span
                  class="text-4xl leading-tight font-bold text-[#05DF72] tabular-nums sm:text-5xl lg:text-5xl"
                >
                  {{ clientsCount }}
                </span>
                <span class="text-base leading-relaxed text-gray-300 lg:text-lg">
                  {{ t('contact.happyClients') }}
                </span>
              </div>
              <div class="flex flex-col items-center gap-1 lg:items-start">
                <span
                  class="text-4xl leading-tight font-bold text-[#05DF72] tabular-nums sm:text-5xl lg:text-5xl"
                >
                  {{ experienceCount }}
                </span>
                <span class="text-base leading-relaxed text-gray-300 lg:text-lg">
                  {{ t('contact.yearsExperience') }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right: imagem (hover na coluna inteira amplia o mockup) -->
          <div class="group space-y-6" data-aos="fade-up" data-aos-delay="150">
            <div class="block">
              <img
                class="mx-auto -mt-4 h-64 w-auto max-w-full origin-center object-contain drop-shadow-xl transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:h-72 lg:h-80 lg:drop-shadow-2xl xl:h-96"
                :src="modeloSiteImg"
                :alt="t('contact.mockupAlt')"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Papéis / entregas: só tablet+ (oculto no mobile) -->
      <div class="mb-8 hidden gap-4 md:grid md:grid-cols-3 md:gap-4 lg:gap-6" data-aos="fade-up">
        <div
          class="group flex h-full cursor-pointer items-center gap-3 rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:gap-4 lg:p-5 xl:p-6"
        >
          <div class="flex min-w-0 flex-1 items-start gap-3">
            <div
              class="group-hover:animate-icon-wiggle flex h-11 w-11 shrink-0 origin-center items-center justify-center rounded-lg bg-[#111828]/10 text-[#111828] lg:h-12 lg:w-12"
            >
              <svg
                class="h-5 w-5 lg:h-6 lg:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="min-w-0 text-left">
              <h3 class="text-base font-bold text-[#111828] lg:text-lg xl:text-xl">
                {{ t('contact.roleFullStack') }}
              </h3>
              <p class="mt-1 text-xs leading-snug text-gray-600 lg:text-sm">
                {{ t('contact.services20') }}
              </p>
            </div>
          </div>
          <span class="shrink-0 text-[#111828]/55" aria-hidden="true">
            <svg
              class="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <div
          class="group flex h-full cursor-pointer items-center gap-3 rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:gap-4 lg:p-5 xl:p-6"
        >
          <div class="flex min-w-0 flex-1 items-start gap-3">
            <div
              class="group-hover:animate-icon-wiggle flex h-11 w-11 shrink-0 origin-center items-center justify-center rounded-lg bg-[#111828]/10 text-[#111828] lg:h-12 lg:w-12"
            >
              <svg
                class="h-5 w-5 lg:h-6 lg:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div class="min-w-0 text-left">
              <h3 class="text-base font-bold text-[#111828] lg:text-lg xl:text-xl">
                {{ t('contact.roleProduct') }}
              </h3>
              <p class="mt-1 text-xs leading-snug text-gray-600 lg:text-sm">
                {{ t('contact.services4') }}
              </p>
            </div>
          </div>
          <span class="shrink-0 text-[#111828]/55" aria-hidden="true">
            <svg
              class="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <div
          class="group flex h-full cursor-pointer items-center gap-3 rounded-xl border border-gray-300/90 bg-gray-50 p-4 lg:gap-4 lg:p-5 xl:p-6"
        >
          <div class="flex min-w-0 flex-1 items-start gap-3">
            <div
              class="group-hover:animate-icon-wiggle flex h-11 w-11 shrink-0 origin-center items-center justify-center rounded-lg bg-[#111828]/10 text-[#111828] lg:h-12 lg:w-12"
            >
              <svg
                class="h-5 w-5 lg:h-6 lg:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div class="min-w-0 text-left">
              <h3 class="text-base font-bold text-[#111828] lg:text-lg xl:text-xl">
                {{ t('contact.roleBranding') }}
              </h3>
              <p class="mt-1 text-xs leading-snug text-gray-600 lg:text-sm">
                {{ t('contact.services4') }}
              </p>
            </div>
          </div>
          <span class="shrink-0 text-[#111828]/55" aria-hidden="true">
            <svg
              class="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>

      <!--
        Mega promoção (oculta por ora). Para reativar: descomente o bloco abaixo
        e o script associado (phone, whatsappPromo*, isMobile, onPromoWhatsAppClick + import computed).
      <a
        :href="whatsappPromoWebUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click="onPromoWhatsAppClick"
        class="block grid cursor-pointer grid-cols-1 gap-12 rounded-xl bg-green-600/40 duration-300 hover:scale-105 lg:grid-cols-2"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <div class="space-y-6 p-8">
          <div>
            <h2 class="mb-4 text-3xl font-bold text-white uppercase lg:text-3xl">
              {{ t('contact.megaTitle') }}
            </h2>
            <p class="leading-relaxed text-white">
              {{ t('contact.megaBody') }}
            </p>
          </div>
          <div
            class="inline-flex items-center gap-2 text-lg font-medium text-green-600 transition-colors hover:text-green-500"
          >
            {{ t('contact.phone') }}
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
      -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import modeloSiteImg from '@/assets/branding/modelo-site.png'

const { t } = useI18n()

// const phone = '5519983904078'
// const whatsappPromoEncoded = computed(() => encodeURIComponent(t('whatsapp.prefillPromo')))
// const whatsappPromoWebUrl = computed(
//   () => `https://api.whatsapp.com/send?phone=${phone}&text=${whatsappPromoEncoded.value}`,
// )

// Counter refs
const experienceCount = ref(0)
const clientsCount = ref(0)
const statsExperienceRef = ref(null)
let isAnimating = false
let statsObserver = null

// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//   navigator.userAgent,
// )
// const onPromoWhatsAppClick = e => {
//   if (!isMobile) return
//   e.preventDefault()
//   window.location.href = `whatsapp://send?phone=${phone}&text=${whatsappPromoEncoded.value}`
// }

// Counter animation function
const animateCounter = (target, ref) => {
  const duration = 2000 // 2 seconds
  const steps = 60
  const increment = target / steps
  const stepDuration = duration / steps

  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    ref.value = Math.floor(current)
  }, stepDuration)
}

// Intersection Observer for counter animation
onMounted(() => {
  statsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true

          experienceCount.value = 0
          clientsCount.value = 0
          setTimeout(() => animateCounter(10, clientsCount), 10)
          setTimeout(() => {
            animateCounter(4, experienceCount)
            setTimeout(() => {
              isAnimating = false
            }, 2100)
          }, 100)
        }
      })
    },
    { threshold: 0.5 },
  )

  if (statsExperienceRef.value) {
    statsObserver.observe(statsExperienceRef.value)
  }
})

onUnmounted(() => {
  if (statsExperienceRef.value && statsObserver) {
    statsObserver.unobserve(statsExperienceRef.value)
  }
  statsObserver = null
})
</script>
