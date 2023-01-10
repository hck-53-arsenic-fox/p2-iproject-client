<script>
import { mapActions, mapState } from 'pinia';
import CardTransaction from '../components/CardTransaction.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: {CardTransaction},
    methods: {
        ...mapActions(useCounterStore, ['handleFetchTransaction'])
    },
    computed: {
        ...mapState(useCounterStore, ['transaction'])
    },
    created(){
        this.handleFetchTransaction()
    }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <h1 style="margin-top: 100px">CART</h1>
  </div>
  <div
    class="container row row-cols-2 row-cols-md-3 g-4 mt-3 mb-5"
    style="margin-left: 5%"
  >
    <CardTransaction v-for="item in transaction" :key="item.id" :item="item" />
  </div>
</template>
