<script>
import { useCounterStore } from '../stores/counter';
import Sidebar from '../components/Sidebar.vue';
import { mapActions, mapState } from 'pinia';

export default{
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
        ...mapActions(useCounterStore, ['fetchHistory'])
    }

}
</script>

<template>
   <Sidebar/>
   <div class="w-full pl-[150px] h-full bg-gray-100 flex flex-col w-[100%]">
        <div class="pt-[20px] pl-[20px]"><span class="text-[30px] font-bold">History</span></div>
        <div class="mt-6">
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
                    <tr v-for="data,index in dataHistory" :key="data.id">
                        <td class="py-2 text-center">{{ index+ 1 }}</td>
                        <td class="py-2">{{ data.customerName }}</td>
                        <td class="py-2">{{ data.cashierName }}</td>
                        <td class="py-2">{{ data.createdAt.slice(0,10) }}</td>
                        <td class="py-2">{{ data.price }}</td>
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
    tr:nth-child(even) {
     background-color: #d6eeee8d;
    }
</style>