<script>

export default {
    name: 'Navbar'
}

</script>



<template>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><img
        id="NEKO-logo"
        src="../assets/neko.svg"
        alt="NEKO Logo"
        draggable="false"
        height="40"
    />Neko Store</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <a class="nav-link mx-2" href="#!"><i class="fas fa-plus-circle pe-2"></i>Wishlist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#!"><i class="fas fa-bell pe-2"></i>Cart</a>
        </li>
        <li class="nav-item ms-3">
          <a class="btn btn-black btn-rounded" href="#!">Sign in</a>
        </li>
        <li class="nav-item ms-3">
          <a class="btn btn-black btn-rounded" href="#!">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Navbar -->

</template>