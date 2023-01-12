<script>
import { def } from '@vue/shared';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default{
    computed: {
        ...mapState(useCounterStore, ['dataHistoryDate', 'qrCode'])
    },
    methods: {
        ...mapActions(useCounterStore, ['FetchHistoryDate', 'handleDownload']),
        link(){
            let key = '6fwiAGhyFjv3fQrLDylbw1o9T5GfM6rCZfU1ZTZ4e82Vg5E7tQxqX0bQ4Q8qjoxM'
            return `https://api.html2pdf.app/v1/generate?html=https://ngacir-app.web.app/history/${this.$route.params.date}&apiKey=${key}`
        }
    },
    created() {
        this.FetchHistoryDate(this.$route.params.date)
        console.log(this.$route.params.date);
    }
}
</script>

<template>
    <div class="w-full flex justify-between">
        <div class="mx-4 ">
            <RouterLink class="p-2 border-2" to="/histories" href="">Back</RouterLink>
            <a class="p-2 border-2" :href="link()">Download</a>
        </div>
        <!-- <div class="mx-4 ">
        </div> -->
        <img :src="qrCode" width="150" alt="">
    </div>
<div class="w-screen flex justify-center">
    <table>
        <tr>
            <th class="px-4 py-0.5 border-[1px]">No</th>
            <th class="px-[20px] py-0.5 border-[1px]">Customer Name</th>
            <th class="px-[50px] py-0.5 border-[1px]">Cashier</th>
            <th class="px-4 py-0.5 border-[1px]">Date</th>
            <th class="px-4 py-0.5 border-[1px]">Price</th>
        </tr>
        <tr v-for="data,index in dataHistoryDate">
            <td class="border-b-[1px]">{{index + 1}}</td>
            <td class="border-b-[1px]">{{data.customerName}}</td>
            <td class="border-b-[1px]">{{data.cashierName}}</td>
            <td class="border-b-[1px]">{{data.createdAt.slice(0,10)}}</td>
            <td class="border-b-[1px]">{{data.price}}</td>
        </tr>
    </table>
</div>
</template>