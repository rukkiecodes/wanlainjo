// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/About.vue'),
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/community/Community.vue'),
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('@/views/courses/Courses.vue'),
  },
  {
    path: '/register/:title',
    name: 'courseRegister',
    component: () => import('@/views/courseRegister/Register.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/Contact.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Register.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
