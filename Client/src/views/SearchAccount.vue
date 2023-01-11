<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';

    export default {
        data(){
            return{
                query: ''
            }
        },

        computed: {
            ...mapState(useGenshinStore, ['account'])
        },

        methods: {
            ...mapActions(useGenshinStore, ['getAcc']), 
        },

        // created(){
        //     this.getAcc(this.$route.query)
        // },

        watch: {
            '$route.query': {
                handler(newValue, oldValue){
                    this.getAcc(newValue)
                },
                deep: true
            }
        },

        
    }
</script>

<template>
    <body style="background-image: url(https://wallpaperaccess.com/full/3628936.jpg); background-repeat: no-repeat; background-size: contain;">
        <h1 style="color: white; display: flex; justify-content: center; padding-top: 50px;">Find a Traveller</h1><br/>
        <form id="acc-search" @submit.prevent="this.$router.push(`?uid=${query}`)">
            <input type="text" style="width: 500px; height: 35px; text-align: center;" placeholder="Insert UID here.." v-model="query"/>
            <input type="submit" style="height: 35px" value="Search UID">
        </form>
        <div>
            <img :src="account.Namecard" style="width: 750px"/>
            <img :src="account.PP" style="width: 125px;"/>
                <p>{{ account.Name }}</p>
                <p>{{ account.Level }}</p>
                <p>{{ account.WL }}</p>
                <p>{{ account.Achievements }}</p>
            <img :src="account.splashImg" style="width: 1000px"/>
        </div>
    </body>
</template>