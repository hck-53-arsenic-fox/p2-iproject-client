import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("access_token")) next({ name: "Home" });
        else next();
      },
    },
    {
      path: "/artist",
      name: "Artist",
      component: () => import("../views/Artist.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/exhibitions",
      name: "Exhibitions",
      component: () => import("../views/Exhibitions.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/Shop.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/useum",
      name: "Useum",
      component: () => import("../views/Useum.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/tour",
      name: "Tour",
      component: () => import("../components/TestPage.vue"),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("access_token")) next({ name: "Login" });
        else next();
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
