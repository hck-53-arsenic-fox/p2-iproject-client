<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";

export default {
  name: "App",
  components: {
    LoginPage,
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <RouterView />
  <!-- <RegisterPage v-if="isLogin === false" />
  <LoginPage v-if="isLogin === false" /> -->
</template>
