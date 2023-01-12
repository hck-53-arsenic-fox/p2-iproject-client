<script>
import { mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin", "name"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
      this.name = localStorage.getItem("name");
    }
  },
};
</script>

<template>
  <!-- <Navbar /> -->
  <div class="container-fluid">
    <Navbar />
    <RouterView />
  </div>
</template>
