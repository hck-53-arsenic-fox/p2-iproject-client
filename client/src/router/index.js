import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../views/HomeSection.vue'
import LoginSection from '../views/LoginSection.vue'
import RegisterSection from '../views/RegisterSection.vue'
import VideoSection from '../views/VideoSection.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSection
    },
    {
      path: '/login',
      name: 'login',
      component:LoginSection,
      beforeEnter: (to, from,next) => {
        const acess_Token = localStorage.getItem("acess_Token")
        if(to.name==='login'){
          if(acess_Token){
            next({name:'home'})
          }
          else{
            next()
          }
        }
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/register',
      name: 'register',
      component:RegisterSection,
      beforeEnter: (to, from,next) => {
        const acess_Token = localStorage.getItem("acess_Token")
        if(to.name==='register'){
          if(acess_Token){
            next({name:'home'})
          }
          else{
            next()
          }
        }
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/video',
      name: 'video',
      component: VideoSection
    }
  ]
})

export default router
