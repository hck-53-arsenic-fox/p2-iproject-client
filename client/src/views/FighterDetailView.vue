<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'FighterDetailView',
    methods: {
        ...mapActions(useUserStore, ['fetchOneFighter'])
    },
    computed: {
        ...mapState(useUserStore, ['oneFighter', 'winRate'])
    },
    created() {
        this.fetchOneFighter(this.$route.params.id)
        console.log(this.winRate)
    }
}
</script>

<template>
    <h1 v-if="oneFighter.nickname" style="text-align: center;margin-top: 20px;">{{ oneFighter.name[1] }} "{{
        oneFighter.nickname
    }}" {{ oneFighter.name[0] }}</h1>
    <h1 v-if="!oneFighter.nickname" style="text-align: center;margin-top: 20px;">{{ oneFighter.name[1] }} {{
        oneFighter.name[0]
    }}</h1>
    <p style="text-align: center;font-size: 20px;">{{ oneFighter.win }}-{{ oneFighter.lose }}-{{ oneFighter.draw }}</p>
    <div class="container" style="margin-top: 50px;">
        <div class="row">
            <div class="col-4">
                <p style="font-size: 20px;">Country</p>
            </div>
            <div class="col-8">
                <p style="font-size: 20px;">{{ oneFighter.birthCountry }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <p style="font-size: 20px;">Birth Date</p>
            </div>
            <div class="col-8">
                <p style="font-size: 20px;">{{ oneFighter.birthDate }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <p style="font-size: 20px;">Win Rate</p>
            </div>
            <div class="col-6">
                <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 0 && winRate <= 10">
                    <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 11 && winRate <= 20">
                    <div class="progress-bar progress-bar-striped bg-success" style="width: 20%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 21 && winRate <= 30">
                    <div class="progress-bar progress-bar-striped bg-info" style="width: 30%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 31 && winRate <= 40">
                    <div class="progress-bar progress-bar-striped bg-warning" style="width: 40%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 41 && winRate <= 50">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 51 && winRate <= 60">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 60%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 61 && winRate <= 70">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 70%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 71 && winRate <= 80">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 80%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 81 && winRate <= 90">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 90%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 91 && winRate <= 95">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 95%"></div>
                </div>
                <div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100" v-if="winRate >= 96 && winRate <= 100">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
                </div>
            </div>
            <div class="col-2">
                <p>{{ winRate }}%</p>
            </div>
        </div>
        <div class="row justify-content-md-center" style="margin-top: 40px;">
            <div class="col-md-auto">
                <img src="https://www.clipartmax.com/png/full/333-3331175_png-file-pluspng-body-png-icon.png"
                    style="height:300px">
            </div>
            <div class="col-md-auto">
                <div class="row">
                    <p style="font-size: 20px;">Height: {{ oneFighter.height }}</p>
                    <p style="font-size: 20px;">Weight: {{ oneFighter.weight }}</p>
                    <p style="font-size: 20px;">Reach: {{ oneFighter.reach }}</p>
                </div>
            </div>
        </div>
    </div>
</template>