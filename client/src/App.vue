<script>
import { mapWritableState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './component/NavbarView.vue';
import { useCounterStore } from './stores/counter';

export default {
  components: {NavbarView},
}

</script>

<template>
  <NavbarView v-if="$route.name !== 'login' && $route.name !== 'register'"/>
  <RouterView />
</template>
