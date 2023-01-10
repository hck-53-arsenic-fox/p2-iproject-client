<script>
import ConsoleCard from '../components/ConsoleCard.vue';
export default {
    components: {ConsoleCard}
}
</script>

<template>
  <!-- CONSOLE PAGE -->
  <section class="px-12 py-4 mt-6">
    <div class="grid grid-cols-4 gap-8 w-fit mx-auto">
      <ConsoleCard v-for="a in 6"/>
    </div>
  </section>
</template>
