<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "DetailPage",
  data() {
    return {
      amount: {
        first: 0,
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["detailProduct"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["handleDetailbyId", "postCart"]),
    plus() {
      this.amount.first+=1
    },
    min() {
      this.amount.first-=1
      if (this.amount.first < 1 ) {
        this.amount.first = 0
      }
    }
  },
  created() {
    this.handleDetailbyId(this.$route.params.id);
  },
};
</script>

<template>
  <!-- Page Content -->
  <div class="container">
    <div class="my-6 py-3">
      <div v-for="item in detailProduct" :key="item.id">
        <!-- Portfolio Item Heading -->
        <h1 class="my-4">{{ item.name }}</h1>
        <!-- Portfolio Item Row -->
        <div class="row">
          <div class="col-md-8">
            <img
              class="img-fluid"
              :src="item.imgUrl"
              width=" 600 "
              alt="Food Product"
            />
          </div>

          <div class="col-md-4">
            <h3 class="my-3"><i class="fas fa-align-left"></i> Description</h3>
            <p>
              {{ item.description }}
            </p>
            <div class="d-flex">
              <div>
                <h5 class="my-3">
                  <i class="fas fa-money-bill-wave"></i> Price
                </h5>
                <p>
                  {{
                    item?.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                  }}
                </p>
              </div>
              <div class="mx-3">
                <form @submit.prevent="postCart(amount.first, item.id)">

                  <div class="d-flex my-4">
                    <div>
                      <button class="btn" @click.prevent="min" >-</button>
                    </div>
                    <div>
                      <button class="btn" @click.prevent="plus" >+</button>
                    </div>

                  </div>

                  <button
                    type= "submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body bi"
                  >
                    <b style="color: rgb(44, 43, 38)"> Total : {{ amount.first }}</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>
  <!-- /.container -->
</template>
