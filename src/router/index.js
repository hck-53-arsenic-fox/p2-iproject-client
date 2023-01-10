import { createRouter, createWebHistory } from "vue-router";
import BurgerPrices from "../views/BurgerPrices.vue";
import Details from "../views/Details.vue";

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
  ],
  linkActiveClass: "text-orange-400",
});

export default router;
