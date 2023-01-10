import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import LandingPageView from "../views/LandingPageView.vue";
import RegisterView from "../views/RegisterView.vue";
import WalletsView from "../views/WalletsView.vue";
import TransactionsView from "../views/TransactionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPageView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      // component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      // component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wallets",
      name: "wallet",
      component: WalletsView,
      meta: {
        requiresAuth: true,
      },
      // component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      // component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      // component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
