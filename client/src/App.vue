<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
    name: "App",
    components: { Navbar }
};
</script>

<template>
  <Navbar/>
  <RouterView />
</template>
