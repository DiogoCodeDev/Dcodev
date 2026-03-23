import { createI18n } from 'vue-i18n'
import ptBR from './locales/pt-br.json'
import enUS from './locales/en-us.json'
import es from './locales/es.json'
import zhCN from './locales/zh-cn.json'
import frFR from './locales/fr-fr.json'

export const LOCALE_STORAGE_KEY = 'dcodev-locale'

export const SUPPORTED_LOCALES = ['pt-BR', 'en-US', 'es', 'zh-CN', 'fr-FR']

function readStoredLocale() {
  if (typeof localStorage === 'undefined') return 'pt-BR'
  const s = localStorage.getItem(LOCALE_STORAGE_KEY)
  return SUPPORTED_LOCALES.includes(s) ? s : 'pt-BR'
}

export function htmlLangFromLocale(code) {
  const m = {
    'pt-BR': 'pt-BR',
    'en-US': 'en-US',
    es: 'es',
    'zh-CN': 'zh-CN',
    'fr-FR': 'fr-FR',
  }
  return m[code] || 'pt-BR'
}

const i18n = createI18n({
  legacy: false,
  locale: readStoredLocale(),
  fallbackLocale: 'pt-BR',
  messages: {
    'pt-BR': ptBR,
    'en-US': enUS,
    es,
    'zh-CN': zhCN,
    'fr-FR': frFR,
  },
})

export default i18n
