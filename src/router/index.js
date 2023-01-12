import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ConsolePage from '../views/ConsolePage.vue'
import GamePage from '../views/GamePage.vue'
import CartPage from '../views/CartPage.vue'
import ForumPage from '../views/ForumPage.vue'

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
      path: '/register',
      name: 'registerPage',
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
    {
      path: '/forum',
      name: 'forumPage',
      component: ForumPage
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token")
  if (to.name == 'cartPage' && !isAuthenticated) next({ name: 'homePage' })
  if (isAuthenticated && to.name == 'loginPage') next({ name: 'homePage' })
  else next()
})

export default router
