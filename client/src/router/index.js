import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:id",
      name: "productscatgories",
      component: () => import("../views/ProductCategoriesView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");

  if (to.name === "home") {
    if (access_token) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }

  if (to.name === "login" && to.name === "register") {
    if (!access_token) {
      next();
    } else {
      next({ name: "home" });
    }
  }
});

export default router;
