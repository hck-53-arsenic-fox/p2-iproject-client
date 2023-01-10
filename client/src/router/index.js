import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import getStarted from '../views/getStarted.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'getStarted',
      component: getStarted
    },
    {
      path: '/resorts',
      name: 'home',
      component: home
    }

    //! Add more routes here
  ]
})

export default router
