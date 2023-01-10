import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ConsolePage from '../views/ConsolePage.vue'
import GamePage from '../views/GamePage.vue'
import CartPage from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/console',
      name: 'consolePage',
      component: ConsolePage
    },
    {
      path: '/games',
      name: 'gamePage',
      component: GamePage
    },
    {
      path: '/cart',
      name: 'cartPage',
      component: CartPage
    },
    
  ]
})

export default router
