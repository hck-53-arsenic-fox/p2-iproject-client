<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: "CardCart",
  props: ['item'],
  methods: {
    ...mapActions(useCounterStore, ['deleteCart', 'midtrans', 'deleteWishlist', 'postWishlist'])
  }
};
</script>

<template>
    <!-- <pre>{{ item }}</pre> -->
  <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img
        :src="item.Product.imgUrl"
        class="img-fluid rounded-3"
        alt="Cotton T-shirt"
      />
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2">
      <h6 class="text-muted">Name</h6>
      <h6 class="text-black mb-0">{{ item.Product.name }}</h6>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2">
      <h6 class="text-muted">Amount</h6>
      <h6 class="text-black mb-0">{{ item.amount }} Pcs</h6>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2">
      <h6 class="text-muted">Price Rp. </h6>
      <h6 class="mb-0">{{ item.Product.price }}</h6>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2" v-if="!item.amount" >
      <h6 class="text-muted">Delete W</h6>
      <a  @click.prevent="deleteWishlist(item.id)" href="#!" class="text-black mb-0"><i class="fas fa-times"></i></a>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2" v-if="item.amount">
      <h6 class="text-muted">Delete C</h6>
      <a  @click.prevent="deleteCart(item.id)" href="#!" class="text-black mb-0"><i class="fas fa-times"></i></a>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2" v-if="item.amount" >
      <h6 class="text-muted">Buy</h6>
      <a  @click.prevent="midtrans(item.id)"  href="#!" class="text-black mb-0"
        ><i class="far fa-credit-card"></i
      ></a>
    </div>
    <div class="col-md-2 col-lg-2 col-xl-2" v-if="!item.amount" >
      <h6 class="text-muted">Cart</h6>
      <a  @click.prevent="this.$router.push(`/products/${item.ProductId}`)"  href="#!" class="text-black mb-0"
        ><i class="far fa-credit-card"></i
      ></a>
    </div>
  </div>
</template>
