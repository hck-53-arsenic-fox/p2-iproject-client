<script>
import NavbarComponentVue from "./components/Navbar.vue";
import { mapWritableState } from "pinia";
import { useAnimeStore } from "./stores/counter";
export default {
  name: "App",
  computed: {
    ...mapWritableState(useAnimeStore, ["isLogin","subscribes"]),
  },
  components: {
    NavbarComponentVue,
  },
  created() {
    if (localStorage.getItem("acess_Token")) {
      this.isLogin=true
    }
    else{
      this.isLogin=false
    }
  },
};
</script>

<template>
  <NavbarComponentVue v-if="$route.name !== 'login'" />
  <RouterView />
</template>
