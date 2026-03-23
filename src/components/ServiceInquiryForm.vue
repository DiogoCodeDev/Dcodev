<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CallToAction from '@/components/CallToAction.vue'

defineProps({
  /** Esconde título e descrição (ex.: dentro do painel de contato) */
  hideHeading: {
    type: Boolean,
    default: false,
  },
  /** Sem cartão próprio: útil quando já está dentro de outro painel */
  embedded: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const { t, tm } = useI18n()

/** Destino das mensagens do formulário completo (FormSubmit — ative com o link do primeiro e-mail recebido). */
const INQUIRY_EMAIL = 'diogo.code.dev@gmail.com'
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${INQUIRY_EMAIL}`

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const submitting = ref(false)
const showSuccessModal = ref(false)
const submitError = ref('')

const subjects = computed(() => {
  const list = tm('services.inquiryForm.subjects')
  return Array.isArray(list) ? list : []
})

const emailLooksValid = computed(() => {
  const e = email.value.trim()
  if (!e) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
})

const isFormComplete = computed(() => {
  return (
    name.value.trim().length > 0 &&
    emailLooksValid.value &&
    subject.value.length > 0 &&
    message.value.trim().length > 0
  )
})

function applyTopicFromQuery() {
  const raw = route.query.topic
  const topic = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
  if (topic && subjects.value.some(s => s.value === topic)) {
    subject.value = topic
  }
}

watch(
  () => route.query.topic,
  () => applyTopicFromQuery(),
  { immediate: true },
)

watch([name, email, subject, message], () => {
  if (submitError.value) submitError.value = ''
})

function resetForm() {
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  applyTopicFromQuery()
}

async function handleSubmit() {
  if (!isFormComplete.value || submitting.value) return

  const subjectLabel = subjects.value.find(s => s.value === subject.value)?.label ?? subject.value

  submitting.value = true
  submitError.value = ''

  const payload = {
    name: name.value.trim(),
    email: email.value.trim(),
    _subject: `[DCODEV] ${subjectLabel}`,
    message: [
      `${t('services.inquiryForm.nameLabel')}: ${name.value.trim()}`,
      `${t('services.inquiryForm.emailLabel')}: ${email.value.trim()}`,
      `${t('services.inquiryForm.subjectLabel')}: ${subjectLabel}`,
      '',
      `${t('services.inquiryForm.messageLabel')}:`,
      message.value.trim(),
    ].join('\n'),
  }

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) {
      throw new Error(typeof data.message === 'string' ? data.message : 'submit_failed')
    }
    resetForm()
    showSuccessModal.value = true
  } catch {
    submitError.value = t('services.inquiryForm.submitError')
  } finally {
    submitting.value = false
  }
}

function closeSuccessModal() {
  showSuccessModal.value = false
}
</script>

<template>
  <section
    class="w-full"
    :class="
      embedded ? '' : 'rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8'
    "
    :aria-labelledby="hideHeading ? undefined : 'service-inquiry-heading'"
    :aria-label="hideHeading ? t('services.inquiryForm.title') : undefined"
  >
    <template v-if="!hideHeading">
      <h2
        id="service-inquiry-heading"
        class="mb-1 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
      >
        {{ t('services.inquiryForm.title') }}
      </h2>
      <p id="service-inquiry-desc" class="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
        {{ t('services.inquiryForm.description') }}
      </p>
    </template>
    <p v-else id="service-inquiry-desc" class="sr-only">
      {{ t('services.inquiryForm.description') }}
    </p>

    <form
      class="service-inquiry-form grid grid-cols-1 gap-5 sm:grid-cols-2"
      @submit.prevent="handleSubmit"
    >
      <div class="sm:col-span-1">
        <label for="inquiry-name" class="mb-1.5 block text-sm font-medium text-gray-800">
          <span>{{ t('services.inquiryForm.nameLabel') }}</span
          ><span class="ml-0.5 font-semibold text-green-500" aria-hidden="true">*</span>
        </label>
        <input
          id="inquiry-name"
          v-model="name"
          type="text"
          name="name"
          autocomplete="name"
          maxlength="120"
          aria-required="true"
          class="inquiry-input w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none"
          :placeholder="t('services.inquiryForm.namePlaceholder')"
        />
      </div>

      <div class="sm:col-span-1">
        <label for="inquiry-email" class="mb-1.5 block text-sm font-medium text-gray-800">
          <span>{{ t('services.inquiryForm.emailLabel') }}</span
          ><span class="ml-0.5 font-semibold text-green-500" aria-hidden="true">*</span>
        </label>
        <input
          id="inquiry-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          maxlength="254"
          aria-required="true"
          class="inquiry-input w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none"
          :placeholder="t('services.inquiryForm.emailPlaceholder')"
        />
      </div>

      <div class="sm:col-span-2">
        <label for="inquiry-subject" class="mb-1.5 block text-sm font-medium text-gray-800">
          <span>{{ t('services.inquiryForm.subjectLabel') }}</span
          ><span class="ml-0.5 font-semibold text-green-500" aria-hidden="true">*</span>
        </label>
        <select
          id="inquiry-subject"
          v-model="subject"
          name="subject"
          aria-required="true"
          class="inquiry-input w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none"
        >
          <option disabled value="">
            {{ t('services.inquiryForm.subjectPlaceholder') }}
          </option>
          <option v-for="opt in subjects" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>

      <div class="sm:col-span-2">
        <label for="inquiry-message" class="mb-1.5 block text-sm font-medium text-gray-800">
          <span>{{ t('services.inquiryForm.messageLabel') }}</span
          ><span class="ml-0.5 font-semibold text-green-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="inquiry-message"
          v-model="message"
          name="message"
          rows="5"
          maxlength="4000"
          aria-required="true"
          class="inquiry-input w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none"
          :placeholder="t('services.inquiryForm.messagePlaceholder')"
          aria-describedby="service-inquiry-desc"
        />
      </div>

      <p v-if="submitError" class="text-sm text-red-600 sm:col-span-2" role="alert">
        {{ submitError }}
      </p>

      <div class="sm:col-span-2">
        <div class="w-full max-w-sm sm:max-w-none lg:w-full lg:max-w-none">
          <CallToAction
            :text="
              submitting ? t('services.inquiryForm.sending') : t('services.inquiryForm.submit')
            "
            size="lg-md"
            color="navy"
            native-type="submit"
            full-width
            :disabled="!isFormComplete || submitting"
          />
        </div>
      </div>
    </form>

    <Teleport to="body">
      <div
        v-if="showSuccessModal"
        class="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-success-title"
        @click.self="closeSuccessModal"
      >
        <div
          class="max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
          @click.stop
        >
          <h3
            id="inquiry-success-title"
            class="text-lg font-bold tracking-tight text-gray-900 sm:text-xl"
          >
            {{ t('services.inquiryForm.successTitle') }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            {{ t('services.inquiryForm.successBody') }}
          </p>
          <div class="mt-6">
            <CallToAction
              :text="t('services.inquiryForm.successButton')"
              size="md"
              color="green"
              native-type="button"
              full-width
              @click="closeSuccessModal"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
/* Mantém fundo branco e texto escuro quando o navegador aplica autofill (evita o tom marrom/amarelado). */
.service-inquiry-form .inquiry-input:-webkit-autofill,
.service-inquiry-form .inquiry-input:-webkit-autofill:hover,
.service-inquiry-form .inquiry-input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  box-shadow: 0 0 0 1000px #fff inset;
  -webkit-text-fill-color: #111827;
  caret-color: #111827;
}

.service-inquiry-form .inquiry-input:autofill,
.service-inquiry-form .inquiry-input:autofill:hover,
.service-inquiry-form .inquiry-input:autofill:focus {
  box-shadow: 0 0 0 1000px #fff inset;
}
</style>
