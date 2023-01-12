<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      isFBReady: false,
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, [
      "handleLogin",
      "handleError",
      "handleSuccessfulLogin",
    ]),

    async handleFacebookLogin(accessTokenFromFacebook) {
      try {
        const result = await axios({
          method: "POST",
          url: `${
            import.meta.env.VITE_ORIGIN_URL
          }/users/facebook/callback?access_token=${accessTokenFromFacebook}}`,
          headers: {
            Authorization: `Bearer ${accessTokenFromFacebook}}`,
          },
        });

        if (!result?.data) {
          throw new Error("Frontend error: somehow unable to get result.data");
        }

        this.handleSuccessfulLogin(result.data);
      } catch (error) {
        this.handleError(error);
      }
    },

    handleFormSubmit() {
      this.handleLogin({ email: this.email, password: this.password });
    },
  },
  computed: {},
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "2984034805226590",
        cookie: true,
        xfbml: true,
        version: "v15.0",
      });

      FB.AppEvents.logPageView();

      window.FB.Event.subscribe("auth.statusChange", (response) => {
        if (response.status === "connected") {
          const accessTokenFromFacebook = response.authResponse.accessToken;
          fetch(`${import.meta.env.VITE_ORIGIN_URL}/users/facebooklogin`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessTokenFromFacebook}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              Swal.fire(
                "Success",
                `Successfully logged-in using facebook account!`,
                "success"
              );
              localStorage.setItem("access_token", data.accessToken);
              setTimeout(() => {
                window.location.href = "/home";
              }, 3000);
            })
            .catch((error) => {
              Swal.fire("Error", error.message, "error");
            });
        }
      });
    };
    window.fbAsyncInit();
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="handleFormSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          placeholder="email@domain.com"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          placeholder="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="row py-4"><span class="text-center">or</span></div>
      <div
        class="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="login_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  form {
    width: 50%;
    margin: auto;
  }
}
@media (min-width: 992px) {
  form {
    width: 25%;
    margin: auto;
  }
}
</style>
