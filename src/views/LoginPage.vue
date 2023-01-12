<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["firebaseLogin", "firebaseRegister","googleLogin" ]),
    goToRegister() {
      if (this.$route.name == "loginPage") {
        this.$router.push({ name: "registerPage" });
      } else if (this.$route.name == "registerPage") {
        this.$router.push({ name: "loginPage" });
      }
    },
    submitData(val) {
      if (this.$route.name == "loginPage") {
        this.firebaseLogin(val);
      } else if (this.$route.name == "registerPage") {
        this.firebaseRegister(val);
      }
    },
  },
};
</script>

<template>
  <!-- LOGIN PAGE -->
  <section class="px-12 py-4">
    <div class="text-2xl">
      <RouterLink to="/" href="">
        <strong class="text-red-600">GAME</strong
        ><span class="font-semibold">RENT</span>
      </RouterLink>
    </div>
    <div class="w-fit mx-auto mt-24">
      <form @submit.prevent="submitData(userData)">
        <div  @click.prevent="googleLogin"
          v-if="this.$route.name == 'loginPage'"
          class="cursor-pointer rounded-xl w-[280px] px-3 py-2 border-[3px] border-neutral-900 tracking-wider text-center hover:-translate-y-1 flex items-center justify-center"
        >
          <div>
            <img
              src="../assets/img/google_logo.png"
              alt="google-icon"
              width="30"
            />
          </div>
          <p class="font-semibold">Continue with Google</p>
        </div>
        <div v-if="this.$route.name == 'loginPage'" class="text-center p-3">
          or
        </div>
        <div>
          <input
            v-model="userData.email"
            type="text"
            placeholder="Email"
            autocomplete="off"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
          />
        </div>
        <div class="mt-4">
          <input
            v-model="userData.password"
            type="password"
            placeholder="Password"
            autocomplete="off"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 focus:border-red-500 focus:outline-none placeholder:tracking-wider tracking-wider"
          />
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="rounded-xl w-[280px] px-3 py-2 appearance-none border-[3px] border-neutral-900 bg-neutral-900 tracking-wider text-white hover:-translate-y-1"
          >
            <strong v-if="this.$route.name == 'loginPage'">Login</strong>
            <strong v-if="this.$route.name == 'registerPage'">Register</strong>
          </button>
        </div>
        <div
          v-if="this.$route.name == 'loginPage'"
          class="mt-3 text-center text-sm"
        >
          No Account ?
          <a
            @click.prevent="goToRegister"
            href=""
            class="text-blue-500 hover:underline"
            >Create One</a
          >
        </div>
        <div
          v-if="this.$route.name == 'registerPage'"
          class="mt-3 text-center text-sm"
        >
          Already have account ?
          <a
            @click.prevent="goToRegister"
            href=""
            class="text-blue-500 hover:underline"
            >Login</a
          >
        </div>
      </form>
    </div>
  </section>
</template>
