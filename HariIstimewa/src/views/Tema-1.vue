<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

import { mapState, mapActions } from 'pinia'
import { useHawaStore } from '../stores/hariistimewa';


import { ref } from 'vue'

const open = ref(true)

export default {
    name: "tema-1",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            isOpen: true
        };
    },

    computed: {
        ...mapState(useHawaStore, ['dataInvitation']),

        isModalVisible() {
            return this.isOpen;
        }
    },

    methods: {
        ...mapActions(useHawaStore, ['fenchInvitaion']),


        // formatDate(date) {
        //     return date.toLocaleDateString('id-ID')
        // },

        
         async formatDate(date) {
            return date.toLocaleDateString('id-ID')
        },

        onToggle() {
            this.isOpen = !this.isOpen;
        }
    },
    created() {
        this.fenchInvitaion(this.$route.params.id)
    }
}
</script>

<template>
    <transition name="fade">
        <div v-if="isModalVisible" id="modal"
            class="overflow-x-hidden bg-[url('https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover  bg-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-end">

            <div class="absolute w-full h-full z-10 bg-gradient-to-t from-white to-transparent">
            </div>
            <div class="relative z-10 w-auto my-6 mx-auto max-w-3xl">
                <div
                    class="border-0 mb-5 px-5  relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                    <div>
                        <p class="flex text-xl font-serif font-semibold items-center justify-center">Wedding Of</p>
                        <div class="flex  items-center justify-center rounded-t">
                            <h3 class="text-3xl font-serif text-center text-black font-semibold">
                                {{ dataInvitation.groom_nick }} <span class="mx-4">&amp;</span>{{
                                    dataInvitation.bride_nick
                                }}
                            </h3>
                        </div>
                    </div>
                    <div class="relative p-3 text-center flex-auto">
                        <p class="my-4 text-lg">
                            Kepada Yth. Bapak/Ibu/Saudara/i
                        </p>
                        <p class="font-bold text-xl" v-if="this.$route.query.name ? this.$route.query.name : ''">
                            {{ this.$route.query.name }}</p>
                        <p class="my-4 text-md">
                            ditempat
                        </p>
                        <p class="text-sm mt-5 mx-auto  w-[60%]"
                            v-if="this.$route.query.name ? this.$route.query.name : ''">
                            *Mohon maaf apabila ada kesalahan pada
                            penulisan nama dan gelar
                        </p>
                    </div>
                    <div class="flex items-center justify-center p-6 rounded-b">
                        <button
                            class="bg-[#122851] text-white hover:bg-[#1a73e8] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="onToggle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                            <span> Buka Undangan</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>


    <!-- End Modal -->
    <div style="font-family:serif">
        <div class="fixed bottom-0 right-0 left-0 z-40">
            <audio id="music" :src="dataInvitation.Music.song_src" autoplay>
            </audio>
            <div
                class="absolute bottom-16 md:bottom-4 right-2 h-12 w-12 p-2 bg-white overflow-y-scroll flex justify-center items-center rounded-full border">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                    class="text-black -mr-1" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                        d="M176 96h16v320h-16zm144 0h16v320h-16z"></path>
                </svg>
            </div>
        </div>
        <div>
            <div class="shadow-lg h-screen">
                <div class="flex-wrap relative h-full">
                    <div class="absolute w-full h-full z-10 bg-gradient-to-t from-white to-transparent">
                    </div>
                    <img class="w-full h-full object-cover object-top z-10"
                        :src="dataInvitation.photo"
                        alt="">
                    <div class="absolute w-full bottom-16">
                        <p
                            class="relative w-full text-center font-bold tracking-wider text-sm uppercase py-4 z-10 text-black">
                            The Wedding Of</p>
                        <p
                            class="relative w-full text-center text-[#122851] text-5xl tracking-wide z-10 md:text-7xl text-black">
                            {{ dataInvitation.groom_nick }}
                            <span class="mx-4">&amp;</span>{{ dataInvitation.bride_nick }}
                        </p>
                        <p
                            class="relative w-full text-center font-bold tracking-wider text-sm uppercase py-4 z-10 #949494">
                            {{ formatDate(dataInvitation.ceremonial_date) }} </p>
                    </div>
                </div>
            </div>
            <div class="mb-12 ">
                <div class="relative">
                    <img class="absolute  z-10 top-0 left-0"
                        src="https://api.paleo.id/uploads/themes/decorations/f2-0r.png" alt="">
                    <img class="absolute z-10 bottom-0 right-0"
                        src="https://api.paleo.id/uploads/themes/decorations/f2-2r.png" alt="">
                    <div class="py-8 pt-24 mx-auto max-w-lg">
                        <h2 class="text-center text-[#122851] text-3xl sm:text-4xl aos-init aos-animate"
                            data-aos="zoom-in-up" data-aos-duration="1000">Wedding Invitation</h2><br>
                        <p data-aos="zoom-in-up" data-aos-duration="1000"
                            class="text-center font-light text-sm sm:text-base text-gray-700 tracking-wide aos-init aos-animate">
                            {{ dataInvitation.quote }}</p><br>
                        <p data-aos="zoom-in-up" data-aos-duration="1000"
                            class="text-center font-semibold text-sm sm:text-base text-gray-700 aos-init aos-animate">
                            {{ dataInvitation.quote_src }}</p>
                    </div>
                    <div name="brideGroomContainer" class="py-8 px-4 mx-auto max-w-sm"><br>
                        <div class="flex w-4/4 mx-auto">
                            <img class="object-cover object-top w-[100px] h-[100px] border-2 border-[#122851] rounded-full shadow-lg aos-init aos-animate"
                                :src="dataInvitation.groom_img" alt="Male" data-aos="fade-right">
                            <div class="pl-6">
                                <p class="text-4xl"
                                    style="color:#122851;font-family:Alesandra;font-size:2.0250000000000004rem">
                                    {{ dataInvitation.groom_nick }}</p>
                                <p class="font-light text-sm sm:text-base pb-2">{{ dataInvitation.groom }}</p>
                                <p class="font-light text-sm sm:text-base">Putra dari</p>
                                <p class="font-light text-sm sm:text-base">{{ dataInvitation.groom_father }} &amp;</p>
                                <p class="font-light text-sm sm:text-base">{{ dataInvitation.groom_mother }}</p>
                            </div>
                        </div><br><br>
                        <div class="flex w-4/4 mx-auto">
                            <img class="object-cover w-[100px] h-[100px] border-2 border-[#122851]  rounded-full shadow-lg aos-init aos-animate"
                                :src="dataInvitation.bride_img" alt="Male" data-aos="fade-right">
                            <div class="pl-6">
                                <p class="text-4xl"
                                    style="color:#122851;font-family:Alesandra;font-size:2.0250000000000004rem">
                                    {{ dataInvitation.bride_nick }}</p>
                                <p class="font-light text-sm sm:text-base pb-2">{{ dataInvitation.bride }}</p>
                                <p class="font-light text-sm sm:text-base">Putri dari</p>
                                <p class="font-light text-sm sm:text-base">{{ dataInvitation.bride_father }}
                                    &amp;</p>
                                <p class="font-light text-sm sm:text-base">{{ dataInvitation.bride_mother }}</p>
                            </div>
                        </div>
                    </div>
                    <div name="eventsContainer" class="pb-16">
                        <div class="py-8  px-[20%] ">
                            <h2 class="text-center text-3xl sm:text-4xl aos-init aos-animate"
                                style="color:#122851;font-family:Alesandra;font-size:2.0250000000000004rem"
                                data-aos="zoom-in-up" data-aos-duration="1000">{{ dataInvitation.matrimony_name }}</h2>
                            <br>
                            <div class="px-2 flex justify-center aos-init aos-animate" data-aos="zoom-in-up"
                                data-aos-duration="1000">
                                <div class="relative w-min">
                                    <div class="top-6 right-16 w-max absolute">
                                        <p class="text-xs w-28 font-light text-center uppercase border-t border-b border-gray-900 py-2 px-2 tracking-widest"
                                            style="border-color:#122851;color:#000000">{{
                                                dataInvitation.matrimony_date
                                            }}</p>
                                    </div>
                                    <p class="text-xs text-center uppercase text-gray-700 tracking-wide"
                                        style="font-size:0.6rem;color:#000000">Maret</p>
                                    <p class="text-3xl font-semibold text-center text-gray-700 tracking-wide">12</p>
                                    <p class="text-sm sm:text-base text-center text-gray-700 tracking-wide">2022</p>
                                    <div class="top-6 left-16 w-max absolute">
                                        <p class="text-xs w-28 font-light text-center uppercase border-t border-b border-gray-900 py-2 px-2 text-gray-700 tracking-wide"
                                            style="border-color:#122851;color:#000000">{{
                                                dataInvitation.matrimony_time_start
                                            }} - {{
    dataInvitation.matrimony_time_end
}}</p>
                                    </div>
                                </div>
                            </div>
                            <p data-aos="zoom-in-up" data-aos-duration="1000"
                                class="text-center max-w-lg mx-auto font-light white-space text-sm sm:text-base px-6 pt-2 text-gray-700 tracking-wide aos-init aos-animate">
                                AFD. D Tobasari, Sai Buttu Saribu, Pematang Sidamanik, Kabupaten Simalungun, Sumatera
                                Utara.</p>
                        </div>
                        <div class="py-8 px-[20%]">
                            <h2 class="text-center text-3xl sm:text-4xl aos-init aos-animate"
                                style="color:#122851;font-family:Alesandra;font-size:2.0250000000000004rem"
                                data-aos="zoom-in-up" data-aos-duration="1000">{{ dataInvitation.ceremonial_name }}</h2>
                            <br>
                            <div class="px-2 flex justify-center aos-init aos-animate" data-aos="zoom-in-up"
                                data-aos-duration="1000">
                                <div class="relative w-min">
                                    <div class="top-6 right-16 w-max absolute">
                                        <p class="text-xs w-28 font-light text-center uppercase border-t border-b border-gray-900 py-2 px-2 tracking-widest"
                                            style="border-color:#122851;color:#000000">Minggu</p>
                                    </div>
                                    <p class="text-xs text-center uppercase text-gray-700 tracking-wide"
                                        style="font-size:0.6rem;color:#000000">{{ dataInvitation.ceremonial_date }}</p>
                                    <p class="text-3xl font-semibold text-center text-gray-700 tracking-wide">13</p>
                                    <p class="text-sm sm:text-base text-center text-gray-700 tracking-wide">2022</p>
                                    <div class="top-6 left-16 w-max absolute">
                                        <p class="text-xs w-28 font-light text-center uppercase border-t border-b border-gray-900 py-2 px-2 text-gray-700 tracking-wide"
                                            style="border-color:#122851;color:#000000">{{
                                                dataInvitation.matrimony_time_start
                                            }} - {{
    dataInvitation.matrimony_time_end
}}</p>
                                    </div>
                                </div>
                            </div>
                            <p data-aos="zoom-in-up" data-aos-duration="1000"
                                class="text-center  max-w-lg mx-auto font-light white-space text-sm sm:text-base px-6 pt-2 text-gray-700 tracking-wide aos-init aos-animate">
                                Jl. Jawa Ujung Perumahan Javanise No. 12, Kel. Sei Sikambing C, Kec. Medan Helvetia Kota
                                Medan.</p>
                        </div>
                    </div>
                </div>
                <div name="locationContainer" class="py-8 px-8 pt-24">
                    <div class="mx-auto w-[80%] h-80 md:h-96  bg-gray-400 aos-init aos-animate" data-aos="zoom-in-up"
                        data-aos-duration="1000">
                        <div class="h-full w-full"><iframe
                                src="https://maps.google.com/maps?q=2.80492722218241,98.8424173370004&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                width="100%" height="100%" frameborder="0" class="border-0"></iframe>
                        </div>
                    </div>
                    <div class="flex pt-8">
                        <a target="_blank"
                            class="mx-auto rounded-lg  bg-[#122851] border-[#122851] inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm sm:text-base font-medium text-white bg-gray-700 aos-init aos-animate"
                            href="https://www.google.com/maps/search/?api=1&amp;query=2.80492722218241, 98.8424173370004"
                            rel="noreferrer" data-aos="zoom-in-up" data-aos-duration="1000">Buka di Google Map
                        </a>
                    </div>
                    <div class="pt-8 px-[20%]">
                        <img class="mx-auto pb-4 w-80 aos-init aos-animate" src="/health-protocol1.png" alt=""
                            data-aos="zoom-in-up" data-aos-duration="1000">
                        <p class="text-center white-space font-light text-sm sm:text-base text-gray-700 tracking-wide aos-init aos-animate"
                            data-aos="zoom-in-up" data-aos-duration="1000">Tanpa
                            mengurangi rasa hormat, untuk setiap tamu undangan yang akan hadir wajib mematuhi
                            protokol kesehatan yang dianjurkan oleh pemerintah.</p><br>
                        <p class="text-center font-light text-sm sm:text-base text-gray-700 tracking-wide aos-init aos-animate"
                            data-aos="zoom-in-up" data-aos-duration="1000">Pastikan
                            kondisi badan dalam keadaan sehat saat hadir di acara. Terima kasih atas partisipasi
                            Bapak/Ibu/Saudara/i.</p>
                    </div>
                </div>
                <div class="pb-8">
                    <div class="py-8 px-4 mx-auto max-w-sm">
                        <h2 class="text-center text-3xl sm:text-4xl value type name multiplier aos-init aos-animate"
                            style="color:#122851;font-family:Alesandra;font-size:2.0250000000000004rem"
                            data-aos="zoom-in-up" data-aos-delay="100">Galeri</h2><br>
                        <div class="lg-react-element grid grid-cols-3 gap-1">
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                            <a data-aos="zoom-in" style="cursor:pointer" :data-src="dataInvitation.photo"
                                data-lg-id="761d6d26-efd1-437c-a45b-b5d18c70df13" class="aos-init aos-animate">
                                <img class="h-44 w-28 max-h-28 mx-auto border-white shadow-lg object-cover"
                                    :src="dataInvitation.photo" alt="Galeri">
                            </a>
                        </div>
                    </div>
                    <div class="py-8 px-8 mx-auto max-w-auto pt-16">
                        <h2 class="text-center mb-5 text-[#122851] text-3xl sm:text-4xl">Cerita Kami</h2>
                        <div class="flex flex-col items-center text-center text-gray-50">
                            <div class="flex contents">
                                <div class="col-start-1 col-end-2 ml-4 mr-4 md:mx-auto relative">
                                    <div class="">
                                        <div class="h-full pointer-events-none bg-[#122851]">
                                        </div>
                                    </div>
                                    <div
                                        class="w-6 h-6 bg-[#122851] absolute top-1/2 -mt-3 rounded-full shadow text-center justify-center flex items-center">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24"
                                            height="24" class="text-white h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="px-[20%]  mr-auto w-full text-black">
                                        <img :src="dataInvitation.photo" class="w-100 rounded-xl mb-2">
                                        <h4 class="text-lg font-semibold mb-2 text-gray-700 tracking-wide">Perkenalan
                                        </h4>
                                        <div class="">

                                            <p class="font-light text-sm sm:text-base-wide mb-6 text-justify">
                                                {{ dataInvitation.story }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img class="absolute  z-10 top-0 left-0"
                        src="https://api.paleo.id/uploads/themes/decorations/f2-0r.png" alt="">
                    <img class="absolute z-10 bottom-0 right-0"
                        src="https://api.paleo.id/uploads/themes/decorations/f2-2r.png" alt="">
                    <div class="py-8">
                        <div name="banksContainer">
                            <div class="py-8 pt-12 px-8 lg:px-0 mx-auto max-w-xs">
                                <h2 class="text-center text-[#122851] text-3xl sm:text-4xl aos-init aos-animate"
                                    data-aos="zoom-in-up" data-aos-duration="1000">Berikan Hadiah</h2><br>
                                <p data-aos="zoom-in-up" data-aos-duration="1000"
                                    class="text-center font-light text-sm sm:text-base aos-init aos-animate">
                                    Tanpa mengurangi rasa hormat, untuk melengkapi
                                    kebahagiaan pengantin, Anda dapat memberikan tanda kasih melalui nomor
                                    rekening / dompet digital berikut ini :
                                </p>
                                <br>
                                <div class=""><br>
                                    <div class="mx-auto">
                                        <p class="text-center font-bold text-sm sm:text-base text-gray-600 aos-init aos-animate"
                                            data-aos="zoom-in-up" data-aos-duration="1000">
                                            {{ dataInvitation.wallet_bank }} An. {{ dataInvitation.wallet_owner }}</p>
                                        <p data-aos="zoom-in-up" data-aos-duration="1000"
                                            class="text-center rounded-lg border-[#122851] text-sm mt-4 sm:text-base px-4 py-2 border text-gray-600 font-bold aos-init aos-animate">
                                            {{ dataInvitation.wallet_no }}
                                        </p>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div name="guestContainer" class="py-8 px-8 lg:px-4 mx-auto max-w-lg pt-16">
                            <h2 class="text-center text-[#122851] text-3xl sm:text-4xl aos-init aos-animate"
                                data-aos="zoom-in-up" data-aos-duration="1000">Buku Tamu</h2><br>
                            <div class="flex "><button type="button"
                                    class="mx-auto rounded-lg bg-[#122851] inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm sm:text-base font-medium text-white bg-gray-700 aos-init aos-animate"
                                    data-aos="zoom-in-up" data-aos-duration="1000">Berikan Ucapan</button>
                            </div><br>
                            <div class=" max-h-60 overflow-hidden overflow-y-scroll  space-y-3 aos-init aos-animate"
                                data-aos="zoom-in-up" data-aos-duration="1000"
                                v-for="greet in dataInvitation.User.Greets">

                                <div class="relative flex items-start space-x-3">
                                    <div class="relative">
                                        <span
                                            class="flex mx-auto mb-4 items-center justify-center h-8 w-8 rounded-full bg-gray-400">
                                            <span class="text-sm sm:text-base font-normal leading-none text-white">{{
                                                greet.guest[0]
                                            }}</span></span>
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <div>
                                            <div class="text-xs flex justify-start">
                                                <p class="font-bold text-gray-900 tracking-wide mr-2">
                                                    {{ greet.guest }}
                                                </p> <span class="bg-blue-200 rounded-sm p-[2px]">{{
                                                    greet.presence
                                                }}</span>
                                            </div>
                                        </div>
                                        <div class="mt-2 font-light text-xs text-gray-700 tracking-wide">
                                            <p>
                                                {{ greet.greeting }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-8 px-4">
                            <p class="text-center text-2xl">Thank You!</p>
                            <p class="text-center font-light text-sm mt-2">Build with ❤️ by
                            </p>
                            <div class="flex justify-center mt-2">
                                <img src="https://hariistimewa.com/wp-content/images/logo-r.png" width="200" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>