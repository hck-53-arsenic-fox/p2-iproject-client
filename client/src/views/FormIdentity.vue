<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data(){
        return {
            value : {
                image : "",
                phoneNumber: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['handleAddIdentity']), 
        changeFile(){
            this.value.image = this.$refs.file.files[0]
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center flex-column" style="margin-top: 80px;width: 650px;">
        <h1>Self Check-In</h1>
        <h4>Fill ur identity before fell a luxury</h4>
   <form @submit.prevent="handleAddIdentity(this.$route.params.id, this.value)">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Insert your Phone Number" v-model="value.phoneNumber">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="file" class="form-control" id="exampleInputPassword1" ref="file" @change="changeFile">
  </div>
  <button type="submit" class="btn btn-dark">Verified</button>
</form>
</div>
</template>