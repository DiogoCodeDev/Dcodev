<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PromoRibbon from '@/components/PromoRibbon.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

function goToServicesMenu() {
  router.push('/services')
  closeNavMenu()
}

const normalizedPath = computed(() => {
  const path = (route.path || '/').replace(/\/+$/, '') || '/'
  return path || '/'
})

const isHomeRoute = computed(() => normalizedPath.value === '/')

/** Serviços + fluxo de orçamento selecionado */
const isServicesRoute = computed(() => {
  const p = normalizedPath.value
  return p === '/services' || p === '/selected' || p === '/services/selected'
})

function navLinkIsActive(item) {
  if (item.href === '#') return false
  if (item.isBudget) return false
  if (item.isHome) return isHomeRoute.value
  if (item.href === '/services') return isServicesRoute.value
  return false
}

function navLinkClass(item) {
  return navLinkIsActive(item)
    ? 'border-b-2 border-green-400 pb-0.5 font-medium text-white hover:text-white'
    : 'text-gray-400 hover:text-white'
}

const isScrolled = ref(false)
const isPromoVisible = ref(true)
const isNavMenuOpen = ref(false)

/** Colapsa a faixa no layout ao rolar (evita translate no header inteiro — isso deixava buraco no menu mobile full-screen). */
const promoSlotClass = computed(() =>
  isPromoVisible.value ? 'max-h-[5.5rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
)

/** Esconde a faixa promocional ao rolar um pouco; volta no topo da página. */
const PROMO_HIDE_AFTER_PX = 32

const handleScroll = () => {
  const y = window.scrollY
  isScrolled.value = y > 0
  isPromoVisible.value = y < PROMO_HIDE_AFTER_PX
}

const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value
}

const closeNavMenu = () => {
  isNavMenuOpen.value = false
}

const openHelpWhatsAppAndCloseMenu = () => {
  openWhatsApp('whatsapp.prefillHelp')
  closeNavMenu()
}

