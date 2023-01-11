<script>
    import {mapActions, mapState} from "pinia"
    import {useCounterStore} from "../stores/counter"

    export default{
        data(){
            return {

            }
        },
        computed :{
            ...mapState(useCounterStore, ["isTour"])
        },
        methods : {
            ...mapActions(useCounterStore, ["logout", "toShop", "toTour", "switchPage"])
        }
    }
</script>

<template>
    <section>
            <nav class="flex justify-between absolute text-black items-center px-16 py-4 z-30 w-full top-0">
                <div class="flex items-center p-2 justify-center gap-x-3">
                    <router-link to="/">
                        <div class="">
                            <img src="../assets/letter_u_building_modern_business_logo-removebg-preview.png" alt="" width="40" class="">
                        </div>
                    </router-link>
                </div>
                <div class=" flex pl-4 gap-x-5 text-xs">
                    <router-link to="/useum">
                            <div class="hover:underline underline-offset-4 duration-300">
                                <p>Useums</p>
                            </div>

                    </router-link>
                    <router-link to="/artist">
                            <div class="border-b border-transparent hover:border-white duration-300">
                                <p>Artists</p>
                            </div>

                    </router-link>
                    <router-link to="/exhibitions">
                            <div class="border-b border-transparent hover:border-white duration-300">
                                <p>Exhibitions</p>
                            </div>

                    </router-link>
                    <router-link to="/shop">
                            <div class="border-b border-transparent hover:border-white duration-300">
                                <p>Shop</p>
                            </div>
                    </router-link>
                    <router-link to="/tour" @click="toTour">
                            <div class="border-b border-transparent hover:border-white duration-300">
                                <p>Tour</p>
                            </div>
                    </router-link>
                </div>
                <div class="">
                    <div class="p-2 py-1 text-sm border text-white border-black bg-[#3e01ff] hover:bg-white hover:text-black" @click="logout">
                        <p class="text-xs">Logout</p>
                    </div>
                </div>
            </nav>
        </section>    
</template>