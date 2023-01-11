<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="https://mdbgo.com/">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="16"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px"
        />
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">Politics</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Business</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Technology</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Sports</a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-primary me-3">Upgrade</button>
          <a
            class="btn btn-success px-3 me-3"
            href="https://google.com/mdbootstrap/mdb-ui-kit"
            role="button"
            ><i class="fab fa-google"></i
          ></a>
          <button type="button" class="btn btn-primary me-3">Login</button>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>
