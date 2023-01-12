<script>
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import ActiveOrderCard from "../components/ActiveOrderCard.vue";
import OrderHistoryCard from "../components/OrderHistoryCard.vue";
import CreateOrder from "../components/CreateOrder.vue";
import Modal from "../components/Modal.vue";

export default {
  components:{
    ActiveOrderCard,
    OrderHistoryCard,
    CreateOrder,
    Modal,
  },
  props:['sections', 'access_token', 'coords'],
  // emits:['rGeocode', 'activatedMenu'],
  emits:['activatedMenu'],
  data(){
    return {
      geoPosition: {}
    }
  },
  methods: {
    activatedMenu(section){
      this.$emit('activatedMenu', section)
    },
    // rGeocode(){
    //   console.log(this.geoPosition)
    //   this.$emit('rGeocode', this.geoPosition)
    // },
  },
  mounted() {
    // mapboxgl.accessToken = this.access_token
    // if ("geolocation" in navigator) { 
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.geoPosition.lon = position.coords.longitude, 
    //     this.geoPosition.lat = position.coords.latitude

    //     const map = new mapboxgl.Map({
    //       container: 'map', // container ID
    //       style: 'mapbox://styles/fahmifachrizal/clbt6yvqv000e14nwjfr82h8i', // style URL
    //       center: [this.geoPosition.lon, this.geoPosition.lat],
    //       zoom: 14
    //     })
    //     this.rGeocode()

    //   })
    // } else {'Location not found'}

    
    // map.addControl(
    //   new MapboxDirections({
    //     accessToken: mapboxgl.accessToken,
    //     controls: {
    //       instructions: false,
    //       profileSwitcher: false,
    //     },
    //     styles:styles
    //   }),
    //   'top-left'
    // )
  },
};
</script>

<template>
  <div class="h-screen w-full bg-white relative">

    <!-- Top Hero Section -->
    <div class="fixed bg-cyan-600 h-1/4 w-full -z-50 opacity-50">
      
    </div>

    <!-- Main Page -->
    <div class="absolute top-1/4 bg-amber-200 h-full w-full z-0 p-4">

      <!-- Name and Location -->
      <div class="w-full">
        <span class="text-4xl font-semibold mb-4">Hi [Name]</span>
        <div class="my-4">
          <div @click="sections.modal=true" class="h-40 w-full rounded-xl relative shadow-xl">
            <img src="../assets/images/staticBackground.png" alt="static" class="h-full w-full object-cover rounded-xl z-0"/>
            <div class="absolute top-0 w-full m-2 z-10 opacity-75">
              <span class=" text-slate-800 text-xs bg-white rounded-md px-4 py-1 shadow-lg">tap to see nearest pickup point</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Orders -->
      <div class="w-full">
        <span class="text-4xl font-semibold mb-4">Active orders</span>
        <div class="my-4">
          <ActiveOrderCard />
          <ActiveOrderCard />
          <ActiveOrderCard />
        </div>
      </div>

      <!-- Order History -->
      <div class="w-full">
        <span class="text-4xl font-semibold mb-4">Order History</span>
        <div class="my-4">
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
        </div>
      </div>







      
      <!-- Buffer bottom button -->
      <div class="h-24 w-full bg-amber-200">

      </div>
    </div>

    <!-- Create Order Button -->
    <CreateOrder @activatedMenu="activatedMenu" :sections="sections" class="z-50"/>
    <Modal :sections="sections" />
  </div>

  <!-- <div class="fixed bottom-0 bg-black h-96 w-full z-50 opacity-50">

  </div> -->

</template>

<!-- <style>
.mapboxgl-ctrl-top-left {
  width: 100% !important; 
  padding: 10px !important;
}

.mapboxgl-ctrl,
.mapboxgl-ctrl-directions {
  width: 100% !important;
  margin: 0 !important;
  max-width: 100% !important;
}

.directions-icon-depart{
  background-image: url() !important;
}

.directions-icon-depart:before {
  font-family:'FontAwesome' !important;
  content: "\f192" !important;
  color:white !important;
}

.directions-icon-arrive{
  background-image: url() !important;
}

.directions-icon-arrive:before {
  font-family:'FontAwesome' !important;
  content: "\f3c5" !important;
  color:white !important;
}
</style> -->