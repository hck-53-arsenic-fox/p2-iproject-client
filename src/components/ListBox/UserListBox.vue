<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../../stores/app';

export default {
    props: ['user'],
    methods: {
        ...mapActions(useAppStore, ['accessChat'])
    }
}
</script>

<template>
    <div class="myContainer" @click="accessChat(user._id)">
        <div class="img-container">
            <img :src="user.pic" />
        </div>
        <div class="detail">
            <p class="name">{{ user.name }}</p>
            <p>{{ user.email }}</p>
        </div>
    </div>
</template>

<style scoped>
.myContainer {
    border: 1px solid black;
    background-color: rgb(216, 216, 216);
    margin: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 0.7rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
}

.myContainer:hover {
    background-color: rgb(198, 198, 198);
}


.img-container {
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 100%;
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
}

.name {
    font-weight: 700;
}

.detail {
    display: flex;
    flex-direction: column;
}

p {
    margin: 0;
}
</style>