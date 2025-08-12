import { createI18n } from 'vue-i18n'
import pt_Br from './locales/pt-br.json'
import en_Us from './locales/en-us.json'
import es_Co from './locales/es-co.json'

const messages = { pt_Br, en_Us, es_Co }

const i18n = createI18n({
  legacy: false,
  locale: 'pt_Br',
  fallbackLocale: 'pt_Br',
  messages,
})

export const loadLocaleMessages = async locale => {
  const messages = await import(`./locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
  i18n.global.locale.value = locale
}

export default i18n
