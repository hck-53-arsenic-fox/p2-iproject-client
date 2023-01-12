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
    };
  },
  methods: {
    ...mapActions(useUserStore, ["registerUser"]),
    register() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        homeNumber: this.homeNumber,
        image: this.changeFile(),
      };
      this.registerUser(user);
    },
    changeFile() {
      return (this.image = this.$refs.file.files[0]);
    },
  },
};
</script>

<template>
  <!-- Register Page -->
  <div
    class="container vh-100 d-flex justify-content-center align-items-center"
    style="
      background-image: url('../../public/image/alan-j-hendry-zVf-R-r3szw-unsplash.jpg');
    "
  >
    <div
      id="registerSection"
      class="mt-2 w-100 border bg-white p-5 rounded-3 shadow"
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
            @change="changeFile"
            type="file"
            ref="file"
            class="form-control"
            id="file_input"
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
