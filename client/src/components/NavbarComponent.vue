<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "NavbarComponent",
  computed: {
    ...mapState(useUserStore, ["isLogin", "username"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logoutUser"]),
  },
};
</script>

<template>
  <!-- Navbar Page -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">
          <img
            src="../assets/Ucan_Donut_Logo_wBackGround.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          U Can Donut
        </RouterLink>
      </div>
      <div class="navbar-brand">
        <a v-if="isLogin" class="nav-link disabled" aria-current="page" href="#"
          >Hello, <span style="color: tomato">username</span>!</a
        >
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item" v-if="isLogin === true">
            <RouterLink to="/" class="nav-link">MyBills</RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin === true">
            <a class="nav-link" @click="logoutUser" style="cursor: pointer"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End of Navbar Page -->
</template>
