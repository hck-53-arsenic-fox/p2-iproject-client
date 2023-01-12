<script>
import { useCounterStore } from "../stores/counter";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogin", "googleLogin"]),
    submitLogin() {
      this.handleLogin(this.user);
      this.user.email = "";
      this.user.password = "";
    },
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="card m-0 p-0 shadow" style="width: 30rem">
        <div class="card-header bg-warning border bg-opacity-50">Login</div>
        <div class="card-body">
          <form @submit.prevent="submitLogin">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email"
                v-model="user.email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="user.password"
              />
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary" type="submit">Login</button>
              <RouterLink to="/register">
                Don't have an account? Register
              </RouterLink>
            </div>
          </form>
          <div class="d-flex mt-3">
            <GoogleLogin :callback="googleLogin" prompt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
