import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
  },
  {
    path: '/projects',
    redirect: '/services',
  },
  {
    path: '/selected',
    alias: ['/services/selected'],
    name: 'selected',
    component: () => import('@/views/SelectedView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth', top: 0 })
        }, 80)
      })
    }
    return { top: 0, left: 0 }
  },
})

export default router
