<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Categories",
  computed: {
    ...mapState(useCounterStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCategories"]),
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="category in categories" :key="category.id" class="col">
        <!-- dinamis -->
        <a
          @click="$router.push(`/categories/${category.id}`)"
          class="text-dark text-decoration-none"
        >
          <div class="card mb-3">
            <img
              src="https://i.otto.nl/i/otto/12936595/sprei-van-100-polyester-zwart.jpg?$ovnl_seo_index$"
              class="card-img-top"
              alt="{{ category.name }}"
            />
            <div class="card-body">
              <h5 class="card-title">{{ category.name }}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
