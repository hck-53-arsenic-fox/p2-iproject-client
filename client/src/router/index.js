import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import getStarted from '../views/getStarted.vue'
import detail from '../views/detail.vue'
import form from '../views/form.vue'

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
    },
    {
      path: '/resorts/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/add',
      name: 'form',
      component: form
    }

    //! Add more routes here
  ]
})

export default router
