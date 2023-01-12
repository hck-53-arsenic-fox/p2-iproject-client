<script>
import { mapActions, mapState } from "pinia";
import ServiceCard from "../components/serviceCard.vue";
import {useFetchStore} from "../stores/fetchData"

export default {
    components: {
        ServiceCard
    },
    computed: {
        ...mapState(useFetchStore,['services'])      
    },
    methods: {
        ...mapActions(useFetchStore,['fetchServices'])
    },
    created(){
        this.fetchServices()
        console.log(this.services)
    }
};
</script>

<template>
    <div class="container mt-3 my-2">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="fontstyle">Our Services</h1>
        </div>
      </div>
    </div>
  <div class="row d-flex justify-content-center mx-auto">
    <ServiceCard v-for="el in services" :key="el.id" :el="el"/>
  </div>
</template>
