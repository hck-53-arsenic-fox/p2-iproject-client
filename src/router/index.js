import { createRouter, createWebHistory } from "vue-router";
import BurgerPrices from "../views/BurgerPrices.vue";
import Details from "../views/Details.vue";
import WorkingTimes from "../views/WorkingTimes.vue";
import AboutPage from "../views/AboutPage.vue";
import LoginPage from "../views/LoginPage.vue";
import { useToast } from "vue-toastification";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BurgerPrices",
      component: BurgerPrices,
    },
    {
      path: "/details",
      name: "CountryDetails",
      component: Details,
    },
    {
      path: "/working-times",
      name: "WorkingTimes",
      component: WorkingTimes,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
  ],
  linkActiveClass: "text-orange-400",
});

router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.access_token;
  const toPageWithAuth = to.path === "/details" || to.path === "/working-times";
  const toLoginPage = to.path === "/login";

  if (isAuthenticated) {
    if (toLoginPage) {
      return { path: "/" };
    }
  } else {
    if (toPageWithAuth) {
      const toast = useToast();
      toast.warning("Login required", { timeout: 3000, hideProgressBar: true });

      return {
        path: "/login",
      };
    }
  }
});

export default router;
