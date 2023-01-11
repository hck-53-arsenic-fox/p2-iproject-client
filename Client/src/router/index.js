import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CharDetail from '../views/CharDetail.vue'
import SearchAccount from '../views/SearchAccount.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/characters/:id',
      name: 'chara-details',
      component: CharDetail
    },
    {
      path: '/account',
      name: 'account',
      component: SearchAccount
    }
  ]
})

export default router
