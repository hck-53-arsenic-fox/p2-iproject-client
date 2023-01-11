<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["handleLogin", "handleFacebookLogin"]),

    handleFormSubmit() {
      this.handleLogin({ email: this.email, password: this.password });
    },

    listenToSuccessfulFBLogin() {
      window.fbAsyncInit = function () {
        FB.Event.subscribe("auth.statusChange", (response) => {
          if (response.status === "connected") {
            // console.log("Access token: ", response.authResponse.accessToken);
            const accessTokenFromFacebook = response.authResponse.accessToken;
            this.handleFacebookLogin(accessTokenFromFacebook);
          }
        });
      };
    },
  },
  computed: {},
  mounted() {
    this.listenToSuccessfulFBLogin();
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
