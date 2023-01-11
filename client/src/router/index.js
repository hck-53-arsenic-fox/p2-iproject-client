import { createRouter, createWebHistory } from "vue-router";
import Thumbnail from '../components/Thumb.vue'
import Home from '../views/HomeView.vue'
import Login from '../components/LoginPage.vue'
import Register from '../components/RegisterPage.vue'
import Detail from '../components/Detail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/:id",
      name: "detail",
      component: Detail
    }
  ],
});

export default router;
