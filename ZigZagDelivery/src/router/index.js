import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import DestinationPage from "../views/DestinationPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/destination',
      name: 'DestinationPage',
      component: DestinationPage
    },
    {
      path: '/order',
      name: 'OrderDetailPage',
      component: DestinationPage
    }
  ]
})

export default router
