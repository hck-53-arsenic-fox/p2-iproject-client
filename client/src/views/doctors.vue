<script>
import { def } from '@vue/shared';
import Card from '../components/doctorsCard.vue'
import {mapActions, mapState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default{
    components:{
        Card
    },
    computed:{
        ...mapState(useCounterStore, ['doctors'])
    },
    methods:{
        ...mapActions(useCounterStore, ['fetchDataDoctors'])
    },
    created(){
        this.fetchDataDoctors()

    }
}

</script>

<template>

    <!-- Doctors section starts -->
    <section class="doctors" id="doctors">
        <div class="center-text">
            <h5>OUR DOCTORS</h5>
            <h2>Explore Our Best Doctors</h2>
        </div>

        <div class="doctors-content">
            <Card v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" @click="$router.push('/doctors/' + doctor.id)"/>
        </div>
    </section>
    <!-- Doctors section ends -->
</template>