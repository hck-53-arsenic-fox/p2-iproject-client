<script>
import { useCounterStore } from '../stores/counter';
import Sidebar from '../components/Sidebar.vue';
import { mapActions, mapState } from 'pinia';

export default{
    data(){
        return{
            date: ''
        }
    },
    components: {
        Sidebar
    },
    computed: {
        ...mapState(useCounterStore, ['dataHistory'])
    },
    created() {
        this.fetchHistory()
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchHistory', 'formatDate']),
        formatRupiah(money) {
            return new Intl.NumberFormat('id-ID',
                { style: 'currency', currency: 'IDR' }
            ).format(money);
        }
    }

}
</script>

<template>
   <Sidebar/>
   <div class="w-full pl-[150px] min-h-[100vh] bg-gray-100 flex flex-col w-[100%]">
        <div class="pt-[20px] pl-[20px]"><span class="text-[30px] font-bold">History</span></div>
        <div class="mt-2">
            <form action="" >
                <a class="bg-red-700 text-white py-1 px-4 mr-4 rounded-lg hover:bg-red-800" @click="this.$router.push(`/history/${date}`)">Download</a>
                <input class="px-2" type="date" v-model="date">
            </form>
        </div>
        <div class="mt-4">
            <table class="bg-white shadow-lg rounded-lg">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border-b-2">No</th>
                        <th class="px-[30px] py-2 border-b-2">CustomerName</th>
                        <th class="px-[80px] py-2 border-b-2">Cashier</th>
                        <th class="px-[50px] py-2 border-b-2">Date</th>
                        <th class="px-[50px] py-2 border-b-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="ba" v-for="data,index in dataHistory" :key="data.id">
                        <td class="py-2 text-center">{{ index+ 1 }}</td>
                        <td class="py-2">{{ data.customerName }}</td>
                        <td class="py-2">{{ data.cashierName }}</td>
                        <td class="py-2">{{ data.createdAt.slice(0,10) }}</td>
                        <td class="py-2">{{ formatRupiah (data.price) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<style>
    table th td {
        text-align: center;
    }
    ba:nth-child(even) {
     background-color: #d6eeee8d;
    }
</style>