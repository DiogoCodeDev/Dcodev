<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import imgMascoteDashboard from '@/assets/branding/mascote-dashboard-dinheiro.webp'
import imgDashboard from '@/assets/branding/dashboard.webp'
import imgBusiness from '@/assets/branding/business.webp'
import imgPackMoney from '@/assets/branding/pack-money.webp'
import CallToAction from '@/components/CallToAction.vue'

const { t } = useI18n()

/** Desktop: espaço entre imagens no marquee (loop infinito). */
const mascotMarqueeGap = '5.6rem'
/** Mobile/tablet: espaço vertical entre imagens no marquee. */
const mascotMarqueeGapNarrow = '3.5rem'

const marqueeGap = ref(mascotMarqueeGap)

function syncMarqueeGap() {
  marqueeGap.value = window.matchMedia('(max-width: 1023px)').matches
    ? mascotMarqueeGapNarrow
    : mascotMarqueeGap
}

onMounted(() => {
  syncMarqueeGap()
  window.addEventListener('resize', syncMarqueeGap)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncMarqueeGap)
})

/** Marquee infinito: mascote dir → pack-money esq → business dir → dashboard esq (faixa ×2 no template). */
const mascotMarqueeItems = [
  { src: imgMascoteDashboard, side: 'right' },
  { src: imgPackMoney, side: 'left', compact: true },
  { src: imgBusiness, side: 'right' },
  { src: imgDashboard, side: 'left' },
]
</script>
<template>
  <section
    class="bg-grid-dcodev animate-grid-move flex h-[54.5rem] flex-col overflow-x-hidden bg-gray-900 pt-[7.125rem] max-lg:min-h-0 max-lg:overflow-hidden sm:h-[59.5rem] lg:h-[42.5rem] lg:pt-[7.875rem]"
  >
    <div
      class="mx-auto grid min-h-0 w-full max-w-6xl flex-1 grid-cols-1 grid-rows-[auto_auto] items-center justify-items-center gap-2 px-4 pb-2 max-lg:min-h-0 max-lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch lg:justify-items-stretch lg:gap-20 lg:px-6 lg:pb-0"
    >
      <!-- Esquerda: headline + texto (pt só aqui — coluna do mascote encosta no topo do grid) -->
      <div
        class="mx-auto flex w-full max-w-2xl -translate-y-6 flex-col justify-center pt-3 text-center max-lg:shrink-0 sm:-translate-y-8 lg:mx-0 lg:h-full lg:max-w-none lg:-translate-y-10 lg:pt-8 lg:text-left"
      >
        <div class="flex w-full flex-col items-center lg:max-w-xl lg:items-stretch xl:max-w-2xl">
          <h1
            class="animate-hero-reveal m-0 mt-8 mb-1.5 text-center text-[2.6rem] leading-none font-bold tracking-tight text-white motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:mb-2 sm:text-4xl lg:mt-0 lg:mb-2 lg:text-left lg:text-4xl xl:text-5xl 2xl:text-6xl"
          >
            {{ t('hero.title') }}
          </h1>
          <p
            class="animate-hero-reveal text-md m-0 text-center leading-snug font-medium text-gray-300 [animation-delay:95ms] motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:text-sm lg:text-left lg:text-lg"
          >
            <span>{{ t('hero.subtitleLine1') }}</span>
            <span class="hidden lg:inline">&nbsp;</span>
            <br class="lg:hidden" />
            <span>{{ t('hero.subtitleLine2') }}</span>
          </p>
          <div
            class="animate-hero-reveal mt-3 flex w-full justify-center [animation-delay:190ms] motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:mt-4 lg:mt-7 lg:justify-start"
          >
            <ul
              class="m-4 w-full max-w-md list-none space-y-[0.9rem] text-left lg:max-w-none"
              role="list"
            >
              <li
                class="relative pl-6 text-[0.8rem] leading-relaxed text-gray-400 sm:text-[0.8rem] lg:text-[0.9rem]"
              >
                <span
                  class="absolute top-2 left-0 size-2 shrink-0 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                {{ t('hero.bullet1') }}
              </li>
              <li
                class="relative pl-6 text-[0.8rem] leading-relaxed text-gray-400 sm:text-[0.8rem] lg:text-[0.9rem]"
              >
                <span
                  class="absolute top-2 left-0 size-2 shrink-0 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                {{ t('hero.bullet2') }}
              </li>
            </ul>
          </div>
          <div
            class="animate-hero-reveal mt-6 w-11/12 max-w-sm [animation-delay:285ms] motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:mt-4 lg:mt-8 lg:w-full lg:max-w-none"
          >
            <CallToAction
              :text="t('hero.cta')"
              to="/services"
              size="lg-md"
              color="green"
              full-width
            />
          </div>
        </div>
      </div>

      <!-- Mobile: só mascote, entra de baixo (sem marquee) -->
      <div
        class="flex w-full max-w-[37.05rem] items-center justify-center self-stretch overflow-hidden max-lg:h-[20.5rem] max-lg:max-h-[20.5rem] max-lg:min-h-0 max-lg:shrink-0 sm:max-lg:h-[23.5rem] sm:max-lg:max-h-[23.5rem] lg:hidden"
        aria-hidden="true"
      >
        <img
          :src="imgMascoteDashboard"
          alt=""
          class="animate-mascot-rise-mobile h-auto max-h-full w-auto max-w-[min(100%,44rem)] object-contain object-bottom motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100"
          decoding="async"
        />
      </div>

      <!-- Desktop: marquee infinito -->
      <div
        class="hidden w-full max-w-[37.05rem] justify-center self-stretch lg:flex lg:h-full lg:max-h-none lg:min-h-0 lg:max-w-none"
        aria-hidden="true"
      >
        <div
          class="relative h-full min-h-0 w-full max-w-[min(100%,46rem)] sm:max-w-[min(100%,51rem)] lg:max-w-[34.125rem] xl:max-w-[37.05rem]"
        >
          <div class="absolute inset-0 flex min-h-0 flex-col">
            <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
              <div
                class="animate-mascot-marquee flex w-full flex-col gap-0 [backface-visibility:hidden] motion-reduce:animate-none"
              >
                <div
                  v-for="dup in 2"
                  :key="'mascot-strip-' + dup"
                  class="flex w-full flex-col"
                  :style="{ gap: marqueeGap }"
                >
                  <div
                    v-for="(item, i) in mascotMarqueeItems"
                    :key="'mascot-strip-' + dup + '-' + i"
                    class="flex h-[clamp(6.125rem,23vh,10.75rem)] w-full shrink-0 items-center max-lg:justify-center lg:h-[clamp(8.775rem,27.3vh,14.625rem)]"
                    :class="item.side === 'left' ? 'lg:justify-start' : 'lg:justify-end'"
                    :style="
                      i === mascotMarqueeItems.length - 1 ? { marginBottom: marqueeGap } : undefined
                    "
                  >
                    <img
                      :src="item.src"
                      alt=""
                      class="block w-auto object-contain"
                      :class="
                        item.compact
                          ? 'h-auto max-lg:max-h-[min(100%,9.75rem)] max-lg:max-w-[min(100%,27rem)] sm:max-lg:max-h-[min(100%,10.875rem)] sm:max-lg:max-w-[min(100%,30rem)] lg:max-h-[min(65%,11rem)] lg:max-w-[min(38%,13rem)]'
                          : 'max-lg:h-full max-lg:max-h-full max-lg:max-w-[min(100%,44rem)] lg:h-full lg:max-h-full lg:max-w-[min(52%,20rem)]'
                      "
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
