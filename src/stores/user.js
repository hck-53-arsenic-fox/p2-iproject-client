import { defineStore } from "pinia";
import axios from "axios";
import { auth, firebaseAuth } from "../auth/auth.service";

const BASE_URL = "http://localhost:3000";

export const useUserStore = defineStore("user", {
  state: () => ({}),
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
        console.log(data);
      } catch (err) {
        console.log(err.message);
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
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
