<script>
import { def } from '@vue/shared';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default{
    name: 'medicine',
    computed:{
        ...mapState(useCounterStore, ['medicines'])
    },
    methods:{
        ...mapActions(useCounterStore, ['fetchMedicine'])
    },
    created(){
        this.fetchMedicine()
    }
}
</script>

<template>
        <section class="doctors" id="doctors">
        <div class="center-text">
            <h2>Medicine</h2>
            <h5>The Most Frequently Searched The Medicines Categories</h5>
        </div>

        <div class="doctors-content">
            <div class="row" v-for="medicine in medicines" :key="medicine.id">
                <div class="courses-text">
                    <h6>{{medicine.attributes.name}}</h6>
                    <h3>Recommended</h3>
                </div>
            </div>
        </div>
    </section>
</template>