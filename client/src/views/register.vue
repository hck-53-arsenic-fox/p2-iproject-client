<script>
import {mapActions, mapState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default{
    name: 'Register',
    computed:{

    },
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
        ...mapActions(useCounterStore, ['handleRegister'])
    },
    created(){

    }
}


</script>

<template>

    <!-- register section starts -->
    <section class="register">
            <div class="loginForm">
                <div class="contents">
                    <div class="text">Register Form</div>
                    <form @submit.prevent="handleRegister(data)">
                        <div class="field">
                            <span class="fas fa-user"></span>
                            <input v-model="data.email" type="text" placeholder="input your email">
                        </div>
                        <div class="field">
                            <span class="fas fa-lock"></span>
                            <input v-model="data.password" type="password" placeholder="input your password">
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
    </section>
    <!-- register section ends -->
</template>