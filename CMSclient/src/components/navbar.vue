<script>
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";
import NavUsername from "./navUsername.vue";
import SignUp from "./signUp.vue"
import Login from "./log_in.vue"
import Logout from "./logout.vue"

export default {
  computed: {
    ...mapState(useUserStore, ['isLogin']),
    ...mapState(useUserStore, ['role']),
  },
  methods: {
  },
  components: {
    NavUsername,
    SignUp,
    Login,
    Logout
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
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
        <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
          <RouterLink to="/" class="nav-link" href="#">About</RouterLink>
          <li class="nav-item">
            <RouterLink to="/services" class="nav-link" href="#">Services</RouterLink>
          </li>
          <li class="nav-item">
            <Login v-if="isLogin === false">Login</Login>
            <Logout v-if="isLogin">logout</Logout>
          </li>
        </ul>
        <ul v-if="isLogin" class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li>
            <RouterLink to="/order" class="nav-link" href="#">Create Order</RouterLink>
          </li>
          <li>
            <a v-if="role === 'customer'" class="nav-link" href="#">My Order History</a>
            <a v-if="role === 'admin'" class="nav-link" href="#">Order Log</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
