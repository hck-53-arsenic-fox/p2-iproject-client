<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Card from '../components/doctorsCard.vue'

export default{
    name: 'transactions',
    components:{
        Card

    },
    computed:{
        ...mapState(useCounterStore, ['transactions'])
    },
    methods:{
        ...mapActions(useCounterStore, ['fetchDataTransaction'])
    },
    created(){
        this.fetchDataTransaction()
    }
}

</script>

<template>
    <!-- Booking section starts -->
    <section class="doctors" id="doctors">
        <div class="center-text">
            <h5>Booking List</h5>
            <h2>Explore Transactions</h2>
        </div>

        <div class="doctors-content">
            <Card v-for="doctor in transactions" :key="doctor.id" :doctor="doctor.Doctor" :doctors="doctor"/>   
        </div>
    </section>
    <!-- Booking section ends -->
</template>