<script>
import { mapActions, mapState } from "pinia";
import { useFetchStore } from "../stores/fetchData";
import { useOrderStore } from "../stores/order";
export default {
  data() {
    return {
      updateData: {
        status: "",
        photoAfter: "",
      },
    };
  },
  computed:{
    ...mapState(useFetchStore,['myOrderDetail'])
  },
  methods: {
    ...mapActions(useFetchStore,['fetchOrderDetail']),
    ...mapActions(useOrderStore,['updateStatusOrder']),
    async update(){
      this.updateStatusOrder(this.updateData,this.$route.params.id)
    }
  },
  created(){
    this.fetchOrderDetail(this.$route.params.id)
  }
};
</script>

<template>
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 my-2 text-center">
          <h3 class="fontstyle">Update Order Id Number {{ myOrderDetail.orderIdNumber }}</h3>
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
            <div class="col-auto ms-3 text-end">
              <label for="address" class="col-form-label">status:</label><br />
              <label for="address" class="col-form-label"
                >Completed Photo:</label
              ><br /><br />
            </div>

            <div class="col-8 pt-1 ms-3 mb-3">
              <select
                class="form-select form-select-sm mb-2"
                v-model="updateData.status"
              >
                <option value="On Request">On Request</option>
                <option value="Pick Up Process">Pick Up Process</option>
                <option value="Cleaning On Process">Cleaning On Process</option>
                <option value="Completed">Completed</option>
              </select>
              <textarea
                v-model="updateData.photoAfter"
                class="form-control form-control-sm mb-2"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          @click.prevent="update"
          type="submit"
          class="btn btn-outline-primary btn-block mb-3 col-2 me-3 border text-white"
        >
          Update
        </button>
        <RouterLink
          to="/log"
          type="button"
          class="btn btn-outline-danger btn-block mb-3 col-2 border text-white"
        >
          Cancel
        </RouterLink>
      </form>
    </div>
  </div>
</template>
