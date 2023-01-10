<script>
export default {
    name: 'PlayerCard',
    props: ['player']
}
</script>

<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="class-item d-flex align-items-center">
                <a href="single.html" class="class-item-thumbnail">
                    <img :src="player.imgUrl" alt="Free website template by Free-Template.co">
                </a>
                <div class="class-item-text">

                    <h2><a href="single.html">{{ player.name }}</a></h2>
                    <span>{{ player.teamName }}</span>,
                    <span>30 minutes</span>
                </div>
            </div>
        </div>
    </div>
</template>