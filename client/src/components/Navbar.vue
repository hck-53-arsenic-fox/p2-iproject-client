<script>
</script>

<template>
      <div>
    <nav
      class="navbar navbar-expand-lg fixed-top border-bottom border-dark"
      style="height: 60px; background-color: black"
    >
      <div class="container">
        <a
          @click.prevent="clearParams"
          class="navbar-brand"
          style="font-weight: 600; color: white"
          href="#!"
          >BlackDoorz</a
        >
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item nav-button" v-if="isLogin">
              <RouterLink
                to="/"
                class="nav-link"
                style="font-weight: bold; color: white"
                href="#!"
                >Our Menu</RouterLink
              >
            </li>
            <li class="nav-item nav-button" v-if="isLogin">
              <RouterLink
                to="/favorite"
                class="nav-link"
                style="font-weight: bold; color: white"
                href="#!"
                >Favorite</RouterLink
              >
            </li>
            <li class="nav-item nav-button" v-if="!isLogin">
              <RouterLink
                to="/login"
                class="nav-link"
                style="font-weight: bold; color: white"
                href="#!"
                >Sign In</RouterLink
              >
            </li>
            <li class="nav-item nav-button" v-if="!isLogin">
              <RouterLink
                to="/register"
                class="nav-link"
                style="font-weight: bold; color: white"
                href="#!"
                >Sign Up</RouterLink
              >
            </li>
            <li class="nav-item nav-button" v-if="isLogin">
              <RouterLink
                to=""
                class="nav-link"
                style="font-weight: bold; color: white"
                href="#!"
                @click.prevent="handleLogOut"
                >Log-Out</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>