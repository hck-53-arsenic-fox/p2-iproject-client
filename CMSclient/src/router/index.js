import { createRouter, createWebHistory } from "vue-router";
import About from "../views/aboutPage.vue";
import Register from "../views/register.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
