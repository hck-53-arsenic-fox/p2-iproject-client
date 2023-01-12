<script>
import { mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useCounterStore } from "./stores/counter";

export default {
  components: {
    Navbar,
  },
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
