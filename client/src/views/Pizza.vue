<script>
import { mapActions, mapState } from 'pinia';
import Sidebar from '../components/Sidebar.vue';
import { useCounterStore } from '../stores/counter';
    export default{
        components:{
            Sidebar
        },
        computed: {
            ...mapState(useCounterStore, ['dataPizza'])
        },
        methods: {
            ...mapActions(useCounterStore, ['fetchPizza'])
        },
        created(){
            this.fetchPizza()
        }
    }
</script>

<template>
<Sidebar/>
<div class="w-full pl-[150px] h-full bg-gray-100 flex flex-col w-[100%]">
        <div class="pt-[20px] pl-[20px]"><span class="text-[30px] font-bold">Out Of Stock</span></div>
<div class="flex mt-[5px] grid grid-cols-5 gap-4 mr-[50px]" >
            <div class="mx-[20px] mt-4 flex flex-col bg-white rounded-xl card w-[230px] h-[300px]" v-for="data in dataPizza" :key="data.id">
                <img class="mx-auto my-4 rounded-xl h-[50%]" style="aspect-ratio: 1/1; width: 200px;" :src="data.img" alt="">
                <p class="mx-4 font-semibold text-[17px]">{{data.name}}</p>
                <p class="mx-4 mt-[20px] font-semibold text-[17px] text-yellow-600">Out Of Stock</p>
            </div>
        </div>
</div>

</template>