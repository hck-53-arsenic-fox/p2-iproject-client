<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    name: 'RegisterView',
    data() {
        return {
            dataRegister: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['handleRegister']),
        register(dataRegister) {
            this.handleRegister(dataRegister)
            this.dataRegister = {
                username: '',
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
        <div class="col" style="margin-left: 50px;margin-right: 50px;margin-top: 100px">
            <h1>Sign Up</h1>
            <form @submit.prevent="register(dataRegister)">
                <div class="mb-3">
                    <label for="exampleInputUsername1" class="form-label">Username</label>
                    <input type="text" v-model="dataRegister.username" class="form-control" id="exampleInputUsername1"
                        aria-describedby="usernameHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail2" class="form-label">Email address</label>
                    <input type="email" v-model="dataRegister.email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Password</label>
                    <input type="password" v-model="dataRegister.password" class="form-control" id="exampleInputPassword2">
                </div>
                <center>
                    <div style="margin-bottom: 20px;">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                    <p>Or Sign In With</p>
                </center>
                <RouterLink to="/login" style="text-decoration:none">
                    <div id="accountHelp3" class="form-text">Already have an account?</div>
                </RouterLink>
            </form>
        </div>
    </div>
</template>