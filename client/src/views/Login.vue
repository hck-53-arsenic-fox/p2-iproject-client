<script>
    import { mapActions, mapState, mapWritableState } from "pinia";
    import {useCounterStore} from "../stores/counter"
    import { GoogleLogin } from 'vue3-google-login';
    export default {
        data(){
            return {
                data : {
                    email : "",
                    password : "",
                },
                dataRegister : {
                    username : "",
                    email : "",
                    password : ""
                },
                isRegister : false
            }
        },
        components : {
            GoogleLogin
        },
        methods : {
            ...mapActions(useCounterStore, ["login", "register", "googleLogin"])
            ,callback(response) {
            this.google(response.credential);
            },
            google(token) {
                this.googleLogin(token);
            },
            toRegister(){
                this.isRegister = !this.isRegister
            }
        }
    }
</script>


<template>
      <section>
            <div class="h-screen flex justify-between border border-black bg-cover" id="banner">
                <div v-if="!isRegister" class="w-5/12 pl-16 relative bg-[#252526] text-white" id="login">
                    <div class="flex items-center h-1/6 -translate-x-9">
                        <img src="../assets/letter_u_building_modern_business_logo-removebg-preview.png" alt="" width="30" class="">
                        <p class="text-2xl font-bold">SEUM.</p>
                    </div>
                    <div class="flex flex-col justify-center h-4/6 gap-y-4 px-7 pr-14">
                        <h1 class="text-2xl">Welcome back</h1>
                        <form class="flex flex-col" @submit.prevent="login(data)">
                            <label for="">Email</label>
                            <input type="text" class="border text-black border-black px-3 py-1 appearance-none outline-none" v-model="data.email">
                            <label for="" class="mt-4">Password</label>
                            <input type="password" class="border border-black text-black px-3 py-1 appearance-none outline-none" v-model="data.password">
                            <div class="bg-black border border-black text-white text-center mt-5 py-1 hover:bg-white hover:text-black">
                                <button type="submit">Sign in</button>
                            </div>
                            <div class="mt-7 flex justify-center">
                                <GoogleLogin :callback="callback" />
                            </div>
                        </form>
                            <div class="text-center mt-4">
                                <p class="font-light text-white">Don`t have a account? <button class="text-blue-600" @click="toRegister">Sign up</button></p>
                            </div>
                        <div class="absolute bottom-12 -translate-x-16">
                            <p class="font-light">&#169; Useum 2022</p>
                        </div>
                    </div>
                </div>
                <div v-if="isRegister" class="w-5/12 pl-16 bg-white h-full" id="register">
                    <div class="flex items-center h-1/6 -translate-x-9">
                        <img src="../assets/letter_u_building_modern_business_logo-removebg-preview.png" alt="" width="30" class="">
                        <p class="text-2xl font-bold">SEUM.</p>
                    </div>
                    <div class="flex flex-col justify-center h-4/6 gap-y-4 px-7 pr-14">
                        <h1 class="text-2xl">Welcome Artist!</h1>
                        <form action="" class="flex flex-col" @submit.prevent="register(dataRegister)">
                            <label for="">Username</label>
                            <input type="text" class="border border-black px-3 py-1 appearance-none outline-none" v-model="dataRegister.username">
                            <label for="" class="mt-4">Email</label>
                            <input type="text" class="border border-black px-3 py-1 appearance-none outline-none" v-model="dataRegister.email">
                            <label for="" class="mt-4">Password</label>
                            <input type="password" class="border border-black px-3 py-1 appearance-none outline-none" v-model="dataRegister.password">
                            <div class="bg-black border border-black text-white text-center mt-5 py-1 hover:bg-white hover:text-black">
                                <button type="submit">Sign in</button>
                            </div>
                        </form>
                        <div class="text-center mt-4">
                            <p class="font-light text-slate-800">Already have a account? <button class="text-blue-600" @click="toRegister">Sign in</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style>
    #banner{
        background-image: url("../assets/nasa-Q1p7bh3SHj8-unsplash.webp");
    }
</style>
