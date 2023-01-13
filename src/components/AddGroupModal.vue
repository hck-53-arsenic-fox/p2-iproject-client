<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

import UserListBox from './ListBox/UserListBox.vue';
export default {
    data() {
        return {
            search: '',
            addToGroup: true
        }
    },
    components: {
        UserListBox
    },
    computed: {
        ...mapWritableState(useAppStore, ['groupModal']),
        ...mapState(useAppStore, ['userInfo', 'userList'])
    },
    methods: {
        ...mapActions(useAppStore, ['toggleGroupModal', 'searchUsers']),

        searchComponent() {
            this.searchUsers(this.search)
        }
    }
}

</script>


<template>
    <section>

        <div v-if="groupModal.openModal" class="custom-modal">
            <div class="title">
                <h1 class="text-center">Create Group Chat</h1>
                <a @click.prevent="toggleGroupModal()">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </a>
            </div>
            <div class="w-100">
                <form>
                    <input type="text" placeholder="Chat Group Name" />
                    <div class="d-flex">
                        <input type="text" placeholder="Search users to be added" name="search" v-model="search">
                        <button type="submit" @click.prevent="searchComponent"><i class="mdi mdi-magnify"></i></button>
                    </div>
                </form>

                <div class="user-container">
                    <h4 v-if="userList && !userList.length">No Result Found</h4>
                    <UserListBox v-for="user in userList" :key="user._id" :user="user" :addToGroup="addToGroup" />
                </div>

            </div>
            <p>Email: {{ userInfo.email }}</p>
        </div>
    </section>
</template>

<style scoped>
.custom-modal {
    position: sticky;
    z-index: 999;
    height: 22rem;
    width: 30rem;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    background-color: white;
    border-radius: 1rem;
    font-size: 0.8rem;
}

.title {
    position: relative;
    width: 100%;
}

.title a {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem;
    cursor: pointer;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    padding: 0.1rem;
    width: 100%;
}

input {
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    width: 99%;
}

button[type="submit"] {
    width: 2.6rem;
    height: 2.6rem;
}

.user-container {
    overflow: scroll;
}

section::before {
    display: v-bind('groupModal.display');
    position: fixed;
    z-index: 99;
    content: '';
    background-color: rgb(213, 213, 213);
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.open {
    display: block;
}
</style>