import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Detail from '../views/detail.vue'


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
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
export default router
