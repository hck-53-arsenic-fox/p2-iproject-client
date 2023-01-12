import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'
import CartView from '../views/CartView.vue'
import WishlistView from '../views/WishlistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },    
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/products/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name === 'cart' || !localStorage.access_token && to.name === 'wishlist') {
    return { name: 'login' }
  } else if( localStorage.access_token && to.name === 'login' ) {
    return { name: 'home' }
  }
})

export default router
