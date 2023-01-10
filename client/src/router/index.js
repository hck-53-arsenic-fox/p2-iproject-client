import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PlayersPage from '../views/PlayersPage.vue'
import LoginPage from '../views/LoginPage.vue'
import PlayerProfile from '../views/PlayerProfile.vue'
import FollowingPage from '../views/FollowingPage.vue'

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
      path: '/:username/following',
      name: 'following',
      component: FollowingPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')
  if (to.name == 'login' && isAuthenticated) next({ name: 'home' })
  else if (to.name == 'register' && isAuthenticated) next({ name: 'login' })
  // else if (to.name == 'followingPage' && !isAuthenticated) next({ name: 'home' })
  else next()
})

export default router
