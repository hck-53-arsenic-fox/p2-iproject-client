<script>
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    computed: {
        ...mapState(useAppStore, ['userInfo'])
    },
}
</script>

<template>
    <nav class="navbar navbar-light bg-light">
        <button class="btn" type="button">
            <i class="mdi mdi-magnify"></i>
            Search User
        </button>

        <h1>Chat-App</h1>

        <div class="menu">
            <span class="material-symbols-outlined">
                notifications
            </span>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <!-- <div class="dropdown">
                <button class="rounded-circle image-container dropdown-toggle" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img :src="userInfo.pic" />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div> -->

        </div>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.5rem;
}

.menu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.material-symbols-outlined {
    transform: scale(1.5);
    cursor: pointer;
}

.btn {
    outline: 1px solid black;
    font-weight: 600;
}

.btn:hover {
    background-color: antiquewhite;
}

.image-container {
    height: 3rem;
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
}
</style>