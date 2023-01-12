import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from '../views/home.vue'
import Doctors from '../views/doctors.vue'
import About from '../views/about.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Transactions from '../views/transactions.vue'
import Detail from '../views/detail.vue'
import Form from '../views/formAdd.vue'
import FormEdit from '../views/formEdit.vue'
import Medicine from '../views/mediciene.vue'

const routes = [
  {path: '/', name: 'home', component:Home},
  {path: '/doctors', name: 'doctors', component: Doctors},
  {path: '/about', name: 'about', component: About},
  {path: '/login', name: 'login', component: Login},
  {path: '/register', name: 'register', component: Register},
  {path: '/transactions', name: 'transactions', component: Transactions, beforeEnter:(to, from, next) => {
    if(localStorage.getItem("access_token")){
      next()
    } else {
      next('/login')
    }
  }},
  {path: '/medicine', name: 'medicine', component: Medicine},
  {path: '/doctors/form/:id', name: 'form', component: Form, beforeEnter:(to, from, next) => {
    if(localStorage.getItem("access_token")){
      next()
    } else {
      next('/login')
    }
  }},
  {path: '/transactions/form/:id', name: 'formEdit', component: FormEdit, beforeEnter:(to, from, next) => {
    if(localStorage.getItem("access_token")){
      next()
    } else {
      next('/login')
    }
  }},
  {path: '/doctors/:id', name: 'detail', component: Detail},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;
