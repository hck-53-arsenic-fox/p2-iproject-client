import { defineStore } from "pinia";
import axios from "axios";
import { auth, firebaseAuth, provider } from "../auth/auth.service";
import { BASE_URL, toast } from "../main";
import { signInWithPopup } from "@firebase/auth";
import io from "socket.io-client";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    jokes: {},
    text: "",
    messages: [],
    userForum: "",
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
    async googleLogin() {
      try {
        const result = await signInWithPopup(auth, provider);

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
          firebaseAuth.GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        const idToken = await auth.currentUser.getIdToken(true);

        const { data } = await axios({
          url: BASE_URL + "/users/login-google",
          method: "POST",
          data: { token: idToken },
        });

        toast.info("Success Login");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", user.email);
        this.router.push({ name: "homePage" });
        this.isLogin = true;
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
    async dadJokes() {
      try {
        const { data } = await axios({
          url: "https://dad-jokes.p.rapidapi.com/random/joke",
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "93430b953amsh6809a06f7d4145cp114edejsn8d1945bb2213",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
          },
        });

        this.jokes = {
          setup: data.body[0].setup,
          punchline: data.body[0].punchline,
        };
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    joinForum() {
      this.socket = io(BASE_URL);
      // this.socket.emit('test')
      this.socket.on("connection", (data) => {
        console.log(data);
      });

      this.socket.on("messageReceived", (data) => {
        this.messages = this.messages.concat(data);
      });
    },
    sendMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: localStorage.getItem("email"),
      };

      this.userForum = message.user;

      this.socket.emit("message", message);
      this.text = "";
    },
  },
});
