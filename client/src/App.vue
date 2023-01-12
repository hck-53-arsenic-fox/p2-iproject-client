<script>
  import { RouterView } from 'vue-router';
  import { useCounterStore } from './stores/counter';
  import { mapActions, mapWritableState } from 'pinia';
  import Navbar from './components/Navbar.vue'
  export default {
    components: { Navbar },
    computed: {
      ...mapWritableState(useCounterStore, ['isLogin'])
    },
    methods: {
      ...mapActions(useCounterStore, ['fecthData']),
      checkLogin() {
        if( localStorage.access_token ) {
          this.isLogin = true
        }
      }
    },
    created() {
      this.fecthData()
      this.checkLogin()
    }
  }
</script>

<template>
  <Navbar />
  <RouterView />
</template>
