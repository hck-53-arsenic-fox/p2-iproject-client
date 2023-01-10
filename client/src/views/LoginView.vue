<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'LoginView',
    data() {
        return {
            dataLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['handleLogin']),
        login(dataLogin) {
            this.handleLogin(dataLogin)
            this.dataLogin = {
                email: '',
                password: ''
            }
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col">
            <img src="http://cdn.shopify.com/s/files/1/0035/4274/5152/collections/UFC-Store-2-PLP-Cat-Gloves-4_1024x.jpg?v=1633634405"
                style="width: 750px;height: 738px;object-fit: cover;">
        </div>
        <div class="col" style="margin-left: 50px;margin-right: 50px;margin-top: 150px">
            <h1>Sign In</h1>
            <p>Welcome Back!</p>
            <form @submit.prevent="login(dataLogin)">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" v-model="dataLogin.email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" v-model="dataLogin.password" class="form-control" id="exampleInputPassword1">
                </div>
                <center>
                    <div style="margin-bottom: 20px;">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                    <p>Or Sign In With</p>
                </center>
                <RouterLink to="/register" style="text-decoration:none">
                    <div id="accountHelp" class="form-text">Don't have an account?</div>
                </RouterLink>
                <RouterLink to="/" style="text-decoration:none">
                    <div id="accountHelp2" class="form-text">Back to Home</div>
                </RouterLink>
            </form>
        </div>
    </div>
</template>