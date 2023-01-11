import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import TeamPage from '../views/TeamPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

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
      path: '/teams',
      name: 'teamPage',
      component: TeamPage
    }
  ]
})

router.beforeEach((to,from,next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else next()
})

export default router
