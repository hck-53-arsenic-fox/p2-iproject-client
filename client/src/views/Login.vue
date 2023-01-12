<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogin"]),
  },
};
</script>

<template>
  <!--Login-->
  <div class="container text-center">
  </div>
  <div class="container-fluid d-flex w-75">
    <div id="login" class="container text-center w-50" style="margin-top: 30px;">
      <h2>LOGIN</h2>
      <form
        id="login-form"
        @submit.prevent="handleLogin(this.email, this.password)"
      >
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="login-email"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="login-password"
            placeholder="Enter password here"
            autocomplete="off"
            v-model="password"
          />
        </div>
        <div>
          <button class="btn btn-outline-primary" type="submit">Login</button>
        </div>
        <p class="text-center mt-3 mb-0">
          Don't have an account?
          <a
            href=""
            class="fw-bold"
            @click.prevent="this.$router.push('/register')"
            >Register here!</a
          >
        </p>
      </form>
    </div>
  </div>
  <!--End-Login-->
</template>
