import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'

const routes= [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
export default router
