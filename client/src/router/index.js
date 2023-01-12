import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import NewsDetail from "../views/NewsDetail.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/technology",
      name: "technology",
      component: HomeView,
    },
    ,
    {
      path: "/business",
      name: "business",
      component: HomeView,
    },
    ,
    {
      path: "/sports",
      name: "sports",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/politics/:id",
      name: "politicsDetail",
      component: NewsDetail,
    },
    ,
    {
      path: "/business/:id",
      name: "businessDetail",
      component: NewsDetail,
    },
    ,
    {
      path: "/technology/:id",
      name: "technologyDetail",
      component: NewsDetail,
    },
    ,
    {
      path: "/sports/:id",
      name: "sportsDetail",
      component: NewsDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  const status = localStorage.getItem("status");
  if (to.name == "login" && isAuthenticated) next({ name: "home" });
  else if (to.name == "register" && isAuthenticated) next({ name: "home" });
  else if (to.name == "politicsDetail" && status !== "VIP")
    next({ name: "home" });
  else if (to.name == "technologyDetail" && status !== "VIP")
    next({ name: "home" });
  else if (to.name == "sportsDetail" && status !== "VIP")
    next({ name: "home" });
  else if (to.name == "businessDetail" && status !== "VIP")
    next({ name: "home" });
  else next();
});

export default router;
