<script>
import { mapActions, mapState } from "pinia";
import { useAnimeStore } from "../stores/counter";

export default {
  data() {
    return {
      favoritePost_signIn: "",
      logOut: "",
      link: "",
      link2: "",
      userName: "",
    };
  },
  computed: {
    ...mapState(useAnimeStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAnimeStore, ["handleLogOut"]),
    clickLink() {
      if (this.isLogin) {
        this.favoritePost_signIn = "Sign In";
        this.link = "/login";
        this.link2 = "Sign Up";
        return this.handleLogOut();
      } else {
        return this.$router.push("/register");
      }
    },
  },
  created() {
    if (this.isLogin) {
      this.favoritePost_signIn = "Favorite Posts";
      this.link = "/favoritePosts";
      this.link2 = "Log Out";
      this.userName = localStorage.getItem("userName");
    } else {
      this.favoritePost_signIn = "Sign In";
      this.link = "/login";
      this.link2 = "Sign Up";
    }
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-secondary navbar-light p-3 shadow-sm sticky-top"
  >
    <div class="container">
      <a class="navbar-brand text-white fw-bolder" href="#">Anime Lover </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link mx-2 text-uppercase text-white fw-bold"
              href="#"
              @click.prevent="$router.push('/')"
              ><i class="bi bi-postcard"></i> Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link mx-2 text-uppercase text-white fw-bold "
              href="#"
              @click.prevent="$router.push(link)"
              ><i class="bi bi-postcard-heart"></i>
              {{ this.favoritePost_signIn }}</a
            >
          </li>
          <li class="nav-item" v-if="this.isLogin">
            <a class="nav-link mx-2 text-uppercase text-white fw-bold" href="#"
              ><i class="bi bi-person"></i> Hey,{{ userName }}!</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link mx-2 text-uppercase text-white fw-bold"
              href="#"
              @click.prevent="clickLink"
              ><i class="bi bi-door-open"></i> {{ link2 }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
