<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  /** Texto do botão / link */
  text: {
    type: String,
    required: true,
  },
  /** sm | md | lg | lg-md (grande no mobile/tablet, md a partir de lg) */
  size: {
    type: String,
    default: 'md',
    validator: v => ['sm', 'md', 'lg', 'lg-md'].includes(v),
  },
  /**
   * green — fundo verde (padrão da marca)
   * white — fundo branco
   * outline — borda clara, transparente
   * navy — fundo #1D2433 (ex.: CTA do formulário de contato)
   */
  color: {
    type: String,
    default: 'green',
    validator: v => ['green', 'white', 'outline', 'navy'].includes(v),
  },
  /** Rota interna (Vue Router); tem prioridade sobre href */
  to: {
    type: [String, Object],
    default: null,
  },
  /** Se definido, renderiza como <a>; senão <button> */
  href: {
    type: String,
    default: null,
  },
  /** Para uso com <a>: abrir em nova aba */
  external: {
    type: Boolean,
    default: false,
  },
  /** Largura 100% do container */
  fullWidth: {
    type: Boolean,
    default: false,
  },
  /** Só para `<button>` (sem `to` / `href`): tipo nativo do HTML */
  nativeType: {
    type: String,
    default: 'button',
    validator: v => ['button', 'submit', 'reset'].includes(v),
  },
  /** Desabilita clique e envio (ex.: formulário incompleto) */
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const sizeClass = computed(() => {
  const map = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-4 py-2 text-xs rounded-lg sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base lg:rounded-xl',
    lg: 'px-7 py-3.5 text-base rounded-xl sm:px-8 sm:py-4 sm:text-lg',
    'lg-md':
      'px-7 py-4 text-[1rem] rounded-xl sm:px-8 sm:py-4 sm:text-lg lg:px-6 lg:py-3 lg:text-base lg:rounded-xl',
  }
  return map[props.size]
})

const colorClass = computed(() => {
  const map = {
    green: 'bg-green-400 text-gray-900 hover:bg-green-300',
    white: 'bg-white text-gray-900 hover:bg-gray-100',
    outline: 'border-2 border-white/80 bg-transparent text-white hover:bg-white/10',
    navy: 'bg-[#1D2433] text-white hover:bg-[#2a3344]',
  }
  return map[props.color]
})

const layoutClass = computed(() => (props.fullWidth ? 'flex w-full' : 'inline-flex'))

const surfaceClass = computed(() => [
  'items-center justify-center font-bold tracking-wide uppercase transition-colors duration-200',
  props.disabled ? 'pointer-events-none cursor-not-allowed opacity-45' : 'cursor-pointer',
  layoutClass.value,
  sizeClass.value,
  colorClass.value,
])

const tag = computed(() => (props.href ? 'a' : 'button'))

function onClick(e) {
  if (!props.href && !props.to) {
    emit('click', e)
  }
}
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="surfaceClass">
    {{ text }}
  </RouterLink>
  <component
    v-else
    :is="tag"
    :class="surfaceClass"
    :href="href || undefined"
    :type="tag === 'button' ? nativeType : undefined"
    :disabled="tag === 'button' && disabled"
    :target="external && href ? '_blank' : undefined"
    :rel="external && href ? 'noopener noreferrer' : undefined"
    @click="onClick"
  >
    {{ text }}
  </component>
</template>
