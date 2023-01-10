<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    props: ['item'],
    methods: {
        ...mapActions(useCounterStore, ['handlePayment', 'handleFetchTransaction'])
    },
    created(){
        this.handleFetchTransaction()
    }
}
</script>

<template>
     <div class="col">
    <div class="card h-100">
      <img :src="item.Room.imageUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ item.Room.name }}</h5>
        <p class="card-text">{{ item.status }}</p>
      </div>
      <div class="card-footer">
       <button class="btn btn-dark" v-if="item.status === 'Unpaid'" @click.prevent="handlePayment(item.id, item.Room.price)">Payment Now</button>
       <p v-if="item.status === 'Paid'">Your transaction was successfully!</p>
      </div>
    </div>
  </div>
</template>