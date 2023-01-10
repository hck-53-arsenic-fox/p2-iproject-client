<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";
import LoginPage from "./views/LoginPage.vue";

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
  <LoginPage v-if="isLogin === false" />
  <RouterView />
</template>
