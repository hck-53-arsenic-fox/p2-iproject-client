<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from './stores/resort'
import { mapState, mapActions } from 'pinia'
import navbar from './views/navbar.vue'


export default {
  name: 'App',
  components: {

  },
  computed: {

  },
  methods: {

  },
  created() {

  }
}
</script>

<template>

  <navbar />
  <RouterView />
</template>
