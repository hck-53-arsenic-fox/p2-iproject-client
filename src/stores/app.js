import axios from "axios";
import { defineStore } from "pinia";

const origin = "http://localhost:5000";

import { Loading, Notify, Report } from "notiflix";

Notify.init({ clickToClose: true });

export const useAppStore = defineStore("app", {
	state() {
		return {};
	},
	getters: {},
	actions: {
		errorHandler(error) {
			Report.failure("Login Error", error.response.data.message, "Aww");
			Loading.remove();
		},
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
				this.router.push("/");
				Loading.remove();
			} catch (error) {
				this.errorHandler(error);
			}
		},

		async handleRegister(name, email, password, pic) {
			try {
				Loading.circle();
				const { data } = await axios({
					method: "POST",
					url: origin + "/api/user",
					data: {
						name,
						email,
						password,
						pic,
					},
				});

				Notify.success("Registration Success");

				localStorage.setItem("userInfo", JSON.stringify(data));
				this.router.push("/");
				Loading.remove();
			} catch (error) {
				this.errorHandler(error);
			}
		},
	},
});
