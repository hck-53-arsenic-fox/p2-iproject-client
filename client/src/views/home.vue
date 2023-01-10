<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'
import resortCard from '../components/resortCard.vue'


export default {
  name: 'home',
  components: {
    resortCard
  },
  computed: {
    ...mapState(useResortStore, ['resorts'])
  },
  methods: {
    ...mapActions(useResortStore, ['fetchResorts'])
  },
  created() {
    this.fetchResorts()
  }
}

</script>

<template>
  <!-- The Home Below -->
  <section class="flex justify-center flex-col">

    <!-- hscreen apus -->
    <div class="flex flex-col space-y-2 md:flex-col space-y-5 z-0 items-center justify-center bg-[#EBF1FF]">

      <!-- top part -->
      <div
        class="sticky top-1 flex basis-3/12 bg-[#7499F1] justify-center flex-col shadow-xl rounded-2xl m-5 p-3 backdrop-blur">


        THE MAP WILL BE HERE
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio temporibus quae rem. Labore laborum
        deleniti minima, impedit magnam assumenda pariatur voluptatem at corrupti perspiciatis amet voluptatum mollitia!
        Fugit, ipsum.

      </div>


      <!-- bottom part -->


      <!--Card Redesign-->
      <resortCard v-for="resort in resorts" :key="resort.id" :resort="resort" />




    </div>
  </section>
  <!-- End of Home -->

</template>


