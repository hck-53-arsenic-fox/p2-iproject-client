import axios from "axios";
import { defineStore } from "pinia";

const origin = "http://localhost:5000";

import { Loading, Notify, Report } from "notiflix";

Notify.init({ clickToClose: true });

export const useAppStore = defineStore("app", {
	state() {
		return {
			userInfo: "",
			openModal: false,
			display: "none",
			openSideBar: false,
			chatList: "",
		};
	},
	getters: {},
	actions: {
		errorHandler(error) {
			Report.failure("Login Error", error.response.data.message, "Aww");
			Loading.remove();
		},
		setUserInfo() {
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			this.userInfo = userInfo;
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

		async fetchChatList() {
			try {
				const { data } = await axios({
					method: "GET",
					url: origin + `/api/chat`,
					headers: {
						authorization:
							"Bearer " +
							JSON.parse(localStorage.getItem("userInfo")).token,
					},
				});
				this.chatList = data;
				console.log(this.chatList);
			} catch (error) {
				console.log(error);
			}
		},

		toggleSidebar() {
			this.openSideBar = !this.openSideBar;
		},

		toggleModal() {
			this.openModal = !this.openModal;
			if (this.display === "none") {
				this.display = "block";
			} else {
				this.display = "none";
			}
		},

		logout() {
			localStorage.clear();
			this.router.push("/login");
		},
	},
});
