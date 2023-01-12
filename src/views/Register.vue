<script>
import Header from "../components/Header.vue";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useTravelokalStore } from "../stores/travelokal";

export default {
  data() {
    return {
        registerForm: {
            username: "",
            email: "",
            password: ""
        }
    };
  },
  methods: {
    ...mapActions(useTravelokalStore, ["register"]),
    onSubmit() {
      this.register(this.registerForm);
    },
  },
  components: {
    Header,
  },
};
</script>

<template>
  <section>
    <Header />
  </section>
  <section class="bg-blueGray-50 h-screen">
    <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 mt-44"
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0 mt-10">
          <div class="text-slate-700 text-center mb-3 font-bold">
            <h1>Register</h1>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >Username</label
              ><input
                type="username"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Username"
                v-model="registerForm.username"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >Email</label
              ><input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
                v-model="registerForm.email"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
                >Password</label
              ><input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
                v-model="registerForm.password"
              />
            </div>
            <div class="text-center mt-6">
              <button
                class="bg-slate-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer class="relative pt-8 pb-6 mt-2">
      <div class="container mx-auto px-2">
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-6/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              already have an account ?
              <router-link
                to="/login"
                class="text-blueGray-500 hover:text-gray-800 underline"
                >Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
