import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home')
  },
  {
    path: '/category',
    component: () => import('../views/category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart')
  },
  {
    path: '/profile',
    component: () => import('../views/profile')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
