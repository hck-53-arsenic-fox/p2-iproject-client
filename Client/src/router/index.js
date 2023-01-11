import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CharDetail from "../views/CharDetail.vue";
import SearchAccount from "../views/SearchAccount.vue";
import Verify from "../views/Verify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/characters/:id",
      name: "chara-details",
      component: CharDetail,
    },
    {
      path: "/account",
      name: "account",
      component: SearchAccount,
    },
    {
      path: "/verify",
      name: "verify",
      component: Verify,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("access_token");

//   if (to.name === "login") {
//     if (token) {
//       swal.fire({
//         icon: "error",
//         title: "Already logged in",
//         text: "User is already logged in",
//       });
//       next({ name: "home" });
//     } else {
//       next();
//     }
//   } else if (to.name === "register") {
//     if (token) {
//       swal.fire({
//         icon: "error",
//         title: "Already logged in",
//         text: "User is already logged in",
//       });
//       next({ name: "home" });
//     } else {
//       next();
//     }
//   }
// });

export default router;
