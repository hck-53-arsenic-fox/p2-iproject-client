<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="name"
          placeholder="e.g. John Doe"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          placeholder="e.g. foo@bar.com"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          placeholder="e.g. Abc123@#"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="row"><span class="text-center">or</span></div>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  form {
    width: 50%;
    margin: auto;
  }
}
@media (min-width: 992px) {
  form {
    width: 25%;
    margin: auto;
  }
}
</style>
