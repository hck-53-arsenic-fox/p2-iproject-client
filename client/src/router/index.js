import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/artist",
      name: "Artist",
      component: () => import("../views/Artist.vue"),
    },
    {
      path: "/exhibitions",
      name: "Exhibitions",
      component: () => import("../views/Exhibitions.vue"),
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/Shop.vue"),
    },
    {
      path: "/useum",
      name: "Useum",
      component: () => import("../views/Useum.vue"),
    },
    {
      path: "/tour",
      name: "Tour",
      component: () => import("../components/TestPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
