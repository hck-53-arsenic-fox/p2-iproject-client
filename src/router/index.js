import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import ChatPage from "../views/ChatPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "chat",
			component: ChatPage,
			beforeEnter: (to, from, next) => {
				if (!localStorage.getItem("userInfo")) {
					next("/login");
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
