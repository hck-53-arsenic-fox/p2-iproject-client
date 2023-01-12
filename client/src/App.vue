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
    ...mapWritableState(useUserStore, ["isLogin", "username"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
      this.username = localStorage.getItem("username");
    }
  },
};
</script>

<template>
  <RouterView />
</template>
