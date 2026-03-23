<script setup>
import { computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import testeBgImg from '@/assets/branding/teste bg.png'
import teste2Img from '@/assets/branding/teste2.png'
import teste3Img from '@/assets/branding/teste3.png'
import businessImg from '@/assets/branding/business.webp'

const router = useRouter()
const { tm, t } = useI18n()

/** Alinhado à ordem de `services.highlightCards` e aos `value` do formulário em /selected */
const CARD_TOPICS = ['landing', 'institutional', 'ecommerce']

function goSelected(topic) {
  router.push({ name: 'selected', query: { topic } })
}

const TAP_MOVE_PX = 14

const cardPointer = {
  active: false,
  x: 0,
  y: 0,
  moved: false,
  topic: /** @type {string | null} */ (null),
}

function cleanupCardPointerWindowListeners() {
  window.removeEventListener('pointermove', onCardPointerWindowMove)
  window.removeEventListener('pointerup', onCardPointerWindowUp)
  window.removeEventListener('pointercancel', onCardPointerWindowCancel)
}

function onCardPointerWindowMove(e) {
  if (!cardPointer.active) return
  if (
    Math.abs(e.clientX - cardPointer.x) > TAP_MOVE_PX ||
    Math.abs(e.clientY - cardPointer.y) > TAP_MOVE_PX
  ) {
    cardPointer.moved = true
  }
}

function onCardPointerWindowUp() {
  if (!cardPointer.active) return
  const topic = cardPointer.topic
  const moved = cardPointer.moved
  cleanupCardPointerWindowListeners()
  cardPointer.active = false
  cardPointer.topic = null
  cardPointer.moved = false
  if (!moved && topic != null) goSelected(topic)
}

function onCardPointerWindowCancel() {
  if (!cardPointer.active) return
  cleanupCardPointerWindowListeners()
  cardPointer.active = false
  cardPointer.topic = null
  cardPointer.moved = false
}

/** Mobile: rolar a página não navega; só “toque firme” (sem arrastar) abre /selected. */
function onCardPointerDown(e, topic) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  if (cardPointer.active) {
    cleanupCardPointerWindowListeners()
    cardPointer.active = false
    cardPointer.topic = null
    cardPointer.moved = false
  }
  cardPointer.active = true
  cardPointer.x = e.clientX
  cardPointer.y = e.clientY
  cardPointer.moved = false
  cardPointer.topic = topic
  window.addEventListener('pointermove', onCardPointerWindowMove, { passive: true })
  window.addEventListener('pointerup', onCardPointerWindowUp, { passive: true })
  window.addEventListener('pointercancel', onCardPointerWindowCancel, { passive: true })
}

const cards = computed(() => {
  const list = tm('services.highlightCards')
  return Array.isArray(list) ? list : []
})

onUnmounted(() => {
  cleanupCardPointerWindowListeners()
})

const cardBottomImages = [teste2Img, testeBgImg, teste3Img]

const cardBadges = [{ key: 'navMenu.offBadge50' }, { key: 'navMenu.offBadge30' }, null]
</script>

