import { createRouter, createWebHistory } from 'vue-router'
// import ComponentView from '@/views/ComponentView.vue'
// import ComponentView2 from '@/views/ComponentView2.vue'

const routes = [
  //   { path: '/', name: 'RouteName', component: ComponentView },
  //   { path: '/routename2', name: 'RouteName2', component: () => import('@/views/ComponentView2.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
