<script>
import { mapActions } from "pinia";
import { useAnimeStore } from "../stores/counter";

export default {
  data() {
    return {
      dataSignUp: {
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAnimeStore, ["register"]),
  },
};
</script>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="min-height: 100vh; height: 100%"
  >
    <div class="card mb-3 col-md-8 border">
      <div class="row g-0">
        <div class="col-md-7">
          <img
            src="https://wallpapers.com/images/hd/genshin-impact-beautiful-scenery-2lx7afb1zivx6o1d.jpg"
            class="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div class="col-md-5 d-flex justify-content-center bg-white">
          <div class="col-md-8">
            <h1 class="mb-3 fw-bold text-center text-dark mt-4">Sign up</h1>
            <h4 class="text-center">and enjoy our content</h4>
            <form action="" @submit.prevent="register(dataSignUp)">
              <label for="userName" class="form-label mt-5"
                ><h2>Username</h2></label
              >
              <input
                type="text"
                class="form-control"
                id="userName"
                v-model="this.dataSignUp.userName"
              />
              <label for="email" class="mt-5"><h2>Email</h2></label>
              <input
                type="email"
                class="form-control"
                name="email"
                v-model="this.dataSignUp.email"
              />
              <label for="password" class="mt-5"><h2>Password</h2></label>
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="this.dataSignUp.password"
              />
              <button class="btn btn-dark mt-5 form-control mb-2">
                <h2>Sign Up</h2>
              </button>
              <!-- <div class="d-flex justify-content-center mt-3">
                <GoogleLogin :callback="isgoogleSignIn" />
              </div> -->
              <div
                class="d-flex justify-content-center mt-4"
                style="color: #393f81"
              >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
