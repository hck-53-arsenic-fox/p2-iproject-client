<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'
import resortCard from '../components/resortCard.vue'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"


export default {
  name: 'home',
  data() {
    return {
    }
  },
  components: {
    resortCard
  },
  computed: {
    ...mapState(useResortStore, ['resorts', 'mapToken'])
  },
  methods: {
    ...mapActions(useResortStore, ['fetchResorts']),
  },
  created() {
    this.fetchResorts()
  },
  beforeUpdate() {
    mapboxgl.accessToken = this.mapToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [106.79833581810604,
        -6.24501016331349],
      zoom: 9
    })
    for (let resort of this.resorts) {
      new mapboxgl.Marker()
        .setLngLat(resort.geometry.coordinates)
        .addTo(map);
    }
  }


}




</script>

<template>
  <!-- The Home Below -->
  <section class="flex justify-center flex-col bg-[#EAEBED]">

    <!-- hscreen apus -->
    <div class="flex flex-col space-y-2 md:flex-col space-y-5 z-0 items-center justify-center">

      <!-- top part -->
      <div id="" class="z-50 sticky top-1 flex basis-3/12 justify-center flex-col shadow-xl rounded-2xl my-3">


        <!-- map goes here -->
        <!-- <div id="map" class="h-full w-full bg-black"></div> -->

        <div id='map' style='width: 1250px; height: 300px;' class="rounded-2xl"></div>





      </div>


      <!-- bottom part -->


      <!--Card Redesign-->
      <resortCard v-for="resort in resorts" :key="resort.id" :resort="resort" />




    </div>
  </section>
  <!-- End of Home -->

</template>


