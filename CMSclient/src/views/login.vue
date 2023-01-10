<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    async custLogin() {
      this.login(this.dataLogin);
    },
  },
};
</script>

<template>
  <!-- login page -->
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="display-4 fontstyle">Welcome to Clean My Sneakers</h1>
        </div>
      </div>
    </div>

    <div class="container-fluid d-flex justify-content-around mt-5">
      <div class="card1 shadow-2-strong col-md-4" style="border-radius: 1rem">
        <div class="col">
          <div class="card-body text-center">
            <h4 class="mt-2">Sign in</h4>
            <hr />

            <div class="form-outline px-5">
              <input
                type="email"
                id="email"
                class="form-control form-control-sm"
                v-model="dataLogin.email"
              />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div class="form-outline px-5">
              <input
                type="password"
                id="password"
                class="form-control form-control-sm"
                v-model="dataLogin.password"
              />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            <button
              @click.prevent="custLogin"
              class="btn btn-outline-primary btn-sm btn-block border text-white"
              type="submit"
            >
              Login
            </button>
            <hr />
            <p>Or sign in with:</p>
            <div class="d-flex justify-content-center text-center mb-4 pt-1">
              <a href="#!" class="text-white me-4"
                ><i class="fab fa-facebook-f fa-lg"></i
              ></a>
              <a href="#!" class="text-white"
                ><i class="fab fa-google fa-lg"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End login page -->
</template>
