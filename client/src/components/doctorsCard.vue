<script>
import { mapActions } from 'pinia';
import { useCounterStore } from "../stores/counter"

export default{
    props: [
        "doctor",
        "doctors"
    ],
    computed: {},
    methods: {
        ...mapActions(useCounterStore, ["deleteDataTransaction", "paymentConfirm"])
    },
    
}

</script>

<template>
     <div class="row">
                <img :src="doctor.imageUrl" style="width:300px !important">
                <div class="courses-text">
                    <a v-if="$route.path === '/transactions' && doctors.status === `process`" @click.prevent="$router.push(`/transactions/form/${doctors.id}`)"><i class='bx bxs-edit-alt' ></i></a>
                    <a v-if="$route.path === '/transactions' && doctors.status === `process`" @click.prevent="deleteDataTransaction(doctors.id)"><i class='bx bx-x'></i></a>
                    <h5>Rp {{ doctor.price }}</h5>
                    <h3>{{doctor.name}}</h3>
                    <h6>{{doctor.duration}} menit</h6>
                    <h3 v-if="$route.path === '/transactions'" >Booking Date: {{new Date(doctors.date)?.toLocaleDateString('en-CA')}}</h3>
                    <div class="rating">
                        <div v-if="$route.path === '/doctors'" class="star">
                            <a><i class='bx bxs-star' ></i></a>
                            <a><i class='bx bxs-star' ></i></a>
                            <a><i class='bx bxs-star' ></i></a>
                            <a><i class='bx bxs-star' ></i></a>
                            <a><i class='bx bxs-star-half' ></i></a>
                        </div>
                    </div>

                    <div v-if="$route.path === '/transactions' && doctors.status === `process`" class="payment">
                        <a @click.prevent="paymentConfirm(doctor.price, doctors.id)" class="btn">Book Now</a>
                    </div>
                    <div v-if="$route.path === '/transactions' && doctors.status === `success`" class="payment">
                        <p>Payment success</p>
                    </div>
                </div>
     </div>
</template>