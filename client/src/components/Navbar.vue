<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(useCounterStore, ["query"]),
    ...mapState(useCounterStore, ['access_token'])
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogout"]),
    fetchHome() {
      this.query = {};
    },
  }
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ path: '/', query: {} }" @click.prevent="fetchHome"
        ><img
          id="NEKO-logo"
          src="../assets/neko.svg"
          alt="NEKO Logo"
          draggable="false"
          height="40"
        />Neko Store</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <div v-if="access_token" >
              <RouterLink class="nav-link mx-2" to="/wishlist"
                ><i class="fas fa-plus-circle pe-2"></i>Wishlist</RouterLink
              >
            </div>
          </li>
          <li class="nav-item">
            <div v-if="access_token" >
              <RouterLink class="nav-link mx-2" to="/cart"
                ><i class="fas fa-bell pe-2"></i>Cart</RouterLink
              >
            </div>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/profile"
                ><i class="fas fa-bell pe-2"></i>Profile</RouterLink
              >
          </li>
          <li class="nav-item ms-3">
            <div v-if="!access_token"   >
              <RouterLink class="btn btn-black btn-rounded" to="/login">Sign in</RouterLink>
            </div>
          </li>
          <li class="nav-item ms-3">
            <div v-if="access_token" >
              <a class="btn btn-black btn-rounded" href="#!" @click.prevent="handleLogout" >Sign out</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->
</template>
