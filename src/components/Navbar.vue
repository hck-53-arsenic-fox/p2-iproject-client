<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['openModal']),
        ...mapState(useAppStore, ['userInfo'])
    },
    methods: {
        drop() {
            this.isOpen = !this.isOpen
        },

        ...mapActions(useAppStore, ['logout', 'toggleModal', 'toggleSidebar'])
    }
}
</script>

<template>
    <nav class="navbar navbar-light bg-light">
        <button class="btn" type="button" @click="toggleSidebar">
            <i class="mdi mdi-magnify"></i>
            Search User
        </button>

        <h1>Chat-App</h1>

        <div class="menu">
            <span class="material-symbols-outlined">
                notifications
            </span>
            <div :class="['dropdown-container', isOpen ? 'button-activated' : '']" @click="drop">
                <button class="button-container">
                    <div class="rounded-circle image-container">
                        <img :src="userInfo.pic" />
                    </div>
                    <span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </button>
                <div :class="['dropdown', 'rounded-2', 'shadow-lg', isOpen ? 'active' : '']">
                    <a class="dropdown-item" href="#" @click.prevent="toggleModal">My Profile</a>
                    <a class="dropdown-item" href="#" @click.prevent="logout">Log Out</a>
                </div>
            </div>

        </div>
    </nav>
</template>



<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.25rem 1rem;
    border-bottom: 5px solid rgb(195, 195, 195);
}

.menu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
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
    background-color: rgb(174, 189, 209);
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    background-color: transparent;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    transition: 0.2s;
}

.button-container:hover {
    background-color: rgb(174, 189, 209);
}

.button-activated {
    border-radius: 0.5rem;
    background-color: rgb(174, 189, 209);
}

.image-container {
    height: 2.5rem;
    width: 2.5rem;
    overflow: hidden;
    display: flex;
}

img {
    height: 100%;
    width: 100%;
}

.dropdown-container {
    position: relative;
}

.dropdown {
    background-color: white;
    position: absolute;
    right: 0;
    top: 3.5rem;
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;
    border: 1px solid rgb(164, 164, 164);
}

.dropdown-item {
    width: 8rem;
    padding: 0 0.5rem;
    transition: 0.15s ease-in-out;
    z-index: 2;
}

.dropdown-item:hover {
    background-color: rgb(174, 189, 209);
}

.active {
    display: flex
}
</style>