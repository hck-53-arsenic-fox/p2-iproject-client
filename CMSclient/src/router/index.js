import { createRouter, createWebHistory } from "vue-router";
import About from "../views/aboutPage.vue";
import Register from "../views/register.vue";
import Login from "../views/login.vue";
import Services from "../views/servicesPage.vue";

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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
