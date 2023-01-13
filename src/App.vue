<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      tab: null
    }
  }
}
</script>

<template>

  <RouterView />
</template>

<style>
:root {
  --primaryBlue: rgb(44, 41, 152);
}

* {
  margin: 0;
  padding: 0;
}

body {
  position: relative;
}

::-webkit-scrollbar {
  display: none;
}

.background {
  height: 100vh;
  width: 100vw;
  background: rgb(153, 153, 153);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid grey;
  transform: translate(-50%, -50%);
  width: 30vw;
}
</style>
