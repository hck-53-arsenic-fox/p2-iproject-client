import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PlayersPage from '../views/PlayersPage.vue'
import LoginPage from '../views/LoginPage.vue'
import PlayerProfile from '../views/PlayerProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: RegisterPage
    // },
    {
      path: '/players',
      name: 'players',
      component: PlayersPage
    },
    {
      path: '/players/:id',
      name: 'playerprofile',
      component: PlayerProfile
    },
    {
      path: '/players/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
  ]
})

export default router
