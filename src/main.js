import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n'
import './style.css'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  once: false,
  offset: 100,
})
