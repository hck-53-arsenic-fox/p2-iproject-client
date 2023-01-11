<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login"]),
    loginPost() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.login(user);
    },
  },
};
</script>
<template>
  <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div
      class="card border-0"
      style="box-shadow: 0px 4px 8px 0px #757575; border-radius: 0px"
    >
      <div class="row d-flex">
        <div class="col-lg-6">
          <div class="card1 pb-5">
            <div class="row">
              <img
                src="https://i.imgur.com/CXQmsmF.png"
                style="
                  width: 200px;
                  height: 100px;
                  margin-top: 20px;
                  margin-left: 35px;
                "
              />
            </div>
            <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
              <img
                src="https://i.imgur.com/uNGdWHi.png"
                style="width: 360px; height: 280px"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card border-0 px-4 py-5" style="margin: 0px 40px">
            <div class="row mb-4 px-3">
              <h4 class="mb-0 mr-4 mt-2">Login</h4>
            </div>
            <form @submit.prevent="loginPost">
              <div class="row px-3">
                <label class="mb-1"
                  ><h6 class="mb-0 text-sm">Email Address</h6></label
                >
                <input
                  v-model="email"
                  class="mb-4"
                  type="text"
                  name="email"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div class="row px-3">
                <label class="mb-1"
                  ><h6 class="mb-0 text-sm">Password</h6></label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
              <div class="row mb-3 px-3 mt-2">
                <button
                  type="submit"
                  class="btn btn-blue text-center"
                  style="
                    background-color: #1a237e;
                    width: 150px;
                    color: #fff;
                    border-radius: 2px;
                  "
                >
                  Login
                </button>
              </div>
            </form>
            <div class="row mb-4 px-3">
              <small class="font-weight-bold"
                >Don't have an account?
                <RouterLink to="/register">Register</RouterLink></small
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-blue py-4">
        <div class="row px-3">
          <small class="ml-4 ml-sm-5 mb-2"
            >Copyright &copy; 2023. Bed Sheet Store.</small
          >
          <div class="social-contact ml-4 ml-sm-auto">
            <span class="fa fa-facebook mr-4 text-sm"></span>
            <span class="fa fa-google-plus mr-4 text-sm"></span>
            <span class="fa fa-linkedin mr-4 text-sm"></span>
            <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
