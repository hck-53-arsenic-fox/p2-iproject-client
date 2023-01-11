<script>
export default {
  name: "Register",
};
</script>

<template>
  <!--Register-->
  <div class="container text-center">
    <img src="../image/logo.png" alt="" />
  </div>
  <div class="container-fluid d-flex w-75">
    <div id="register" class="container text-center w-50">
      <h2>REGISTER</h2>
      <form id="register-form">
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Enter email here"
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Enter password here"
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <button class="btn btn-outline-primary" type="submit">
            Register
          </button>
        </div>
        <p class="text-center mt-3 mb-0">
          Back to
          <a href="" class="fw-bold">Login</a>
        </p>
      </form>
    </div>
  </div>
  <!--End-Register-->
</template>
