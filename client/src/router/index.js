import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventView from "../views/EventView.vue";
import RankingView from "../views/RankingView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import FighterDetailView from "../views/FighterDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/event",
      name: "event",
      component: EventView,
    },
    {
      path: "/ranking",
      name: "ranking",
      component: RankingView,
    },
    {
      path: "/fighter/:id",
      name: "fighterDetail",
      component: FighterDetailView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (localStorage.access_token && (to.name === 'login' || to.name === 'register')) {
    return { name: 'home' }
  }

  if (!localStorage.access_token && to.name === 'event') {
    return { name: 'home' }
  }
})

export default router;
