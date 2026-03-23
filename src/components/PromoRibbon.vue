<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

/** Data limite da oferta: sempre 2 dias após o dia corrente (atualiza ao abrir o site). */
const deadline = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 2)
  d.setHours(23, 59, 59, 999)
  return d
})

const intlLocale = computed(() => {
  const m = {
    'pt-BR': 'pt-BR',
    'en-US': 'en-US',
    es: 'es-ES',
    'zh-CN': 'zh-CN',
    'fr-FR': 'fr-FR',
  }
  return m[locale.value] || 'pt-BR'
})

const deadlineLabel = computed(() =>
  new Intl.DateTimeFormat(intlLocale.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(deadline.value),
)
</script>

<template>
  <p
    class="border-b border-green-600/40 bg-green-400 px-[0.86rem] py-[0.44rem] text-center text-[0.79rem] leading-snug font-semibold text-slate-900 sm:px-4 sm:py-2 sm:text-[0.8125rem] md:text-sm"
    role="status"
  >
    <span class="sm:hidden">{{ t('promo.textMobile') }}</span>
    <span class="hidden sm:inline">{{ t('promo.text', { date: deadlineLabel }) }}</span>
  </p>
</template>
