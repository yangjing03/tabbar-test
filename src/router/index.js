import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    path: '/category',
    component: () => import('@/views/category')
  },
  {
    path: '/cart',
    component: () => import('@/views/cart')
  },
  {
    path: '/profile',
    component: () => import('@/views/profile')
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
