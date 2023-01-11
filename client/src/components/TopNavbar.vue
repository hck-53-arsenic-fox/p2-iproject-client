<script>
import { useAppStore } from "@/stores/app";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(useAppStore, ["checkAuth"]),
    // collapseNavbar() {
    //   $("#navbarNav").collapse("hide");
    // },
  },
  computed: {
    ...mapState(useAppStore, ["isLoggedIn", "handleLogout"]),
  },
  mounted() {
    this.checkAuth();
  },
};
</script>

<template>
  <nav class="mb-4 pb-3 navbar navbar-expand-lg navbar-dark bg-dark">
    <RouterLink to="/" class="nav-link" active-class="router-link-exact-active">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" />
    </RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul v-if="this.isLoggedIn" class="navbar-nav">
        <li class="nav-item">
          <RouterLink
            to="/"
            class="nav-link"
            active-class="router-link-exact-active"
            @click="collapseNavbar"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/wallets"
            class="nav-link"
            active-class="router-link-exact-active"
            >Wallets</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/transactions"
            class="nav-link"
            active-class="router-link-exact-active"
            >Transactions</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/profile"
            class="nav-link"
            active-class="router-link-exact-active"
            >Profile</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/converter"
            class="nav-link"
            active-class="router-link-exact-active"
            >Currency Converter</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/settings"
            class="nav-link"
            active-class="router-link-exact-active"
            >Settings</RouterLink
          >
        </li>
        <li class="nav-item">
          <a @click.prevent="handleLogout" href="#">Log Out</a>
        </li>
      </ul>
      <ul v-else class="navbar-nav">
        <li class="nav-item">
          <RouterLink
            to="/"
            class="nav-link"
            active-class="router-link-exact-active"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/login"
            class="nav-link"
            active-class="router-link-exact-active"
            >Login</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/register"
            class="nav-link"
            active-class="router-link-exact-active"
            >Register</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/about"
            class="nav-link"
            active-class="router-link-exact-active"
            >About</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar-toggler-icon {
  z-index: 1001;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  position: sticky;
  top: 0px;
  z-index: 1000;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav .logo {
  display: inline;
  margin: 0 2rem 0 0;
}

@media (max-width: 400px) {
  nav {
    text-align: center;
    font-size: 24px;
  }
}
</style>
``
