<script>
  import { RouterView } from 'vue-router';
  import { useCounterStore } from './stores/counter';
  import { mapActions } from 'pinia';
  import Navbar from './components/Navbar.vue'
  export default {
    components: { Navbar },
    methods: {
      ...mapActions(useCounterStore, ['fecthData'])
    },
    created() {
      this.fecthData()
    }
  }
</script>

<template>
  <Navbar />
  <RouterView />
</template>
