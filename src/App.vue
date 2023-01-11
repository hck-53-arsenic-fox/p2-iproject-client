<script>
import { RouterView } from "vue-router";
import { mapWritableState } from "pinia";
import { useTravelokalStore } from "./stores/travelokal";

export default {
  name: "app",
  computed: {
    ...mapWritableState(useTravelokalStore, ["currentPosition", 'gmap']),
  },
  components: {},
  created() {
    // set coordinates to user current location dynamically
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.$store.commit('setCoordinates', {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude
        // })
        // console.log(position.coords.latitude, position.coords.longitude);
        this.currentPosition.latCenter = position.coords.latitude,
        this.currentPosition.lngCenter = position.coords.longitude
        //ngarahin gmaps ke current location

        //fetch disini
        // console.log(this.currentPosition, "currentPosition");
      });
    }
  },
  mounted() {
    console.log(this.gmap);
  },
};
</script>

<template class="h-screen">
  <RouterView />
</template>
