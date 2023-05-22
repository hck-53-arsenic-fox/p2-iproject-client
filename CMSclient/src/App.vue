<script>
import { RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar></Navbar>
  <RouterView/>
</template>