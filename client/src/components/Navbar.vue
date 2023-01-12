<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import { GoogleLogin } from "vue3-google-login";

export default {
  name: "Navbar",
  components: { GoogleLogin },
  methods: {
    ...mapActions(useCounterStore, [
      "logout",
      "handleGoogleLogin",
      "tokenMidTrans",
    ]),
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin", "status"]),
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <img src="../../images/LaNews_Logo.png" width="70" alt="">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="this.$router.push('/')"
                  >Politics</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="this.$router.push('/business')"
                  >Business</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="this.$router.push('/technology')"
                  >Technology</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="this.$router.push('/sports')"
                  >Sports</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button
            type="button"
            class="btn btn-primary me-3"
            @click.prevent="tokenMidTrans"
            v-if="isLogin && status !== 'VIP'"
          >
            Upgrade
          </button>
          <GoogleLogin
            :callback="handleGoogleLogin"
            v-if="!isLogin"
            style="margin-right: 20px"
          />
          <button
            type="button"
            class="btn btn-primary me-3"
            @click.prevent="this.$router.push('/login')"
            v-if="!isLogin"
          >
            Login
          </button>
          <button
            type="button"
            class="btn btn-danger me-3"
            @click.prevent="logout"
            v-if="isLogin"
          >
            Logout
          </button>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>
