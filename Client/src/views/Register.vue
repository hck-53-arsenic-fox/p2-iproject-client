<script>
import { mapState, mapActions } from "pinia";
import { useGenshinStore } from "../stores/store";

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },

    methods: {
        ...mapActions( useGenshinStore, ['register']),
        
        handleRegister(){
            this.register(this.email, this.password)
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="handleRegister" id="registerForm-user" style="background-color: white">
            <h2>Register Form</h2>
            Email:<br />
            <input type="text" v-model="email" id="email" /><br />
            Password:<br />
            <input type="password" v-model="password" id="password" /><br /><br /><br />
            <button class="btn btn-success">Register Account</button>
            <!-- <button type="submit">Register Account</button> -->
        </form>
    </div>
</template>
