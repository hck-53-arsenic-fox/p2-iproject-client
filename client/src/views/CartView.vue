<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import CardCart from '../components/CardCart.vue'

export default {
  name: "CartView",
  methods: {
    ...mapActions(useCounterStore, ['fetchCart'])
  },
  computed: {
    ...mapState(useCounterStore, ['carts'])
  },
  created() {
    this.fetchCart()
  },
  components: {CardCart}
};
</script>

<template>
    <div class="container m-auto p-auto">
        <section class="h-100 h-custom" style="background-color: #d2c9ff">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div
            class="card card-registration card-registration-2"
            style="border-radius: 15px"
          >
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5">
                    <div
                      class="d-flex justify-content-between align-items-center mb-5"
                    >
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 class="mb-0 text-muted">{{ carts.length }} Items</h6>
                    </div>
                    <hr class="my-4" />
                    <CardCart v-for="item in carts" :key="item.id" :item="item" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>

</template>
