<script>
import List from "../components/List.vue";
import Header from "../components/Header.vue";
import Map from "../components/Map.vue";
import PlaceDetails from "../components/PlaceDetails.vue";
import WeatherFidget from "../components/WeatherFidget.vue";

export default {
  components: {
    List,
    Map,
    Header,
    WeatherFidget
  },
};
</script>

<template>
  <section>
    <Header />
  </section>

  <section class="grid grid-cols-12">
    <div class="col-span-3">
      <List />
    </div>
    <div class="col-span-9 h-screen">
      <Map />
    </div>
    <div class="col-span-12 h-36 bg-blue-200">
      <WeatherFidget />
    </div>
  </section>
</template>