<template>
  <section class="w-full">
    <div class="mb-12 flex flex-col lg:mb-16 lg:flex-row lg:items-center lg:justify-between">
      <div class="mb-6 flex items-center lg:mb-0">
        <div
          class="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-xs font-medium text-green-700 lg:px-4 lg:py-2 lg:text-sm"
        >
          <svg class="h-3 w-3 lg:h-4 lg:w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
          {{ t('services.highlightsTag') }}
        </div>
      </div>
      <div class="lg:flex-1 lg:text-right">
        <h2 class="text-2xl leading-tight font-bold text-gray-800 lg:text-4xl xl:text-4xl">
          <span class="text-gray-900">{{ t('services.highlightsTitle') }}</span
          ><br />
          <span class="text-gray-700">{{ t('services.highlightsSubtitle') }}</span>
        </h2>
      </div>
    </div>

    <div
      class="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      role="list"
    >
      <article
        v-for="(card, i) in cards"
        :key="i"
        role="listitem"
        tabindex="0"
        class="group relative flex min-h-[26rem] w-[min(21rem,calc(100vw-3rem))] shrink-0 cursor-pointer snap-center flex-col overflow-hidden rounded-xl border shadow-md lg:min-h-[30rem] lg:w-auto lg:min-w-0 lg:snap-none"
        :aria-label="card.title"
        @pointerdown="onCardPointerDown($event, CARD_TOPICS[i] ?? 'other')"
        @keydown.enter.prevent="goSelected(CARD_TOPICS[i] ?? 'other')"
        @keydown.space.prevent="goSelected(CARD_TOPICS[i] ?? 'other')"
        :class="
          i === 0
            ? 'border-white/15 bg-gradient-to-b from-[#181818] to-[#2a2a2a]'
            : i === 1
              ? 'border-white/15 bg-gradient-to-b from-[#0F0155] to-[#230f78]'
              : i === 2
                ? 'border-gray-300 bg-[#ECEDEF]'
                : 'border-white/15 bg-gradient-to-b from-[#1D2433] to-[#323d52]'
        "
      >
        <span
          v-if="cardBadges[i]"
          class="absolute -top-px -right-px z-20 inline-flex items-center rounded-tr-xl rounded-bl-xl bg-green-500 px-3 py-1.5 text-[0.65rem] leading-none font-bold tracking-wider text-white uppercase shadow-md lg:px-3.5 lg:py-2 lg:text-xs"
          aria-hidden="true"
        >
          {{ t(cardBadges[i].key) }}
        </span>
        <div
          v-if="i < cardBottomImages.length"
          class="pointer-events-none absolute -right-px -bottom-px -left-px z-[1] h-[min(52%,14rem)] origin-bottom scale-100 bg-cover bg-bottom bg-no-repeat transition-transform duration-300 ease-out will-change-transform group-hover:scale-110 lg:h-[min(48%,16rem)]"
          :style="{ backgroundImage: `url(${cardBottomImages[i]})` }"
          aria-hidden="true"
        />
        <div class="relative z-10 flex flex-col p-4 lg:p-5">
          <h3
            :class="
              i === 2
                ? 'text-2xl leading-tight font-semibold tracking-tight text-black lg:text-3xl'
                : 'text-2xl leading-tight font-semibold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] lg:text-3xl'
            "
          >
            {{ card.title }}
          </h3>
          <p
            :class="
              i === 2
                ? 'mt-2 text-sm leading-snug text-gray-900 lg:mt-3'
                : 'mt-2 text-sm leading-snug text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] lg:mt-3'
            "
          >
            {{ card.subtitle }}
          </p>
        </div>
      </article>
    </div>

    <div
      role="link"
      tabindex="0"
      class="group relative mt-6 flex w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-white/15 bg-[#1E2535] px-4 pt-6 pb-4 shadow-sm max-lg:pb-1 sm:max-lg:gap-3 sm:max-lg:pb-2 lg:mt-8 lg:block lg:min-h-[10.5rem] lg:px-7 lg:py-5"
      :aria-label="t('services.maintenanceBannerTitle')"
      @click="goSelected('maintenance')"
      @keydown.enter.prevent="goSelected('maintenance')"
      @keydown.space.prevent="goSelected('maintenance')"
    >
      <div
        class="bg-grid-dcodev animate-grid-move-up pointer-events-none absolute inset-0 z-0 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        class="relative z-10 w-full text-center max-lg:max-w-none lg:flex lg:min-h-[10.5rem] lg:flex-col lg:justify-center lg:pr-36 lg:text-start"
      >
        <h3 class="text-2xl leading-tight font-bold text-[#05DF72] lg:text-3xl">
          {{ t('services.maintenanceBannerTitle') }}
        </h3>
        <p
          class="mt-2 max-w-2xl text-sm leading-snug text-gray-300 max-lg:whitespace-normal lg:mt-2.5 lg:whitespace-pre-line"
        >
          {{ t('services.maintenanceBannerBody') }}
        </p>
      </div>
      <div
        class="relative z-[1] mx-auto mt-12 w-full max-w-[min(100%,20.8rem)] overflow-hidden max-lg:h-[12rem] sm:max-lg:h-[14rem] sm:max-lg:max-w-[min(100%,24rem)] lg:mt-0 lg:contents"
        aria-hidden="true"
      >
        <img
          :src="businessImg"
          alt=""
          class="pointer-events-none object-contain opacity-95 max-lg:absolute max-lg:top-0 max-lg:left-1/2 max-lg:h-[200%] max-lg:w-auto max-lg:max-w-none max-lg:-translate-x-1/2 max-lg:object-top lg:absolute lg:top-0 lg:right-5 lg:left-auto lg:h-[17rem] lg:max-w-none lg:translate-x-0 lg:object-top"
        />
      </div>
    </div>
  </section>
</template>
