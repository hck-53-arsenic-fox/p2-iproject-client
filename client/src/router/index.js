import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterPage.vue'
import RoomView from '../views/RoomView.vue'
import DetailView from '../views/DetailView.vue'
import FoodView from '../views/FoodView.vue'
import CartPage from '../views/CartPage.vue'
import FormIdentity from '../views/FormIdentity.vue'

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
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/verified-identity/:id',
      name: 'formIdentity',
      component: FormIdentity
    },
  ]
})

router.beforeEach(async (to, from)=>{
  if (!localStorage.access_token && to.name === "cart"){
    return {name: "login"}
   } else if ((localStorage.access_token && to.name === "login") || (localStorage.access_token && to.name === "register") ){
    return {name: "home"}
    } else if (!localStorage.access_token && to.name === "formIdentity"){
      return {name: "login"}
    }
})

export default router