const openWhatsApp = (prefillKey = 'whatsapp.prefillNavbar') => {
  const phone = '5519983904078'
  const message = encodeURIComponent(t(prefillKey))

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )

  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${phone}&text=${message}`
  } else {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { key: 'nav.home', href: '/', isHome: true },
  { key: 'nav.budget', href: '/services', isBudget: true },
  { key: 'nav.services', href: '/services' },
]

const siteTypeIndexes = [1, 2, 6, 4, 5, 3]

const helpMenuLinks = [
  { key: 'navMenu.helpItem1', to: { name: 'services', hash: '#faq' } },
  { key: 'navMenu.helpItem2', to: { name: 'services' } },
  { key: 'navMenu.helpItem3', whatsapp: true },
]

/** Substitua pelos perfis reais da marca. */
const socialMenuLinks = [
  { id: 'ig', key: 'navMenu.socialInstagram', href: 'https://www.instagram.com/diogo.code/' },
  { id: 'in', key: 'navMenu.socialLinkedin', href: 'https://www.linkedin.com/in/allan-code/' },
]
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-50 flex flex-col"
    :class="{ 'max-lg:bottom-0 max-lg:overflow-hidden': isNavMenuOpen }"
  >
    <div
      class="relative z-[3] shrink-0 overflow-hidden transition-[max-height,opacity] duration-300 ease-out will-change-[max-height,opacity]"
      :class="promoSlotClass"
    >
      <PromoRibbon />
    </div>
    <nav
      class="relative z-[2] border-b border-white/10 bg-gray-900/95 backdrop-blur-md transition-all duration-300"
      :class="{ 'shadow-2xl': isScrolled }"
    >
      <div class="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-3 lg:px-5">
        <div class="col-start-1 col-end-2 flex items-center">
          <button
            type="button"
            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-white/5"
            :aria-expanded="isNavMenuOpen"
            aria-controls="nav-full-menu"
            :aria-label="isNavMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            @click="toggleNavMenu"
          >
            <span
              v-if="!isNavMenuOpen"
              class="flex flex-col items-center justify-center gap-1.5"
              aria-hidden="true"
            >
              <span class="block h-0.5 w-6 rounded-full bg-white" />
              <span class="block h-0.5 w-6 rounded-full bg-white" />
              <span class="block h-0.5 w-6 rounded-full bg-white" />
            </span>
            <svg
              v-else
              class="h-6 w-6 shrink-0 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="col-start-2 col-end-3 flex items-center justify-center">
          <img src="../assets/branding/dcodev.webp" alt="Decodev Logo" class="h-5 w-auto md:h-6" />
        </div>

        <div class="col-start-3 col-end-4 flex items-center justify-end gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=5519983904078"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 shadow-none transition-transform duration-200 outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="WhatsApp"
            @click.prevent="openWhatsApp"
          >
            <span
              class="flex size-8 items-center justify-center overflow-hidden rounded-full bg-white text-slate-900"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </span>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-300 ease-in"
      enter-from-class="-translate-y-full"
      leave-to-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
    >
      <div
        v-if="isNavMenuOpen"
        id="nav-full-menu"
        class="relative z-0 min-h-0 w-full flex-1 overflow-y-auto overscroll-y-contain border-b border-white/10 bg-gray-900/95 shadow-lg backdrop-blur-md [-webkit-overflow-scrolling:touch] lg:max-h-[min(70vh,calc(100dvh-5rem))] lg:flex-none lg:shrink-0"
      >
        <div class="w-full px-3 py-8 lg:px-5 lg:py-12">
          <nav
            class="mx-auto grid max-w-6xl grid-cols-1 gap-8 pb-8 text-[calc(0.875rem*1.15)] lg:grid-cols-4 lg:items-start lg:gap-6 lg:pb-10"
            aria-label="Menu principal"
          >
            <div class="text-left lg:min-w-0">
              <h3 class="mb-3 font-semibold tracking-wide text-green-400 uppercase">
                {{ t('navMenu.navigationTitle') }}
              </h3>
              <ul class="space-y-2.5 text-gray-400" role="list">
                <li v-for="item in navLinks" :key="item.key">
                  <RouterLink
                    v-if="item.href !== '#'"
                    :to="item.href"
                    class="inline-block cursor-pointer transition-colors"
                    :class="navLinkClass(item)"
                    :aria-current="navLinkIsActive(item) ? 'page' : undefined"
                    @click="closeNavMenu"
                  >
                    {{ t(item.key) }}
                  </RouterLink>
                  <a
                    v-else
                    href="#"
                    class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                    @click.prevent="closeNavMenu"
                  >
                    {{ t(item.key) }}
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 lg:min-w-0"
              role="link"
              tabindex="0"
              :aria-label="t('nav.services')"
              @click="goToServicesMenu"
              @keydown.enter.prevent="goToServicesMenu"
              @keydown.space.prevent="goToServicesMenu"
            >
              <h3 class="mb-3 font-semibold tracking-wide text-green-400 uppercase">
                {{ t('navMenu.servicesTitle') }}
              </h3>
              <ul class="space-y-2.5 text-gray-400" role="list">
                <li
                  v-for="i in siteTypeIndexes"
                  :key="'st-' + i"
                  class="group flex cursor-pointer flex-row flex-nowrap items-center gap-2"
                >
                  <span class="min-w-0 transition-colors group-hover:text-white">{{
                    t(`navMenu.siteType${i}`)
                  }}</span>
                  <span
                    v-if="i === 1 || i === 2"
                    class="inline-flex shrink-0 items-center rounded-full bg-green-400 px-2 py-0.5 text-[0.7em] leading-none font-bold tracking-wide text-gray-900 uppercase"
                    aria-hidden="true"
                  >
                    {{ t(i === 1 ? 'navMenu.offBadge50' : 'navMenu.offBadge30') }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="text-left lg:min-w-0">
              <h3 class="mb-3 font-semibold tracking-wide text-green-400 uppercase">
                {{ t('navMenu.helpTitle') }}
              </h3>
              <ul class="space-y-2.5 text-gray-400" role="list">
                <li v-for="item in helpMenuLinks" :key="item.key">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                    @click="closeNavMenu"
                  >
                    {{ t(item.key) }}
                  </RouterLink>
                  <a
                    v-else-if="!item.whatsapp"
                    :href="item.href"
                    class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                    @click="closeNavMenu"
                  >
                    {{ t(item.key) }}
                  </a>
                  <a
                    v-else
                    href="https://api.whatsapp.com/send?phone=5519983904078"
                    class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                    @click.prevent="openHelpWhatsAppAndCloseMenu"
                  >
                    {{ t(item.key) }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-left lg:min-w-0">
              <h3 class="mb-3 font-semibold tracking-wide text-green-400 uppercase">
                {{ t('navMenu.socialTitle') }}
              </h3>
              <ul class="space-y-2.5 text-gray-400" role="list">
                <li v-for="item in socialMenuLinks" :key="item.id">
                  <a
                    :href="item.href"
                    class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                    @click="closeNavMenu"
                  >
                    {{ t(item.key) }}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Transition>
  </div>
</template>
