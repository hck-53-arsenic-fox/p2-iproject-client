<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    computed : {
        ...mapState(useCounterStore, ["artworks"])
    },
    methods : {
        ...mapActions(useCounterStore, ["fetchArtworks", "payTour"])
    },
    created() {
        this.fetchArtworks()
    },
}
</script>

<template>  
<button @click="payTour" class="mt-40">
    test
</button>
    <div class="px-24">
        <div class="grid grid-cols-3 my-20 gap-x-10 gap-y-20" style="font-family: 'Inter', sans-serif;">
            <div v-for="art in artworks.data" :key="art.id">
                <div class="overflow-hidden">
                    <div class="bg-cover bg-center hover:scale-125" style="height: 343px; transition: transform 1s;">
                    <img :src="art.imgUrl" alt="" class="h-full w-full" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
                    </div>
                </div>
                <div class="px-2">
                    <div>
                        <p class="text-xl font-bold my-3">{{ art.title }}</p>
                        <p class="mb-3 italic">{{ art.artist }}</p>
                        <p class="text-xs">{{ art.description }}</p>
                    </div>
                    <div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>