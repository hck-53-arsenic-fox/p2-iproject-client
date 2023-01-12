<script>
import { useCounterStore } from './stores/counter';
import { mapState } from 'pinia';
import Sidebar from './components/Sidebar.vue'
export default{
  components: {
    Sidebar
  },

  mounted() {
  }

}
</script>

<template>
  <RouterView/>
</template>