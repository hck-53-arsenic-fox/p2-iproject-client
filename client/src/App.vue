<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from './stores/resort'
import { mapState, mapActions, mapWritableState } from 'pinia'
import navbar from './views/navbar.vue'


export default {
  name: 'App',
  components: {
    navbar
  },
  computed: {
    ...mapWritableState(useResortStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useResortStore, ['fetchResorts', 'fetchOneResort']),
  },
  created() {
    this.fetchResorts()
    if (localStorage.getItem('access_token')) this.isLogin = true
  }
}
</script>

<template>

  <navbar />
  <RouterView />
</template>
