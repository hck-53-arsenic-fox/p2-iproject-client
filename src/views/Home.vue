<script>
import List from "../components/List.vue";
import Header from "../components/Header.vue";
import Map from "../components/Map.vue";
import PlaceDetails from "../components/PlaceDetails.vue";

export default {
  components: {
    List,
    Map,
    Header
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
  </section>
</template>
