<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from './stores/resort'
import { mapState, mapActions } from 'pinia'
import navbar from './views/navbar.vue'


export default {
  name: 'App',
  components: {
    navbar
  },
  computed: {

  },
  methods: {
    ...mapActions(useResortStore, ['fetchResorts', 'fetchOneResort']),
  },
  created() {
    this.fetchResorts()
  }
}
</script>

<template>

  <navbar />
  <RouterView />
</template>
