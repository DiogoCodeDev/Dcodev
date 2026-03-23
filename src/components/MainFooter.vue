<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

function goToServices() {
  router.push('/services')
}

const navLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.budget', href: '/services' },
  { key: 'nav.services', href: '/services' },
]

const siteTypeIndexes = [1, 2, 6, 4, 5, 3]

const helpMenuLinks = [
  { key: 'navMenu.helpItem1', to: { name: 'services', hash: '#faq' } },
  { key: 'navMenu.helpItem2', to: { name: 'services' } },
  { key: 'navMenu.helpItem3', whatsapp: true },
]

const socialMenuLinks = [
  { id: 'ig', key: 'navMenu.socialInstagram', href: 'https://www.instagram.com/diogo.code/' },
  { id: 'in', key: 'navMenu.socialLinkedin', href: 'https://www.linkedin.com/in/allan-code/' },
]

const openWhatsApp = () => {
  const phone = '5519983904078'
  const message = encodeURIComponent(t('whatsapp.prefillHelp'))
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${phone}&text=${message}`
  } else {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }
}
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-gray-900">
    <div
      class="bg-grid-dcodev animate-grid-move-up pointer-events-none absolute inset-0 z-0 motion-reduce:animate-none"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
      <nav
        class="grid grid-cols-1 gap-8 text-[calc(0.875rem*1.15)] lg:grid-cols-4 lg:items-start lg:gap-6"
        aria-label="Footer"
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
                class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                {{ t(item.key) }}
              </RouterLink>
              <a
                v-else
                href="#"
                class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                @click.prevent
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
          @click="goToServices"
          @keydown.enter.prevent="goToServices"
          @keydown.space.prevent="goToServices"
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
              >
                {{ t(item.key) }}
              </RouterLink>
              <a
                v-else-if="!item.whatsapp"
                :href="item.href"
                class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
              >
                {{ t(item.key) }}
              </a>
              <a
                v-else
                href="https://api.whatsapp.com/send?phone=5519983904078"
                class="inline-block cursor-pointer text-gray-400 transition-colors hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
                @click.prevent="openWhatsApp"
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
              >
                {{ t(item.key) }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500 lg:mt-12">
        &copy; {{ new Date().getFullYear() }} DCODEV. All rights reserved.
      </div>
    </div>
  </footer>
</template>
