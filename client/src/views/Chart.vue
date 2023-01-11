<script>
import { useCounterStore } from '../stores/counter';
import Sidebar from '../components/Sidebar.vue';
import { mapActions, mapState } from 'pinia';
export default {
    components: {
        Sidebar
    },
    computed: {
        ...mapState(useCounterStore, ['dataDayTable', 'dataPriceTable', 'dataTotalSalesTable'])
    }, 
    methods: {
        ...mapActions(useCounterStore, ['fetchHistoryWeek']),
        chartSrc() {
            let monthStr = this.dataDayTable.map(x => "'" + x + "'").toString();
            console.log(monthStr);
            return `https://quickchart.io/chart?width=500&height=300&c={type:'bar',data:{labels:[${monthStr}],datasets:[{label:'Total Price per Day',data:[${this.dataPriceTable}],backgroundColor:'rgb(200, 182, 47)'}]}}`
        },
        formatRupiah(money) {
            return new Intl.NumberFormat('id-ID',
                { style: 'currency', currency: 'IDR' }
            ).format(money);
        }
    },
    created(){
        this.fetchHistoryWeek()
        console.log(this.dataDayTable, this.dataPriceTable);
    }
}
</script>

<template>
<Sidebar/>

<div class="pl-[150px] min-h-[100vh] bg-gray-100 flex flex-col w-[100%]">
    <div class="pt-[20px] pl-[20px]"><span class="text-[30px] font-bold">Report</span></div>
    <div class="p-6 bg-white mt-[30px] w-[60%] rounded-lg shadow-lg">
        <div>
            <div>
                <p class="font-semibold text-xl mb-1">Last Week Sales Report</p>
            </div>
            <div class="">
                <img :src="chartSrc()" width="600" alt="">
            </div>
        </div>
    </div>
    <div class="p-6 bg-white mt-[30px] w-[60%] rounded-lg shadow-lg">
        <div>
            <div>
                <p class="font-semibold text-xl mb-1">Total : {{formatRupiah(dataTotalSalesTable)}} </p>
            </div>
        </div>
    </div>
</div>
</template>