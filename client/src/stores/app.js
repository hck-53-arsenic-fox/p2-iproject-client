import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const handleError = (error) => {
  Swal.fire({
    icon: "error",
    title: "Backend server returned an error",
    text: error?.response?.data?.message || error.message,
  });
};

export const useAppStore = defineStore("app", {
  state: () => ({
    isLoggedIn: false,
    transactions: [],
    wallets: [],
  }),
  actions: {
    checkAuth() {
      this.isLoggedIn = !!localStorage.getItem("access_token");
    },

    handleSuccessfulLogin(responseFromBackend) {
      localStorage.setItem("access_token", responseFromBackend.access_token);
      this.isLoggedIn = true;
      Swal.fire({
        icon: "success",
        title: "Successfully logged in!",
      });

      this.router.push("/home");
    },

    async handleLogin(dataLogin) {
      try {
        const result = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_ORIGIN_URL}/users/login`,
          data: dataLogin,
        });

        if (!result?.data?.access_token) {
          throw new Error(
            "Frontend error: somehow unable to get result.data.access_token"
          );
        }

        this.handleSuccessfulLogin(result.data);
      } catch (error) {
        handleError(error);
      }
    },

    async handleLogout() {
      try {
        Swal.fire({
          title: "Are you sure you want to log out?",
          showCancelButton: true,
          confirmButtonText: `Yes`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Successfully logged out!", "", "success");
            localStorage.clear();
            this.checkAuth();
            this.router.push("/");
          }
        });
      } catch (error) {
        handleError(error);
      }
    },
  },
});
