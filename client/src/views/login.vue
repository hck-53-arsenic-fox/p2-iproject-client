<script>
import {mapActions, mapState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default{
    name: 'Login',
    data(){
       return{
        data:{
            email: '',
            password: ''
        }
       }
    },
    computed:{

    },
    methods:{
        ...mapActions(useCounterStore, ['handleLogin'])
    },
    created(){

    }
}

</script>

<template>
    <!-- Login section starts -->
    <section class="login">
        <div class="loginForm">
            <div class="contents">
                <div class="text">Login Form</div>
                <form @submit.prevent="handleLogin(data)">
                    <div class="field">
                        <span class="fas fa-user"></span>
                        <input v-model="data.email" type="text" placeholder="input your email">
                    </div>
                    <div class="field">
                        <span class="fas fa-lock"></span>
                        <input v-model="data.password" type="password" placeholder="input your password">
                    </div>
                    <div class="forgot-pass"><a href="">Forgot password?</a></div>
                    <button type="submit">Sign in</button>
                    <div class="sign-up-link">Not a member?
                        <RouterLink to="/register" >Signup now</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </section> 
    <!-- Login section ends -->
</template>