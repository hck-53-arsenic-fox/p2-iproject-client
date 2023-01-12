<script>
    export default{
        name: 'Navbar'
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <a @click.prevent="$router.push('/')" class="navbar-brand" href="#"><img src="../assets/logo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a @click.prevent="$router.push('/')" class="nav-link active" aria-current="page" href="#">Now Playing</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="$router.push('/theater')" class="nav-link" href="#">Theaters</a>
        </li>
        <li class="nav-item">
          <a @click.prevent="$router.push('/commingsoon')" class="nav-link" href="#">Up Coming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Playing in - Jakarta</a>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a @click.prevent="$router.push('/login')" class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a  @click.prevent="$router.push('/register')" class="nav-link" href="#">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>