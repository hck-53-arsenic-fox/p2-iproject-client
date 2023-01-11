import { createRouter, createWebHistory } from "vue-router";
import BurgerPrices from "../views/BurgerPrices.vue";
import Details from "../views/Details.vue";
import WorkingTimes from "../views/WorkingTimes.vue";
import AboutPage from "../views/AboutPage.vue";

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
  ],
  linkActiveClass: "text-orange-400",
});

export default router;
