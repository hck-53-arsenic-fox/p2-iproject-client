import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import forgot from '../views/forgot.vue'
import ResetPassword from '../views/ResetPassword.vue'
import History from '../views/History.vue'
import Chart from '../views/Chart.vue'
import Register from '../views/Register.vue'
import DownloadHistory from '../views/DownloadHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next)=> {
        if (localStorage.getItem('token')) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next)=> {
        if (localStorage.getItem('token')) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: forgot,
    },
    {
      path: '/resetpassword/:token',
      name: 'reset',
      component: ResetPassword
    },
    {
      path: '/history/:date',
      name: 'download',
      component: DownloadHistory
    },
    {
      path: '/histories',
      name: 'history',
      component: History,
      beforeEnter: (to, from, next)=> {
        if (localStorage.getItem('token')) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/charts',
      name: 'chart',
      component: Chart,
      beforeEnter: (to, from, next)=> {
        if (localStorage.getItem('token')) {
          next()
        } else {
          next('/login')
        }
      }
    },
  ]
})

export default router
