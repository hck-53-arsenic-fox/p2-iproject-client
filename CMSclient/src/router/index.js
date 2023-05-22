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
import NotFound from "../views/404notFound.vue";

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
    path: "/update/:id",
    name: "Update",
    component: Update,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')

  if(to.name === 'Login') {
    if (token) {
      next ({ path: '/'})
    } else {
      next()
    }
  } else if (to.name === 'Register') {
    if(token) {
      next({path: '/'})
    } else {
      next()
    }
  } else if (to.name === 'Order') {
    if(!token) {
      next({path: '/'})
    } else {
      next()
    }
  } else if (to.name === 'MyOrderHistory') {
    if(!token) {
      next({path: '/'})
    } else {
      next()
    }
  } else if (to.name === 'OrderDetail') {
    if(!token) {
      next({path: '/'})
    } else {
      next()
    }
  } else if (to.name === 'OrderLog') {
    if(!token) {
      next({path: '/'})
    }else {
      if (role !== 'admin'){
        next({path: '/'})
      } else {
        next()
      }
    }
  } else if (to.name === 'Update') {
    if(!token) {
      next({path: '/'})
    }else {
      if (role !== 'admin'){
        next({path: '/'})
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router;
