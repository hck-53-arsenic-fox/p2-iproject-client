<script>
import { mapActions, mapState } from "pinia";
import CardDetail from "../components/CardDetail.vue";
import { useCounterStore } from "../stores/counter";
export default {
  name: "News Detail",
  computed: {
    ...mapState(useCounterStore, [
      "businessById",
      "politicsById",
      "sportsById",
      "technologyById",
    ]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "newsBusinessById",
      "newsPoliticsById",
      "newsSportsById",
      "newsTechnologyById",
    ]),
  },
  created() {
    this.newsBusinessById(this.$route.params.id);
    this.newsPoliticsById(this.$route.params.id);
    this.newsSportsById(this.$route.params.id);
    this.newsTechnologyById(this.$route.params.id);
  },
  components: { CardDetail },
};
</script>

<template>
  <!--Product-Detail Section-->
  <section class="container-fluid" id="home-section">
    <div class="row">
      <!--Product-->
      <div id="product" class="container w-75">
        <!--Product-Detail-->
        <div class="row" style="margin-top: 30px">
          <CardDetail
            v-for="data in businessById"
            :key="data.id"
            :items="data"
            v-if="$route.name === 'businessDetail'"
          />
        </div>
        <div class="row" style="margin-top: 30px">
          <CardDetail
            v-for="data in politicsById"
            :key="data.id"
            :items="data"
            v-if="$route.name === 'politicsDetail'"
          />
        </div>
        <div class="row" style="margin-top: 30px">
          <CardDetail
            v-for="data in technologyById"
            :key="data.id"
            :items="data"
            v-if="$route.name === 'technologyDetail'"
          />
        </div>
        <div class="row" style="margin-top: 30px">
          <CardDetail
            v-for="data in sportsById"
            :key="data.id"
            :items="data"
            v-if="$route.name === 'sportsDetail'"
          />
        </div>
        <!--End-Product-Detail-->
      </div>
      <!--End-Product-Card-->
    </div>
  </section>
  <!--End-Product-Detail-->
</template>
