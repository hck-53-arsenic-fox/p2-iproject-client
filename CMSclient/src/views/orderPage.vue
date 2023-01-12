<script>
import { mapActions, mapState } from "pinia";
import {useFetchStore} from "../stores/fetchData"
import {useOrderStore} from "../stores/order"

export default {
    data(){
        return{
            dataOrder: {
                shoesBrand: '',
                shoesSize: '',
                shoesColor: '',
                shoesMaterial: '',
                phoneNumberPIC: '',
                photo: '',
                pickUpAddress: '',
                ServiceId: ''
            }
        }
    },computed: {
        ...mapState(useFetchStore,['services'])      
    },
    methods: {
        ...mapActions(useFetchStore,['fetchServices']),
        ...mapActions(useOrderStore,['createOrder']),
        async order(){
            this.createOrder(this.dataOrder)
        }
    },
    created(){
        this.fetchServices()
    }
};
</script>

<template>
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 my-2 text-center">
          <h3 class="fontstyle">Please write your order data</h3>
        </div>
      </div>
    </div>

    <div
      class="container-fluid d-flex justify-content-center card card1 col-md-8 text-center"
      style="border-radius: 1rem"
    >
      <form>
        <div class="d-flex flex-column mx-auto mt-3">
          <div class="row g-2 align-items-start ms-5">
            <div class="col-auto ms-2 text-end">
              <label for="brand" class="col-form-label">Brand:</label><br />
              <label for="size" class="col-form-label">Size:</label><br />
              <label for="color" class="col-form-label">Color:</label><br />
              <label for="material" class="col-form-label">Material:</label
              ><br />
              <label for="phoneNumberPIC" class="col-form-label">Active Contact:</label
              ><br />
              <label for="photo" class="col-form-label">Photo:</label
              ><br /><br /><br />
              <label for="service" class="col-form-label">Service:</label><br />
              <label for="address" class="col-form-label">Pick up Address:</label><br />
            </div>

            <div class="col-8 pt-1 ms-3 mb-1">
              <input type="text" class="form-control form-control-sm mb-2" v-model="dataOrder.shoesBrand"/>
              <input type="text" class="form-control form-control-sm mb-2" v-model="dataOrder.shoesSize"/>
              <input type="text" class="form-control form-control-sm mb-2" v-model="dataOrder.shoesColor"/>
              <select class="form-select form-select-sm mb-2" v-model="dataOrder.shoesMaterial">
                <option value ="" selected disabled>--- Select One ---</option>
                <option value="canvas">Canvas</option>
                <option value="denim">Denim</option>
                <option value="knit">Knit</option>
                <option value="leatherSuede">Leather Suede</option>
                <option value="nubuckLeather">Nubuck Leather</option>
                <option value="syntheticLeather">Synthetic Leather</option>
                <option value="rubber">Rubber</option>
            </select>
            <input type="text" class="form-control form-control-sm mb-2" v-model="dataOrder.phoneNumberPIC"/>
              <textarea
                class="form-control form-control-sm mb-2"
                rows="3"
                v-model="dataOrder.photo"
              ></textarea>
              
              <select class="form-select form-select-sm mb-2" v-model="dataOrder.ServiceId">
                <option value="" selected disabled>--- Select One ---</option>
                <option v-for="el in services" :key="el.id" v-bind:value="el.id">{{ el.name }}</option>
                
              </select>
              <textarea
                class="form-control form-control-sm mb-2"
                rows="3"
                v-model="dataOrder.pickUpAddress"
              ></textarea>
            </div>
        </div>
        <label class="text-light mb-2">please confirm pick up location to our admin at (081231561670)</label>
    </div>
    
        <button
            @click.prevent="order"
          type="submit"
          class="btn btn-outline-primary btn-block mb-3 col-2 me-3 border text-white"
        >
          Order
        </button>
        <RouterLink to="/services"
          type="button"
          class="btn btn-outline-danger btn-block mb-3 col-2 border text-white"
        >
          Cancel
    </Routerlink>
      </form>
    </div>
  </div>
</template>
