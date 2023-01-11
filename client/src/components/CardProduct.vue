<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
  name: "CardProduct",
  data() {
    return {
      da: 0
    }
  },
  props: ['item', 'page', ],
  computed:{
    ...mapState(useCounterStore,['access_token'])
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="col m-auto pt-5">
    <div class="card" style="width: 18rem">
      <div class="card-link d-flex justify-content-end mx-3" v-if="access_token" >
        <a v-if="page === 'home'" href=""  >Favorite <i class="fas fa-heart"></i></a>
      </div>
      <div class="card-img-top  hover-zoom ripple ripple-surface ripple-surface-light ">
        <img 
        @click.prevent="this.$router.push(`/products/${item.id}`)"
          :src="item?.imgUrl"
          class="card-img-top m"
          alt="Chicago Skyscrapers"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ item?.name }}</h5>
        <p class="card-text">
          {{ item?.description }}
        </p>
      </div>
      <ul class="list-group list-group-light list-group-small">
        <li class="list-group-item px-4"><i class="fas fa-money-bill-wave"></i>  Harga: {{ item?.price.toLocaleString("id-ID", {
          style:
            "currency", currency: "IDR",
        }) }}</li>
      </ul>
      <ul class="list-group list-group-light list-group-small">
        <li class="list-group-item px-4"> <i class="fas fa-tshirt"></i> Stock: {{ item?.stock }}</li>
      </ul>
    </div>
  </div>
</template>
