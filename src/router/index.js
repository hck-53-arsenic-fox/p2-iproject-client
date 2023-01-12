import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue"
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import BookMark from '../views/Bookmark.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("access_token")) {
          Swal.fire({
            icon: "error",
            title: 'You already logged in',
          });
          next({ name: "home" })
        } else {
          next();
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookMark,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("access_token")) {
          next();
        }
        else {
          Swal.fire({
            icon: "error",
            title: 'You need to login first',
          });
          next({ name: "home" }); 
        }
      },
    }
  ],
});

export default router;
