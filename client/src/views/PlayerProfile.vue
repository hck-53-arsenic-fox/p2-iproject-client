<script>
import { mapActions, mapState } from 'pinia';
import NavbarTwo from '../components/NavbarTwo.vue';
import { usePlayerStore } from '../stores/player'

export default {
    name: "PlayerProfile",
    methods: {
        ...mapActions(usePlayerStore, ["fetchOnePlayer", "addFavorite"])
    },
    computed: {
        ...mapState(usePlayerStore, ["onePlayer"])
    },
    created() {
        this.fetchOnePlayer(this.$route.params.id);
    },
    components: { NavbarTwo }
}
</script>

<template>
    <NavbarTwo />
    <section class="container" style="padding-top: 150px;">
        <div class="card d-flex justify-content-center" style="background-color: black;">
            <div class="row">
                <div class="col-6">
                    <div class="card-img">
                        <img :src="onePlayer.imgUrl" width="670" style="max-height: 100%;">
                    </div>
                </div>
                <div class=" d-flex col-6">
                    <div class="row">
                        <div class="col">

                            <img :src="onePlayer.logoUrl" width="230">
                            <div class="d-flex justify-content" style="margin-top: 90px; margin-left: 60px;">
                                <h3 style="font-size: 40px; color: white;"><strong>{{ onePlayer.name }}</strong></h3>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="d-flex justify-content"> -->
                        <h5 style="color: white;">{{ onePlayer.teamName }} | {{ onePlayer.teamShort }}</h5>
                    <!-- </div> -->

                </div>
            </div>

            <div class="row">
                <div class="col">
                    <h3 class="card-info-code ml-4 mt-1">Country: {{ onePlayer.country }}</h3>
                    <div class="mt-5 ml-4">
                        <dl class="data-list">
                            <div class="data-list-row">
                                <dt>Height</dt>
                                <dd>{{ onePlayer.height }}</dd>
                            </div>
                            <div class="data-list-row">
                                <dt>Weight</dt>
                                <dd>{{ onePlayer.weight }}</dd>
                            </div>
                            <div class="data-list-row">
                                <dt>Birth</dt>
                                <dd>{{ onePlayer.birthDate }}</dd>
                            </div>
                            <div class="data-list-row">
                                <dt>Age</dt>
                                <dd>{{ onePlayer.age }}</dd>
                            </div>
                        </dl>
                    </div>

                </div>
                <div class="card-container mt-5" style="background-color: black;">
                    <div class="card-info">
                        <h1 class="card-info-item"><strong>EXPERIENCE: {{ onePlayer.experience }} YEARS</strong></h1>

                        <!-- <h3><strong>Height: {{ onePlayer.height }}</strong></h3>
                        <h3><strong>Weight: {{ onePlayer.weight }}</strong></h3>
                        <h3><strong>Birth: {{ onePlayer.birthDate }}</strong></h3>
                        <h3><strong>Age: {{ onePlayer.age }}</strong></h3>
                        <h3><strong>Last attended: {{ onePlayer.lastAttended }}</strong></h3>
                        <h3><strong>Number: {{ onePlayer.playerNumber }}</strong></h3>
                        <h3><strong></strong></h3>
                        <h3><strong></strong></h3>
                        <h3><strong></strong></h3> -->


                        <!-- <div class="card-info-block">
                        <p class="card-info-price">{{ onePlayer.teamShort }} | {{ onePlayer.teamName }}</p>
                        <div role="img" aria-label="Рейтинг 5 из 5" class="card-info-rate">
                            <p>hahahaha</p>
                        </div>
                        <a href="#" class="card-info-reviews">HALOO</a>
                    </div> -->
                        <!-- <h2 class="card-title">Описание</h2>
                    <p class="card-text">Новогодняя игрушка Снеговик украсит ваш дом
                        к празднику. Небольшой размер позволяет поставить ее
                        в любое место: под елку, на стол, на камин, на полку. Все детали игрушки надежно
                        прикреплены,
                        так что она будет радовать вас много лет.</p>
                    <h2 class="card-title">Характеристики</h2>
                    <dl class="data-list">
                        <div class="data-list-row">
                            <dt>Бренд</dt>
                            <dd>Christmas toys</dd>
                        </div>
                        <div class="data-list-row">
                            <dt>Материал</dt>
                            <dd>Керамика, пластика, шерсть</dd>
                        </div>
                        <div class="data-list-row">
                            <dt>Высота</dt>
                            <dd>20 см</dd>
                        </div>
                        <div class="data-list-row">
                            <dt>Вес</dt>
                            <dd>150 гр</dd>
                        </div>
                    </dl> -->
                        <div class="card-buttons">
                            <button type="button" class="buy-link btn"
                                @click.prevent="addFavorite(onePlayer.id)">Follow</button>
                            <!-- <a href="#" class="availability-link">Наличие в магазинах</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
