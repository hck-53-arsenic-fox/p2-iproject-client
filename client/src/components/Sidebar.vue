<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default{

    methods: {
        ...mapActions(useCounterStore, ['handleLogout'])
    },
    computed: {
        ...mapState(useCounterStore, ['imgWA'])
    }
}
</script>

<template>
        <!-- SIDEBAR -->
        <section class="h-screen w-[120px] left-0 top-0 fixed z-50 bg-white px-4 sidebar" id="sidebar" >
        <div class="flex items-center justify-between h-14 border-b-2 border-b-yellow-600 sidebar-header h-[10%]">
                <h3 class="flex items-center mx-auto font-bold">
                    <img class="rounded-full mr-2" src="data:image/png;base64,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" width="30" alt="">
                    <span class="text-[18px]">Ngasir</span>
                </h3>
            </div>
            <div class="py-5 px-2 sidebar-menu flex flex-col justify-between h-[90%]">
                <ul>
                    <li class="my-5">
                        <RouterLink to="/" href="" class="text-base hover:font-medium group flex flex-col my-6">
                            <i class="mx-auto text-gray-400 text-[25px] fa-solid fa-cart-shopping group-hover:text-[27px] "></i>
                            <span class="text-gray-400 text-[12px] mx-auto">Transaction </span>
                        </RouterLink>
                        <RouterLink to="/histories" href="" class="text-base group hover:font-medium flex flex-col my-6">
                            <i class="mx-auto text-gray-400 text-[25px] fa-solid fa-book group-hover:text-[27px] "></i>
                            <span class="text-gray-400 text-[12px] mx-auto">History </span>
                        </RouterLink>
                        <RouterLink to="/charts" href="" class="text-base group hover:font-medium flex flex-col my-6">
                            <i class="mx-auto text-gray-400 text-[25px] group-hover:text-[27px] fa-solid fa-chart-column"></i>
                            <span class="text-gray-400 text-[12px] mx-auto">Grafik </span>
                        </RouterLink>
                    </li>
                </ul>
                <ul>
                    <li class="my-5">
                        <a href="" class="text-base text-center hover:font-medium flex flex-col align-center justify-center my-6 group">
                            <img :src="imgWA" class="rounded-full text-center text-[40px] mx-auto" width="40" alt="">
                        </a>
                        <a href="" class="text-base hover:font-medium flex flex-col my-6 group" @click="handleLogout">
                            <i class="mx-auto text-gray-400 text-[20px] fa-solid fa-right-from-bracket group-hover:text-[22px]"></i>
                        </a>
                    </li>
                </ul>
            </div>
    </section>
    <!-- SIDEBAR END -->
</template>