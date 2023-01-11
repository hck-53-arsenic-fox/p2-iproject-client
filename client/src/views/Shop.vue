<script>
    import NavShop from "../components/HeaderShop.vue"
    import { mapActions, mapState, mapWritableState } from "pinia";
    import { useCounterStore } from "../stores/counter";

    export default{
        components : {
            NavShop
        },
        computed : {
            ...mapWritableState(useCounterStore, ["isShop"])
        },
        created() {
            this.isShop = false
        },
    }
</script>

<template>  
    <NavShop/>    
    <div class="text-center px-16 py-20">
        <div>
            <h1 class="text-3xl font-semibold" style="line-height: 2;">Shop Artworks</h1>
            <p>Search through limited and unlimited releases from a range of our worldwide artists.</p>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-x-9 px-16">
        <div id="cardShop" style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('../assets/13.webp'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Three musicians"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$100.00</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum. Dolorum beatae eum libero quo atque nam nihil? Suscipit, qui.</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('./13.webp'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Three musicians"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-black text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>Sold out</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum. Dolorum beatae eum libero quo atque nam nihil? Suscipit, qui.</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('./13.webp'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Three musicians"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-black text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>Sold out</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum. Dolorum beatae eum libero quo atque nam nihil? Suscipit, qui.</p>
                </div>
            </div>
        </div>
    </div>
</template>