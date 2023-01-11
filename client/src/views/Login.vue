<script>
export default {
  name: "Login",
};
</script>

<template>
  <!--Login-->
  <div class="container text-center">
    <img src="../image/logo.png" alt="" />
  </div>
  <div class="container-fluid d-flex w-75">
    <div id="login" class="container text-center w-50">
      <h2>LOGIN</h2>
      <form id="login-form">
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="login-email"
            placeholder="Enter email here"
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="login-password"
            placeholder="Enter password here"
            autocomplete="off"
          />
        </div>
        <div>
          <button class="btn btn-outline-primary" type="submit">Login</button>
        </div>
        <p class="text-center mt-3 mb-0">
          Don't have an account?
          <a href="" class="fw-bold">Register here!</a>
        </p>
      </form>
    </div>
  </div>
  <!--End-Login-->
</template>
