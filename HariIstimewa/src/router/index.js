import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Tema1 from "../views/Tema-1.vue";
import Tema2 from "../views/Tema-2.vue";
import Dashboard from "../views/Dashboard.vue";
import EditPage from "../views/EditPage.vue";
import Preview from "../views/Preview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/dashboard/edit",
      name: "edit",
      component: EditPage,
    },
    {
      path: "/dashboard/view",
      name: "view",
      component: Preview,
    },
    {
      path: "/t1/:id",
      name: "tema-1",
      component: Tema1,
    },
    {
      path: "/t2/:id",
      name: "tema-2",
      component: Tema2,
    },
  ],
});




// router.beforeEach((to, from, next) => {
//   const access_token = localStorage.getItem('access_token')
//   if (to.name === 'login') {
//     if (access_token) {
//       next({ name: 'dashboard' })
//     } else {
//       next()
//     }
//   }})
//  else if (to.name === 'dashboard') {
//     if (!access_token) {
//       next({ name: 'home' })
//     } else {
//       next()
//     }
//   } 

// })

export default router;
