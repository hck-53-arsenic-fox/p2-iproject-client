<script>

</script>

<template>
    <form @submit.prevent="handleLogin" id="loginForm-user" style="background-color: white;">
        <h2>Log In</h2>
        Email:<br>
        <input type="text" v-model="email" id="email"><br>
        Password:<br>
        <input type="password" v-model="password" id="password"><br><br><br />
        <button class="btn btn-success" type="submit">Log in</button><br><br>
        <!-- <button type="submit">Log In</button><br/><br> -->
        Don't have an Account? <br />
        <router-link to="register">Click here to Register</router-link>
        <br><br />
    </form>
</template>