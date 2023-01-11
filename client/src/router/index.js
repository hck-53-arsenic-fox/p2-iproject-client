import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import getStarted from '../views/getStarted.vue'
import detail from '../views/detail.vue'
import form from '../views/form.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

//! Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.name === 'register') {
    if (localStorage.access_token) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else if (to.name === 'form') {
    if (!localStorage.access_token) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

//? Twitter Login


export default router
