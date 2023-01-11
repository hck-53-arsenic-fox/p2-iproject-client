import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
			beforeEnter: (to, from, next) => {
				if (!localStorage.getItem("userInfo")) {
					router.push("/login");
				} else {
					next();
				}
			},
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
	],
});

export default router;
