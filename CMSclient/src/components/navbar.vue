<script>
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";
import NavUsername from "./navUsername.vue";
import SignUp from "./signUp.vue"
import Login from "./log_in.vue"

export default {
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
  },
  components: {
    NavUsername,
    SignUp,
    Login
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark" style="z-index: 10">
    <div class="container">
      <img src="../assets/sneakers_logo-removebg-preview.png" alt="" witdh="70" height="56" />
      <SignUp v-if="isLogin === false">Sign Up</SignUp>
      <NavUsername v-else-if="isLogin"></NavUsername>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-2" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <RouterLink to="/" class="nav-link" href="#">About</RouterLink>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <Login v-if="isLogin === false">Login</Login>
            <a v-if="isLogin" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
        <ul v-if="isLogin" class="navbar-nav mb-2 mb-lg-0">
          <li>
            <a class="nav-link" href="#">Create Order</a>
          </li>
          <li>
            <a class="nav-link" href="#">Check Order Status</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
