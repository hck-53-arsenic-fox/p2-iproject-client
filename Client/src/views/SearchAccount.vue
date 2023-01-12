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
    <body style="background-image: url(https://wallpaperaccess.com/full/3628936.jpg); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 1080px; ">
        <h1 style="color: white; display: flex; justify-content: center; padding-top: 50px;">Find a Traveller</h1><br/>
        <form id="acc-search" @submit.prevent="this.$router.push(`?uid=${query}`)">
            <input type="text" style="width: 500px; height: 35px; text-align: center;" placeholder="Insert UID here.." v-model="query"/>
            <input type="submit" style="height: 35px" value="Search UID">
        </form>
        <div id = player-card style="display: flex;">
            <!-- <img :src="account.Namecard" style="width: 1000px;"/> -->
            <img :src="account.PP" style="margin-top: 250px; border-style: solid; border-radius: 15px; background-color: white; margin-left: 25px;"/>
            <div style="margin-top: 250px; margin-left: 25px; border-style: solid; border-radius: 15px; padding-right: 250px; background-color: white ;">
                <h5 style="margin-bottom: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size-adjust: 550; margin-left: 25px; margin-top: 25px">Nickname: {{ account.Name }}</h5>
                <h5 style="margin-bottom: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size-adjust: 550;margin-left: 25px;">Level: {{ account.Level }}</h5>
                <h5 style="margin-bottom: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size-adjust: 550;margin-left: 25px;">World Level: {{ account.WL }}</h5>
                <h5 style="margin-bottom: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size-adjust: 550;margin-left: 25px;">Achievements: {{ account.Achievements }}</h5>
            </div>
            <img :src="account.splashImg" style="width: 1000px; margin-top: 75px;"/>
        </div>
    </body>
</template>