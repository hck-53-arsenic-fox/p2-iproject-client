<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Navbar",
  computed: { ...mapState(useCounterStore, ["isLogin", "name"]) },
  methods: {
    ...mapActions(useCounterStore, ["logout"]),
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #cadedf">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><h3>Bed Sheet Store</h3></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link active" aria-current="page"
            >Home</RouterLink
          >
          <RouterLink
            v-if="isLogin"
            to="/categories"
            class="nav-link active"
            aria-current="page"
            >Categories</RouterLink
          >
        </div>
      </div>
      <div class="d-flex collapse" id="navbarNavAltMarkup">
        <a class="navbar-brand"
          ><h4>Hello {{ name }}</h4></a
        >
        <div v-if="isLogin" class="navbar-nav">
          <button class="btn btn-secondary" @click.prevent="logout">
            Log Out
          </button>
        </div>
        <div v-if="!isLogin" class="navbar-nav">
          <RouterLink class="btn btn-secondary" to="/login">Login</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
