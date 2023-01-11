<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Sidebar from '../components/Sidebar.vue';
    export default {
        components: {
            Sidebar
        },
        data(){
            return{
                customerName: '',
                dataForm: [],
                email: '',
                TtlPrice: 0,
                filterType: "all"
            }
        },
        computed: {
            ...mapState(useCounterStore, ['dataProduct', 'imgTable', 'dataTrx', 'totalPrice']),
            dataFilter(){
                let data = this.dataForm.filter(el => {
                    if (el.amount > 0) {
                        return el
                    }
                })
                return data
            },
            dataFilterType(){
                if (this.filterType !== 'all') {
                    return this.dataForm.filter(el => el.type == this.filterType)
                } else {
                    return this.dataForm
                }
            }
        },
        watch: {
            dataForm: {
                handler(value){
                    let totalPrice = 0 
                    value.forEach(el => {
                        totalPrice += (el.price * el.amount)
                    })
                    this.TtlPrice = totalPrice
                },
                deep: true
            }
        },
        methods : {
            ...mapActions(useCounterStore, ['fetchProduct', 'buttonHistory', 'handleSendEmail']),

            handlerFilter(type){
                this.filterType = type
            },
            handleFormPayment(){
                let data = this.dataForm.filter(el => el.amount > 0)
                data.map(el => {
                    el.customerName = this.customerName
                    return el
                })
                this.handleFormPay(data, this.customerName)
            }
        },
        async created(){
            await this.fetchProduct()
            let data = this.dataProduct.map(el => {
                return {
                    id: el.id, 
                    name: el.name, 
                    amount: 0,
                    imageUrl: el.imageUrl,
                    price: el.price,
                    type: el.type

                }
            })
            this.dataForm = data
        },
    }
</script>

<template>
    <Sidebar/>

    <!-- HOME -->
    <div class="w-full pl-[150px] h-full bg-gray-100 flex flex-col w-[75%]">
        <div class="pt-[20px] pl-[20px]"><span class="text-[30px] font-bold">Menu</span></div>
        <div class="pt-[30px] px-[20px] flex justify-between">
            <div>
                <button @click="handlerFilter('all')" class="mr-[15px] shadow-md rounded-xl bg-white w-[120px] h-[40px] text-[15px] font-semibold hover:text-white hover:bg-yellow-600 hover:"><i class="fa-solid fa-star"></i> All</button>
                <button @click="handlerFilter('Food')" class="mx-[15px] shadow-md rounded-xl bg-white w-[120px] h-[40px] text-[15px] font-semibold hover:text-white hover:bg-yellow-600 hover:"><i class="fa-solid fa-utensils"></i> Foods</button>
                <button @click="handlerFilter('Drink')" class="mx-[15px] shadow-md rounded-xl bg-white w-[120px] h-[40px] text-[15px] font-semibold hover:text-white hover:bg-yellow-600 hover:"><i class="fa-solid fa-martini-glass-empty"></i> Drinks</button>
            </div>
            <div>
                <form action="" class="shadow-md rounded-2xl">
                </form>
            </div>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleFormPayment">
        <div class="mt-[20px] flex justify-between mx-6">
            <input class="h-[40px] pl-4 w-[250px] rounded-2xl" type="text" placeholder="Customer Name" v-model="customerName" required>
            <!-- <button type="submit" class="mr-2 w-[120px] bg-yellow-400 font-semibold rounded-lg hover:bg-white">Add To Cart</button> -->
        </div>
        <div class="flex mt-[5px] grid grid-cols-4 gap-4 mr-[50px]" >
            <div class="mx-[20px] mt-4 flex flex-col bg-white rounded-xl card w-[230px] h-[300px]" v-for="data in dataFilterType" :key="data.id">
                <img class="mx-auto my-4 rounded-xl h-[50%]" style="aspect-ratio: 1/1; width: 200px;" :src="data.imageUrl" alt="">
                <p class="mx-4 font-semibold text-[17px]">{{data.name}}</p>
                <p class="mx-4 font-semibold text-[17px] text-yellow-600">Rp.{{data.price}}</p>
                <div class="mx-4 my-4 h-[40%]">
                    <form action="" class="flex justify-between">
                        <div class="flex">
                            <span>amount: </span>
                            <input type="number" min="0" v-model="data.amount" class="ml-2 border-[1px] w-[50px] pl-1 ">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </form>
        <!-- card -->
    </div>
    <!-- HOME END -->
    
    <!-- BILL -->
    <section class="h-screen w-[25%] right-0 top-0 fixed z-50 bg-white px-4 overflow-y-auto flex flex-col justify-between" id="sidebar" >
        <div class="h-[75%]">
            <div class="font-semibold text-[25px] h-[10%] mt-[30px] ml-[30px] border-b-2">
                <p>Order</p>
            </div>
            <div class="ml-[20px] overflow-y-auto h-[90%]">
                <div class="w-full mt-[20px] flex border-b-2 " v-for="trx in dataFilter" :key="trx.id">
                    <div class="my-auto">
                        <img :src="trx.imageUrl" class="rounded-2xl" style="aspect-ratio: 1/1; width: 70px;" alt="">
                    </div>
                    <div class="ml-4 my-[5px] w-full flex flex-col justify-between">
                        <p class="font-semibold mr-4">{{trx.name}}</p>
                        <div class="flex justify-between mr-4">
                            <p class="font-semibold">Rp.{{ trx.price }}</p>
                            <p class="font-semibold">{{ trx.amount }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-[10px] flex flex-col h-[25%]">
            <div class="my-auto">
                <div class="flex justify-between bg-gray-200 p-3 rounded">
                    <p class="text-[20px]">Total</p>
                    <p class="text-[20px]">Rp. {{TtlPrice}}</p>
                </div>
                <div class="mt-[30px] ">
                    <form class="flex" action="">
                        <input class="w-[70%] border-[1px] pl-4 rounded-l-xl" type="text" placeholder="Kirim Email" required v-model="email">
                        <button class="w-[30%] bg-cyan-200 hover:bg-cyan-300 rounded-r-xl" @click.prevent="handleSendEmail(dataFilter, this.customerName, this.TtlPrice, this.email)"><i class="fa-solid fa-envelope"></i></button>
                    </form>
                </div>
                <div>
                    <button class="flex w-full my-2 justify-between bg-yellow-500 hover:bg-yellow-600 p-2 rounded text-white text-[20px] font-bold" @click.prevent="buttonHistory(dataFilter ,this.customerName, this.TtlPrice)">
                        <span class="mx-auto">Done</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <!-- BILL END -->


</template>