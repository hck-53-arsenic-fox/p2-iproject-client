<script>
import { mapActions, mapState } from "pinia";
import CarouselPhoto from "../components/CarouselPhoto.vue";
import { useCounterStore } from "../stores/counter";

export default {
  name: "ProfileView",
  methods: {
    ...mapActions(useCounterStore, ["theCatApi"]),
  },
  computed: {
    ...mapState(useCounterStore, ["bengal"]),
  },
  created() {
    this.theCatApi();
  },
  components: { CarouselPhoto },
};
</script>

<template>
  <!-- <pre>{{ bengal }}</pre> -->
  <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" v-for="item in bengal" :key="item.id" >
      <img :src="item.url" class="d-block w-100" alt="Wild Landscape" height="800" />
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
