import { defineStore } from "pinia";
import axios from "axios";
import { auth, firebaseAuth } from "../auth/auth.service";
import { useToast } from "vue-toastification";

const BASE_URL = "http://localhost:3000";
const toast = useToast();

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false
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
        this.router.push({ name: "homePage" });
        this.isLogin = true
      } catch (err) {
        toast.error(err.message);
      }
    },
    async firebaseRegister({ email, password }) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/users/register",
          method: "POST",
          data: { email, password },
        });

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
  },
});
