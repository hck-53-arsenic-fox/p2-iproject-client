import { createRouter, createWebHistory } from "vue-router";
import About from "../views/aboutPage.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
