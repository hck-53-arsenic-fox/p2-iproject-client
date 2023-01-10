<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar v-if="!['login', 'register'].includes($route.name)"/>
  <RouterView />
</template>