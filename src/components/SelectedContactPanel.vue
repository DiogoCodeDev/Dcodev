<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ServiceInquiryForm from '@/components/ServiceInquiryForm.vue'
import CallToAction from '@/components/CallToAction.vue'

const route = useRoute()
const { t, tm } = useI18n()

/** 55 + DDD 19 + 99839-04078 */
const WHATSAPP_PHONE = '5519983904078'

/** 'whatsapp' | 'form' — com `?topic=` válido abre direto no formulário (fluxo dos cards) */
const contactMode = ref('whatsapp')

const waMessage = ref('')

const subjects = computed(() => {
  const list = tm('services.inquiryForm.subjects')
  return Array.isArray(list) ? list : []
})

const topicLabel = computed(() => {
  const raw = route.query.topic
  const topic = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
  if (!topic) return ''
  return subjects.value.find(s => s.value === topic)?.label ?? ''
})

function sendWhatsappQuick() {
  const msg = waMessage.value.trim() || t('services.selectedWhatsappDefaultMessage')

  const lines = []
  if (topicLabel.value) {
    lines.push(`${t('services.inquiryForm.subjectLabel')}: ${topicLabel.value}`)
  }
  lines.push(msg)

  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(lines.join('\n\n'))}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

/** Quando há topic na URL (ex. vindo de /services), mostrar formulário completo já na carga — evita depender só do clique em produção. */
function applyContactModeFromTopic() {
  const raw = route.query.topic
  const topic = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
  if (topic && subjects.value.some(s => s.value === topic)) {
    contactMode.value = 'form'
  }
}

watch(
  () => [route.query.topic, subjects.value],
  () => applyContactModeFromTopic(),
  { immediate: true },
)

onMounted(() => {
  if (!waMessage.value.trim()) {
    waMessage.value = t('services.selectedWhatsappDefaultMessage')
  }
  applyContactModeFromTopic()
})

const radioRingWhatsapp = computed(() =>
  contactMode.value === 'whatsapp'
    ? 'border-green-500 bg-green-50/60 ring-2 ring-green-500/25'
    : 'border-gray-200 hover:border-gray-300',
)

const radioRingForm = computed(() =>
  contactMode.value === 'form'
    ? 'border-gray-900/25 bg-gray-50 ring-2 ring-gray-900/10'
    : 'border-gray-200 hover:border-gray-300',
)

function selectContactMode(mode) {
  contactMode.value = mode
}
</script>

<template>
  <div class="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
    <p
      id="selected-contact-prompt-heading"
      class="mb-4 text-sm font-semibold text-gray-900 sm:text-base"
    >
      {{ t('services.selectedContactPrompt') }}
    </p>

    <div class="space-y-3" role="radiogroup" aria-labelledby="selected-contact-prompt-heading">
      <button
        type="button"
        class="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border-2 p-4 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-green-500/40"
        :class="radioRingWhatsapp"
        role="radio"
        :aria-checked="contactMode === 'whatsapp'"
        @click="selectContactMode('whatsapp')"
      >
        <span class="flex min-w-0 flex-1 items-center gap-3">
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm"
            aria-hidden="true"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </span>
          <span class="min-w-0 text-left">
            <span class="block font-semibold text-gray-900">{{
              t('services.selectedWhatsappBadgeTitle')
            }}</span>
            <span class="mt-0.5 block text-sm text-gray-600">{{
              t('services.selectedWhatsappBadgeLine')
            }}</span>
          </span>
        </span>
        <span
          class="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400 bg-white"
          :class="contactMode === 'whatsapp' ? 'border-green-600' : ''"
          aria-hidden="true"
        >
          <span
            v-show="contactMode === 'whatsapp'"
            class="h-2.5 w-2.5 rounded-full bg-green-600"
          />
        </span>
      </button>

      <button
        type="button"
        class="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border-2 p-4 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-800/30"
        :class="radioRingForm"
        role="radio"
        :aria-checked="contactMode === 'form'"
        @click="selectContactMode('form')"
      >
        <span class="min-w-0 flex-1 text-left">
          <span class="block font-semibold text-gray-900">{{
            t('services.selectedContactFormOption')
          }}</span>
          <span class="mt-0.5 block text-sm text-gray-600">{{
            t('services.selectedContactFormHint')
          }}</span>
        </span>
        <span
          class="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400 bg-white"
          :class="contactMode === 'form' ? 'border-gray-800' : ''"
          aria-hidden="true"
        >
          <span v-show="contactMode === 'form'" class="h-2.5 w-2.5 rounded-full bg-gray-800" />
        </span>
      </button>
    </div>

    <div v-show="contactMode === 'whatsapp'" class="mt-5 border-t border-gray-200 pt-5">
      <label for="selected-wa-message" class="mb-1.5 block text-sm font-medium text-gray-800">
        {{ t('services.selectedWhatsappMessageLabel') }}
      </label>
      <textarea
        id="selected-wa-message"
        v-model="waMessage"
        rows="5"
        maxlength="4000"
        class="mb-4 w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none"
        :placeholder="t('services.selectedWhatsappMessagePlaceholder')"
      />
      <div class="w-full max-w-sm sm:max-w-none lg:w-full">
        <CallToAction
          :text="t('services.selectedWhatsappSend')"
          size="lg-md"
          color="green"
          native-type="button"
          full-width
          @click="sendWhatsappQuick"
        />
      </div>
    </div>

    <div v-show="contactMode === 'form'" class="mt-5 border-t border-gray-200 pt-5">
      <ServiceInquiryForm hide-heading embedded />
    </div>
  </div>
</template>
