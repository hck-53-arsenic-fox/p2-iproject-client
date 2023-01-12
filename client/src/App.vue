<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="$route.name !== 'login' && $route.name !== 'register' && $route.name !== 'players' && $route.name !== 'playerprofile' && $route.name !== 'userprofile' && $route.name !== 'teams'"/>

  <RouterView />
</template>
