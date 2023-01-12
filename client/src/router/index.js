import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import BillDetailPage from '../views/BillDetailPage.vue'
import ChatPage from '../views/ChatPage.vue'
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
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage
    },
    {
      path: '/bill',
      name: 'BillDetailPage',
      component: BillDetailPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  const accessTokenLogin = localStorage.getItem('access_token')

  if (to.name === 'login' || to.name === 'register') {
    if (accessTokenLogin) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else if (to.name === 'home') {
    if (accessTokenLogin) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else if (to.name === 'ChatPage') {
    if (accessTokenLogin) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else if (to.name === 'BillDetailPage') {
    if (accessTokenLogin) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
});


export default router