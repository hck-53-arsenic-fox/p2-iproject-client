<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      homeNumber: "",
      image: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["registerUser"]),
    register() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        homeNumber: this.phoneNumber,
        image: this.address,
      };
      this.registerUser(user);
    },
  },
};
</script>

<template>
  <!-- Register Page -->
  <div
    class="container vh-100 d-flex justify-content-center align-items-center"
  >
    <div
      id="registerSection"
      class="mt-2 w-100 border border-dark p-5 rounded-3"
      style="max-width: 500px"
    >
      <h1 class="fw-bold text-center">Register to NeighborHud</h1>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="registerUsername" class="form-label">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="register-username"
            placeholder="Enter your username ..."
          />
        </div>
        <div class="mb-3">
          <label for="register-email" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Enter your email ..."
          />
        </div>
        <div class="mb-3">
          <label for="register-password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Enter your password ..."
          />
        </div>
        <div class="mb-3">
          <label for="register-phoneNumber" class="form-label"
            >Home Number</label
          >
          <input
            v-model="homeNumber"
            type="text"
            class="form-control"
            id="register-phoneNumber"
            placeholder="Enter your home number ..."
          />
        </div>
        <div class="mb-3">
          <label for="register-address" class="form-label">Photo</label>
          <input
            v-model="image"
            type="text"
            class="form-control"
            id="register-address"
            placeholder="Enter your photo ..."
          />
        </div>
        <div class="mt-5 d-flex justify-content-center">
          <button
            type="button"
            @click="$router.push('/')"
            class="btn btn-warning me-3"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End of Register Page -->
</template>
