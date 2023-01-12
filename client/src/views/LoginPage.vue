<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    NavbarComponent,
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser"]),
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.loginUser(user);
    },
  },
};
</script>

<template>
  <NavbarComponent />
  <!-- Login -->
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="
      background-image: url('../../public/image/zero-take-WvHrrR1C5Po-unsplash.jpg');
      height: 100vh;
    "
  >
    <div class="border w-50 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col align-self-center">
          <form @submit.prevent="login">
            <div class="mb-3">
              <img
                src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png"
                alt="logo-h8"
                class="mb-4"
                width="200px"
              />
              <h5 class="mb-4">Sign in to your account</h5>
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Login -->
</template>
