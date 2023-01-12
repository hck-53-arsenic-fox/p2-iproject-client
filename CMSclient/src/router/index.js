import { createRouter, createWebHistory } from "vue-router";
import About from "../views/aboutPage.vue";
import Register from "../views/register.vue";
import Login from "../views/login.vue";
import Services from "../views/servicesPage.vue";
import Order from "../views/orderPage.vue"
import MyOrderHistory from "../views/myOrderHistory.vue"
import OrderDetail from "../views/orderDetail.vue"
import OrderLog from "../views/orderLog.vue"
import Update from "../views/updateOrderStatus.vue"

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
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/history",
    name: "MyOrderHistory",
    component: MyOrderHistory,
  },
  {
    path: "/detail/:id",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/log",
    name: "OrderLog",
    component: OrderLog,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
