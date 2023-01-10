<script>
import {mapActions, mapState, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default{
    name:'detail',
    computed:{
        ...mapWritableState(useCounterStore, ['doctor'])
    },
    methods:{
        ...mapActions(useCounterStore, ['detailDoctors'])
    },
    created(){
        this.detailDoctors(this.$route.params.id)
        .then(({data}) =>{
            this.doctor = data
        })
        .catch((err) => {
            console.log(err);
        })

    }
}

</script>

<template>
    <!-- Detail section starts -->
    <section class="detail" id="detail">
        <div class="detail-img">
            <img :src="doctor.imageUrl" style="width:300px !important">
        </div>

        <div class="detail-text">
            <h2>{{doctor.name}}</h2>
            <p>{{doctor.description}}</p>
            <h4>{{doctor.Category.name}}</h4>
            <h5>Rp. {{ doctor.price }}</h5>
            <h6>{{doctor.duration}} Menit</h6>
            <a @click.prevent="$router.push(`/doctors/form/${doctor.id}`)" class="btn">Book Now</a>
        </div>
    </section>
    <!-- Detail section ends -->
</template>