// Composables
import { createRouter, createWebHistory } from 'vue-router'
import admin from '@/views/admin/routes'
import website from '@/views/website/routes'

const routes = [
  website
  // ...admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
