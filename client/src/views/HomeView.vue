<script>
import { mapActions, mapState } from "pinia";
import CardNews from "../components/CardNews.vue";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Home",
  computed: {
    ...mapState(useCounterStore, [
      "politics",
      "technology",
      "business",
      "sports",
    ]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "newsPolitics",
      "newsTechnology",
      "newsBusiness",
      "newsSports",
    ]),
  },
  created() {
    this.newsPolitics();
    this.newsTechnology();
    this.newsBusiness();
    this.newsSports();
  },
  components: { CardNews },
};
</script>

<template>
  <!--Carousel Section-->
  <center>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-mdb-ride="carousel"
      style="width: 75%; margin-top: 20px; margin-bottom: 20px"
    >
      <div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://assets.weforum.org/article/image/7SYyUJfu6pAiRDqPa4qEuH7gvCjXF2nbLvLU0y3cxHA.jpg"
              class="d-block rounded-5"
              width="1100"
              height="550"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2022/01/10/15-twibbon-hut-pdi-perjuangan-bisa-diunggah-di-media-sosial_169.jpeg?w=1200"
              class="d-block rounded-5"
              width="1100"
              height="550"
              alt="Camera"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.oneesports.id/cdn-data/sites/2/2022/08/298997237_804261707399993_6050028350215601603_n.png"
              class="d-block rounded-5"
              width="1100"
              height="550"
              alt="Exotic Fruits"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.bisnis.com/thumb/posts/2021/06/06/1401910/bio-ihsg-5.jpg?w=744&h=465"
              class="d-block rounded-5"
              width="1100"
              height="550"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </center>
  <!--End-Carousel-Section-->

  <!--List-->
  <div class="container w-50">
    <CardNews
      v-for="data in politics"
      :key="data.id"
      :items="data"
      v-if="$route.name === 'home'"
      :page="'home'"
    />
    <CardNews
      v-for="data in technology"
      :key="data.id"
      :items="data"
      v-if="$route.name === 'technology'"
      :page="'technology'"
    />
    <CardNews
      v-for="data in business"
      :key="data.id"
      :items="data"
      v-if="$route.name === 'business'"
      :page="'business'"
    />
    <CardNews
      v-for="data in sports"
      :key="data.id"
      :items="data"
      v-if="$route.name === 'sports'"
      :page="'sports'"
    />
  </div>
</template>
