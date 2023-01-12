<script>
    import { mapState, mapActions } from 'pinia';
    import { useGenshinStore } from '../stores/store';

    export default {
        computed: {
            ...mapState(useGenshinStore, ['chara'])
        },

        methods: {
            ...mapActions(useGenshinStore, ['getCharaId'])
        },

         created(){
            let {id} = this.$route.params
             this.getCharaId(+id)
        }
    }
</script>

<template>
    <body>
        <div id="side-pic" >
            <img :src="chara.image"/>
        </div>
        <div id="content-detail" style="border-style:solid; border-radius:15px; padding: 50px 50px; background-color:white; width: 90%; align-items: center; margin-left: 5%;">
            <h2>{{ chara.name }}</h2>
            <h5>{{ chara.description }}</h5>
            <br/>
            <h4>Talents:</h4>
            <div v-for="talents in chara.talents" :key="talents.id">
                <img :src="talents.icon" style="border-style: solid; border-radius: 15px;background-color: #001133;"/>
                <br/>
                <h5>{{ talents.name }}</h5>
                <h6>{{ talents.description }}</h6>
                <br/>
            </div>
            <h4>Skills:</h4>
            <div v-for="skills in chara.skills" :key="skills.id">
                <img :src="skills.icon" style="border-style: solid; border-radius: 15px;background-color: #001133;"/>
                <br/>
                <h5>{{ skills.name }}</h5>
                <h6>{{ skills.description }}</h6>
                <br/>
            </div>
        </div>
    </body>
</template>