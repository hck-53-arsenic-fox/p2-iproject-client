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
      meta: {
        requiresGuest: true,
      },
      // component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresGuest: true,
      },
      // component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    // check if the user is authenticated
    const isAuthenticated = checkIfAuthenticated();
    if (isAuthenticated) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  } else if (to.matched.some((route) => route.meta.requiresGuest)) {
    // check if the user is authenticated
    const isAuthenticated = checkIfAuthenticated();
    if (!isAuthenticated) {
      next();
    } else {
      next({
        name: "home",
      });
    }
  } else {
    // if the route does not require authentication, just continue to allow the user to visit the route
    next();
  }
});

function checkIfAuthenticated() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return false;
  }
  return true;
}

export default router;
