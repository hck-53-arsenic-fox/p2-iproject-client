<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

import UserListBox from './ListBox/UserListBox.vue';
export default {
    components: {
        UserListBox
    },
    data() {
        return {
            dimmer: true,
            right: false,
            search: '',
        };
    },
    computed: {
        ...mapState(useAppStore, ['openSideBar', 'userList'])
    },
    methods: {
        ...mapActions(useAppStore, ['toggleSidebar', 'searchUsers']),

        searchComponent() {
            this.searchUsers(this.search)
        }
    }
};
</script>

<template>
    <section>
        <!--Sidebar with Dimmer -->
        <div class="sidebar-container" :class="openSideBar ? 'dimmer-opened' : ''">
            <!-- Sidebar -->
            <div class="custom-sidebar" :class="[right ? 'custom-sidebar-active' : 'custom-sidebar-inactive']">
                <!-- Sidebar Content -->
                <div ref="content" class="sidebar-content" :class="[openSideBar ? 'opened' : 'closed']">
                    <div class="search-container">
                        <form class="mt-4 p-0">
                            <input type="text" placeholder="Search.." name="search" autocomplete="off" v-model="search">
                            <button type="submit" @click.prevent="searchComponent"><i
                                    class="mdi mdi-magnify"></i></button>
                        </form>

                        <div class="user-container">
                            <h4 v-if="userList && !userList.length">No Result Found</h4>
                            <UserListBox v-for="user in userList" :key="user._id" :user="user" />
                        </div>
                    </div>


                </div>
            </div>

            <transition name="fade">
                <!-- Dimmer -->
                <div v-if="dimmer && openSideBar" @click="toggleSidebar()" class="dimmer"
                    :class="openSideBar ? 'dimmer-opened' : ''" />
            </transition>
        </div>

    </section>
</template>

<style scoped>
.sidebar-container {
    position: fixed;
    inset: 0;
    display: flex;
    width: 0;
    /* z-index: 0; */
}

.custom-sidebar {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    height: 100vh;
    z-index: 11;
}

.custom-sidebar-active {
    right: 0;
    flex-direction: row;
}

.custom-sidebar-inactive {
    left: 0;
    flex-direction: row-reverse;
}

.drawer-trigger {
    width: 3rem;
    height: 12rem;
    padding: 0.25rem;
    margin: auto 0;
    border-radius: 0.25rem;
    color: white;
    background-color: rgb(75 85 99);
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: white;
    transition: all 0.7s;

    /* align-items: center; */
}

.opened {
    max-width: 32rem;
    padding: 1rem
}

.closed {
    max-width: 0rem;
    padding: 0rem
}

.sidebar-text {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    text-align: center;
    width: 12rem;
}

.dimmer {
    z-index: 10;
    background-color: #9CA3AF;
    opacity: 0.75;
    flex: 1 1 0%;
    width: 0;
}

.dimmer-opened {
    width: 100vw;
    z-index: 10;
}

/* Search Container */
h4 {
    margin-top: 2rem;
    text-align: center;
}

input[type=text] {
    font-size: 17px;
    border: none;
}

form {
    border: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}

form input {
    padding-left: 0.5rem;
}

.search-container button {
    float: right;
    width: 1.5rem;
    height: 1.5rem;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.search-container button:hover {
    background: #ccc;
}


.user-container {
    overflow: scroll;
}

/* Search Container END*/



.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
