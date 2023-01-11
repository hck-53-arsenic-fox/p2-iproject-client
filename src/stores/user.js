import { defineStore } from "pinia";
import axios from "axios";
import { auth, firebaseAuth } from "../auth/auth.service";
import { BASE_URL, toast } from "../main";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    sls: "",
  }),
  actions: {
    async firebaseLogin({ email, password }) {
      try {
        const userCredential = await firebaseAuth.signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await auth.currentUser.getIdToken(true);
        const { data } = await axios({
          url: BASE_URL + "/users/login",
          method: "POST",
          data: { idToken },
        });
        toast.info("Success Login");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", userCredential.user.email);
        this.router.push({ name: "homePage" });
        this.isLogin = true;
      } catch (err) {
        toast.error(err.message);
      }
    },
    async firebaseRegister({ email, password }) {
      try {
        const userCredential =
          await firebaseAuth.createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        toast.success("Please Login First");
        this.router.push({ name: "loginPage" });
      } catch (err) {
        toast.error(err.message);
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.replace({ name: "homePage" });
      toast.error("Logout");
    },
    
  },
});
