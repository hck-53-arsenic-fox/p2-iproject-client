import axios from "axios";
import { defineStore } from "pinia";
const baseUrl = "https://lanews-production.up.railway.app";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    status: "",
    technology: [],
    technologyById: {},
    politics: [],
    politicsById: {},
    business: [],
    businessById: {},
    sports: [],
    sportsById: {},
  }),
  actions: {
    async handleRegister(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/register`,
          data: { email, password },
        });
        this.router.push("/login");
        Toastify({
          text: "Succes Register",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000,
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message[0]}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async handleLogin(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: { email, password },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("status", data.status);
        this.status = localStorage.getItem("status");
        this.isLogin = true;
        this.router.push("/");
        Toastify({
          text: "Succes Login",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000,
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async handleGoogleLogin(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/loginGoogle`,
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("status", data.status);
        this.status = localStorage.getItem("status");
        this.isLogin = true;
        this.router.push("/");
        Toastify({
          text: "Succes Login",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000,
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsTechnology() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsTechnology`,
        });
        this.technology = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsTechnologyById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsTechnology/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.technologyById = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsPolitics() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsPolitics`,
        });
        this.politics = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsPoliticsById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsPolitics/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.politicsById = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsBusiness() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsBusiness`,
        });
        this.business = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsBusinessById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsBusiness/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.businessById = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsSports() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsSports`,
        });
        this.sports = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async newsSportsById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/newsSports/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.sportsById = data;
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async upgradeStatus() {
      try {
        await axios({
          method: "PATCH",
          url: `${baseUrl}/upgrade`,
          data: {
            status: "VIP",
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        localStorage.setItem("status", "VIP");
        Toastify({
          text: "Succes Upgrade Status",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 3000,
        }).showToast();
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async tokenMidTrans() {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/midtrans`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const callback = this.upgradeStatus;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            callback();
          },
        });
        this.router.push("/");
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: "linear-gradient(to right, #FF0000, #1A0000)",
          },
          duration: 3000,
        }).showToast();
      }
    },

    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
      Toastify({
        text: "Succes Logout",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        duration: 3000,
      }).showToast();
    },
  },
});
