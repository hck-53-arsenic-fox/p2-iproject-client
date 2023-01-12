<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";
import Swal from "sweetalert2";
import router from "@/router";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["handleRegister", "handleFacebookLogin"]),

    handleFormSubmit() {
      this.handleRegister({ email: this.email, password: this.password });
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
              router.push("/transactions");
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
        <label for="name" class="form-label">Name</label>
        <input
          type="name"
          placeholder="e.g. John Doe"
          class="form-control"
          id="name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          placeholder="e.g. foo@bar.com"
          class="form-control"
          id="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          placeholder="e.g. Abc123@#"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="row"><span class="text-center">or</span></div>
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
