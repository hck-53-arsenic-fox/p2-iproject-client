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
    <!-- <NavShop/>     -->
    <div class="text-center px-16 py-20">
        <div>
            <h1 class="text-3xl font-semibold" style="line-height: 2;">Shop Artworks</h1>
            <p>Search through limited and unlimited releases from a range of our worldwide artists.</p>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-x-9 px-16">
        <div id="cardShop" style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_535,h_637/f_webp,q_auto/v1658857101/unitlondon-oh-de-laval-the-devil-made-me-do-it-2019_21209fbcc0.jpg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">OH DE LAVAL</h1>
                        <p class="uppercase italic">"The Devil Made Me To Do It"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$125.00</button>
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
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_760,h_760/f_webp,q_auto/v1663175983/unitlondon-heesoo-kim-untitled-mixed-feelings-2022.jpg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Untitled (Mixed feelings)"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-black text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>Sold out</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_760,h_974/f_webp,q_auto/v1658928217/unitlondon-heesoo-kim-flower-01-2021.jpg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Flower 01"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-black text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>Sold out</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_682,h_1083/f_webp,q_auto/v1665398315/File-48617-medium.jpeg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">JAKE WOOD-EVANS</h1>
                        <p class="uppercase italic">"Portrait of Anne Hussey (Delaval), Lady Stanhope after Tilly Kettle"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$125.00</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_760,h_760,dpr_2/f_webp,q_auto/v1659110558/unitlondon-nicolas-holiber-the-light-below-2021_2208474c5c.jpg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">NICOLAS HOLIBER</h1>
                        <p class="uppercase italic">"The Light Below"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$1000.00</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_480,h_608/f_webp,q_auto/v1665398516/File-52003-medium.jpeg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">JAKE WOOD-EVANS</h1>
                        <p class="uppercase italic">"Oldfield Bowles, after Nathaniel Dance Holland"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$450.00</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
        <div style="height: 732px;">
            <div class="">
                <div class="bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_760,h_916,dpr_2/f_webp,q_auto/v1659110837/unitlondon-nicolas-holiber-homeroom-2020_217180b32c.jpg?_i=AA'); height: 434px;"></div>
            </div>
            <div>
                <div class="flex justify-between py-7">
                    <div class="flex flex-col justify-center">
                        <h1 class="font-semibold uppercase">Heesoo kim</h1>
                        <p class="uppercase italic">"Untitled (Mixed feelings)"</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#3e01ff] text-white text-sm p-3 px-4 font-light border hover:bg-white hover:border-black hover:text-black">
                            <button>$225.00</button>
                        </div>
                    </div>
                </div>
                <div class="text-sm">
                    <p>Acrylic on canvas</p>
                </div>
            </div>
        </div>
    </div>
</template>