import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/Me.vue')
    },
    {
      path: '/yo',
      name: 'yo',
      component: () => import('../views/Yo.vue')
    },
    {
      path: '/poke/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    }
  ]
})

export default router
