import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterPage.vue'
import RoomView from '../views/RoomView.vue'
import DetailView from '../views/DetailView.vue'
import FoodView from '../views/FoodView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView
    },
    {
      path: '/room/:id',
      name: 'roomDetail',
      component: DetailView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView
    },
  ]
})

export default router
