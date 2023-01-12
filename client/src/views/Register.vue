<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
  },
};
</script>

<template>
  <!--Register-->
  <div class="container text-center"></div>
  <div class="container-fluid d-flex w-75">
    <div
      id="register"
      class="container text-center w-50"
      style="margin-top: 30px"
    >
      <h2>REGISTER</h2>
      <form
        id="register-form"
        @submit.prevent="handleRegister(this.email, this.password)"
      >
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Enter password here"
            autocomplete="off"
            v-model="password"
          />
        </div>
        <div class="mb-3">
          <button class="btn btn-outline-primary" type="submit">
            Register
          </button>
        </div>
        <p class="text-center mt-3 mb-0">
          Back to
          <a
            href=""
            class="fw-bold"
            @click.prevent="this.$router.push('/login')"
            >Login</a
          >
        </p>
      </form>
    </div>
  </div>
  <!--End-Register-->
</template>
