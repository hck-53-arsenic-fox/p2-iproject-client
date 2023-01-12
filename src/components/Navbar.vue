<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
    ...mapWritableState(useCounterStore, ["page_size"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchGames", "logout"]),
    submit() {
      this.page_size = 4;
      this.fetchGames(this.search);
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Game Store</a>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Store</RouterLink>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
        <form class="d-flex" role="search" @submit.prevent="submit">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
