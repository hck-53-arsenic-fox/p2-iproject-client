import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
 import Home from '../views/Home.vue'
import AstroPage from '../views/AstroPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/astroPage',
      name: 'AstroPage',
      component: AstroPage
    },

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
// router.beforeEach((to,from)=>{
//   if(!localStorage.getItem("access-token") && to.name === 'Home'){
//     return {name: 'Login'}
//   }else if(localStorage.getItem("access_token") && to.name === 'Login'){
//     return {name: 'Home'}
//   }else if(!localStorage.getItem("access_token") && to.name === 'AstroPage'){
//     return{name: 'Login'}
//   }
// })

export default router
