import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import TeamPage from '../views/TeamPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AboutSubscribe from '../views/AboutSubscribe.vue'
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
      path: '/teams',
      name: 'teamPage',
      component: TeamPage
    },
    {
      path: '/about-subscribe',
      name: 'subscribe',
      component: AboutSubscribe
    },
    { 
      path: '/:catchAll(.*)', 
      name: 'NotFound', 
      component: NotFound 
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else if (to.name == "register" && isAuthenticated) next({ name: "home" });
  else if (to.name == "teamPage" && !isAuthenticated) next({ name: "login" });
  else if (to.name == "home" && !isAuthenticated) next({ name: "login" });
  else next();
});

export default router
