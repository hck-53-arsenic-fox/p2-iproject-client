<script>
import { RouterView } from "vue-router";
import { mapWritableState } from "pinia";
import { useCounterStore } from "./stores/counter";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>
