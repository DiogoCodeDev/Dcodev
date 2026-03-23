<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '@/i18n.js'
import FlagRound from '@/components/FlagRound.vue'

const { locale, t } = useI18n()

const open = ref(false)
const rootRef = ref(null)

const options = computed(() =>
  SUPPORTED_LOCALES.map(code => ({
    code,
    labelKey:
      code === 'pt-BR'
        ? 'lang.ptBR'
        : code === 'en-US'
          ? 'lang.enUS'
          : code === 'es'
            ? 'lang.es'
            : code === 'zh-CN'
              ? 'lang.zhCN'
              : 'lang.frFR',
  })),
)

const currentLabel = computed(() => {
  const opt = options.value.find(o => o.code === locale.value)
  return opt ? t(opt.labelKey) : ''
})

function applyLocale(code) {
  if (!SUPPORTED_LOCALES.includes(code)) return
  locale.value = code
  open.value = false
}

function toggle() {
  open.value = !open.value
}

function onDocPointerDown(ev) {
  if (!open.value || !rootRef.value) return
  if (!rootRef.value.contains(ev.target)) open.value = false
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocPointerDown, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocPointerDown, true)
})
</script>

<template>
  <div ref="rootRef" class="relative">
    <button
      type="button"
      class="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 shadow-none transition-transform duration-200 outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-label="`${currentLabel}. ${t('lang.open')}`"
      @click.stop="toggle"
    >
      <span class="flex size-8 overflow-hidden rounded-full" aria-hidden="true">
        <FlagRound :code="locale" />
      </span>
    </button>

    <div
      v-show="open"
      class="absolute top-full right-0 z-[60] mt-2 min-w-[13.5rem] overflow-hidden rounded-xl border border-gray-200/90 bg-white py-1 shadow-xl"
      role="listbox"
    >
      <button
        v-for="opt in options"
        :key="opt.code"
        type="button"
        role="option"
        :aria-selected="locale === opt.code"
        class="flex w-full cursor-pointer items-center gap-3 px-2 py-2 text-left text-sm text-gray-900 transition-colors hover:bg-gray-100"
        :class="{
          'bg-emerald-50 font-semibold text-emerald-800 hover:bg-emerald-100/80':
            locale === opt.code,
        }"
        @click="applyLocale(opt.code)"
      >
        <span class="flex size-8 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
          <FlagRound :code="opt.code" />
        </span>
        <span class="min-w-0 flex-1 truncate">{{ t(opt.labelKey) }}</span>
      </button>
    </div>
  </div>
</template>
