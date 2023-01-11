import axios from "axios";
import { defineStore } from "pinia";

const origin = "http://localhost:5000";

import { Loading, Notify } from "notiflix";

Notify.init({ clickToClose: true });

export const useAppStore = defineStore("app", {
	state() {
		return {};
	},
	getters: {},
	actions: {
		async handleLogin(loginData) {
			try {
				Loading.circle();

				const { data } = await axios({
					method: "POST",
					url: origin + "/api/user/login",
					data: loginData,
				});

				Notify.success("Login Success");

				localStorage.setItem("userInfo", JSON.stringify(data));
				this.route.push("/");
				Loading.remove();
			} catch (error) {
				Loading.remove();
			}
		},
		async handleRegister(registerData) {},
	},
});