@font-face {
    font-family: 'Noto Sans';
    font-weight: 400;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
}

@font-face {
    font-family: 'Noto Sans';
    font-weight: 500;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap");
}

body {
    margin: 0;
    padding: 0;
    background-color: white;
    color: #0D0417;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    line-height: 140%;
    font-weight: 400;
}

main {
    box-sizing: border-box;
    min-width: 1366px;
    max-width: 1366px;
    margin: 98px;
}

.card {
    border: none;

    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
}

.card:before {

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #000000;
    transform: scaleY(1);
    transition: all 0.5s;
    transform-origin: bottom
}

.card:after {

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 13px;
    height: 100%;
    background-color: #aa2438;
    transform: scaleY(0);
    transition: all 0.5s;
    transform-origin: bottom
}

.card:hover::after {
    transform: scaleY(1);
}

/* 
.card {
    display: flex;
} */

.card-img {
    box-sizing: border-box;
    flex-shrink: 0;
    margin-right: 30px;
    border-radius: 8px;
}

.card-img img {
    display: block;
    max-width: 100%;
    height: auto;
}

.card-container {
    width: 470px;
    background-color: #F5F5F5;
    border-radius: 8px;
}

.card-info {
    display: grid;
    box-sizing: border-box;
    grid-template-rows:
        repeat(3, auto) 1fr repeat(2, auto);
    /* padding: 35px 30px; */
}

.card-info-code {
    line-height: 19px;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
}

.card-info-item {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    margin-top: 20px;
}

.card-info-block {
    display: flex;
    align-items: center;
}

.card-info-price {
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    padding-right: 30px;
}

.card-info-rate {
    display: flex;
    padding-right: 15px;
}

.rate-star {
    display: block;
}

.card-info-reviews {
    text-decoration: none;
    line-height: 19px;
    color: #0D0417;
}

.card-info-reviews:hover {
    text-decoration: underline;
    text-decoration-color: black;
}

.card-info-reviews:focus {
    text-decoration: underline;
    text-decoration-color: #F8D456;
    text-decoration-thickness: 2px;
}

.card-info-reviews:disabled {
    color: #B6B6BF;
}

.card-info-reviews:visited {
    color: #797980;
}

.card-title {
    margin-top: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
}

.data-list-row {
    border-bottom: 1px solid rgba(13, 4, 23, 0.1);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 0;
}

dt {
    line-height: 19px;
    color: #787878;
}

dd {
    line-height: 19px;
}

.card-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.buy-link {
    display: inline-block;
    background-color: #F8D456;
    border-radius: 6px;
    padding: 15px 25px;
    position: relative;
    margin-right: 30px;
    border-bottom-width: 0;
    border: 2px solid #F8D456;
}

.buy-link:hover {
    background-color: inherit;
    border: 2px solid #F8D456;
}

.buy-link:focus {
    background-color: #F8D456;
    border: 2px solid #0D0417;
}

.buy-link:disabled {
    background-color: #E5E4E1;
    color: #A6A5A2;
}

.availability-link {
    text-decoration: none;
    font-weight: 500;
    line-height: 19px;
    color: #0D0417;
}

.availability-link:focus {
    text-decoration: underline;
    text-decoration-color: #F8D456;
}

.availability-link:visited {
    color: #797980;
}

.availability-link:disabled {
    color: #B6B6BF;
}

.availability-link::after {
    content: "";
    width: 18px;
    height: 18px;
    background-image: url("https://raw.githubusercontent.com/jenyadev3/card/f3100e3316866811507796cf04830e95672c1b9c/images/arrow%20left.svg");
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    background-size: 3px 6px;
    border-radius: 50%;
    margin-left: 20px;
}

.availability-link:hover::after {
    content: "";
    width: 18px;
    height: 18px;
    background-image: url("https://raw.githubusercontent.com/jenyadev3/card/f3100e3316866811507796cf04830e95672c1b9c/images/arrow%20left.svg");
    background-color: #F8D456;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    background-size: 3px 6px;
    border-radius: 50%;
    margin-left: 20px;
}
</style>