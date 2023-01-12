<script>
import Card from "../components/Card.vue";
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Paginate from "vuejs-paginate-next";
export default {
  name: "Home",
  data() {
    return {
      category: this.categoryId,
    };
  },
  components: { Card, Paginate },
  computed: {
    ...mapState(useCounterStore, ["products", "totalPage", "page"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchProducts"]),
    clickCallback(page) {
      this.fetchProducts(page);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
      <div class="col-md-10">
        <!-- dinamis -->
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
        <Paginate
          :page-count="totalPage"
          :clickHandler="clickCallback"
          class="mt-2 d-flex justify-content-center"
        />
      </div>
    </div>
  </div>
</template>
