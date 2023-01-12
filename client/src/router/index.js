import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import DetailMovie from '../views/DetailMovie.vue'
import Theater from '../views/Theater.vue'
import DetailTheater from '../views/DetailTheater.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import LayoutRoom from '../views/LayoutRoom.vue'
import CommingSoon from '../views/CommingSoon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/movie/:id',
      name: 'moviedetail',
      component: DetailMovie
    },
    {
      path: '/theater',
      name: 'theater',
      component: Theater
    }, 
    {
      path: '/theater/:id',
      name: 'detailtheater',
      component: DetailTheater
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
      path: '/checkout/:id', 
      name: 'checkout', 
      component: LayoutRoom
    }, 
    {
      path: '/commingsoon', 
      name: 'commingsoon', 
      component: CommingSoon
    }
  ]
})

export default router
