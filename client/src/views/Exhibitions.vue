<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

    export default{
        data(){
            return {
                options : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            }
        },
        computed : {
            ...mapState(useCounterStore, ["exhibitions"]),
            
        },
        methods : {
            ...mapActions(useCounterStore, ["fetchExhibitions", "payTour"]),
            formatDate(date){
                return new Date(`${date}`).toLocaleDateString('en-EN', this.options)
            }
        },
        created() {
            this.fetchExhibitions()
        },
    }

</script>

<template>    
    <div class="overflow-hidden overflow-y-auto" style="perspective: 10px; height: 100vh;"> 
        <div id="banner" class="w-full" style="height: 100%; width: 100%; transform-style: preserve-3d; z-index: -1;">
            <img src="https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1960,h_1400/f_webp,q_auto/v1663194294/Vanguards-077.jpg?_i=AA" alt="" class="absolute object-cover object-center brightness-75" style="transform: translateZ(-10px) scale(2.2); height: 100%; width: 100%;">
        </div>
        <div class="relative px-32 pt-2 text-black z-10 bg-white">
            <h1 class="font-bold tracking-wider antialiased hover:text-white duration-300 mb-20" style="font-size: 8rem; line-height: 1.2; -webkit-text-stroke: 1px black;">EXHIBITIONS</h1>
            <div id="current">
                <div class="flex justify-between mb-6 py-3 border-b border-b-slate-600">
                    <p class="text-sm">CURRENT</p>
                    <button class="text-sm">ASCENDING</button>
                </div>
                <div id="container-card" class="flex flex-col gap-y-24">
                    <div id="cardExhibitions" class="w-full grid grid-cols-5 gap-x-14 text-sm" v-for="ex in exhibitions">
                        <div class="object-cover col-span-3">
                            <img :src="ex.image" alt="" style="height: 343px;" class="w-full">
                        </div>
                        <div class="flex flex-col justify-between col-span-2">
                            <div class="flex flex-col justify-between">
                                <p class="when">{{ formatDate(ex.date) }}</p>
                                <h1 class="author text-2xl font-bold uppercase">{{ ex.artist }}</h1>
                                <p class="title italic">{{ ex.title }}</p>
                            </div>
                            <div class="flex items-center">
                                <p class="description">{{ ex.description }}</p>
                            </div>
                            <div class="flex items-center justify-end">
                                <div class="bg-black p-5 text-white inline-block px-7 border border-transparent hover:bg-white hover:text-black hover:border-black">
                                    <button class="" @click="payTour(ex.id)">Explore Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-white my-20">
                    .
                </div>
            </div>
</template>