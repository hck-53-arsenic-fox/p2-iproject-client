<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="$route.name !== 'login' && $route.name !== 'players' && $route.name !== 'playerprofile'"/>

  <RouterView />
</template>
