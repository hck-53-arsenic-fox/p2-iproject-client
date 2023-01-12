import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PlayersPage from '../views/PlayersPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import PlayerProfile from '../views/PlayerProfile.vue'
import FollowingPage from '../views/FollowingPage.vue'
import UserProfile from '../views/UserProfile.vue'
import TeamsPages from '../views/TeamsPage.vue'
import NotFound from '../views/NotFound.vue'


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
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/players',
      name: 'players',
      component: PlayersPage
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsPages
    },
    {
      path: '/players/:id',
      name: 'playerprofile',
      component: PlayerProfile
    },
    {
      path: '/users/:username',
      name: 'userprofile',
      component: UserProfile
    },
    {
      path: '/users/:username/following',
      name: 'following',
      component: FollowingPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')
  if (to.name == 'login' && isAuthenticated) next({ name: 'home' })
  if (to.name == 'following' && !isAuthenticated) next({ name: 'login' })
  if (to.name == 'userprofile' && !isAuthenticated) next({ name: 'login' })
  else if (to.name == 'register' && isAuthenticated) next({ name: 'login' })
  // else if (to.name == 'followingPage' && !isAuthenticated) next({ name: 'home' })
  else next()
})

export default router
