<script>
import { RouterView } from "vue-router";
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

  <!-- HOME PAGE -->
  <section>
    <div
      style="
        background-image: url('https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/02/27/1255/Park-Hyatt-Jakarta-P001-Location.jpg/Park-Hyatt-Jakarta-P001-Location.16x9.jpg?imwidth=1280');
        min-height: 100vh;
      "
    >
      <div
        class="d-flex justify-content-center align-items-center flex-column"
        style="padding-top: 200px"
      >
        <div
          style="
            background-color: rgba(0, 0, 0, 0.5);
            width: 450px;
            padding: 30px;
            color: antiquewhite;
          "
        >
          <center>
            <h4>WELCOME TO</h4>
            <h1>BlackDoorz</h1>
            <h2>JAKARTA</h2>
          </center>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5 flex-column">
      <center>
        <h3 style="border-bottom: solid 1px black; max-width: 800px">
          Modern Luxury Hotel located in the heart of Jakarta
        </h3>
        <p class="mt-5" style="width: 650px">
          BlackDoorz Jakarta features 220 rooms as well as luxury hotel dining
          and entertainment options. Our hotel will be a haven for intimate and
          stylish events including weddings, corporate functions, and social
          gatherings.
        </p>
      </center>
    </div>
    <div class="d-flex justify-content-center mt-5 flex-column">
      <center>
        <h1 class="" style="border-bottom: solid 2px black; width: 400px">
          Rooms & Suites
        </h1>
      </center>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide vh-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner mt-2" style="height: 580px">
          <div class="carousel-item active">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P014-Park-Suite-Deluxe-Living-Room.jpg/Park-Hyatt-Jakarta-P014-Park-Suite-Deluxe-Living-Room.16x9.jpg?imwidth=1920"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/11/0151/CGKPH-P0021-Park-Suite-Deluxe-Bedroom.jpg/CGKPH-P0021-Park-Suite-Deluxe-Bedroom.16x9.jpg?imwidth=1280"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/12/18/2300/CGKPH-P0062-Park-Suite-Living-Room.jpg/CGKPH-P0062-Park-Suite-Living-Room.16x9.jpg?imwidth=1280"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="card mb-5 mt-5 container" style="max-width: 1000px; padding: 0">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-6 mt-5">
          <div class="card-body">
            <h5 class="card-title">The Epitome Of Luxury</h5>
            <p class="card-text">
              Experience the finest in luxury hotel stays at Black Doorz
              Jakarta, with 220 oversized rooms, including 36 suites within our
              property.
            </p>
            <button class="btn btn-outline-secondary">View More</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGIN PAGE -->
  <div id="pageContent">
  <div class="d-flex align-items-center h-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5 mt-5 col-md-6 col-sm-8 col-xs-12 ms-auto">
          <div class="bg-white rounded shadow-lg">
            <h1 class="text-center h5 pt-5 pb-3"><strong>LOGIN</strong></h1>
            <form class="py-2">
              <div class="position-relative maxWidth320 px-2">
                <div class="inlineLogo"><i class="text-accent fas fa-at"></i></div>
                <input type="email" placeholder="Email ID" class="border-0  w-100" />
              </div>
              <div class="position-relative maxWidth320 px-2 d-flex align-items-end justify-content-between">
                <div>
                  <div class="inlineLogo"><i class="text-accent fas fa-key"></i></div>
                  <input type="password" placeholder="Password" class="border-0  w-100" />
                </div>
                <div>
                  <button class="btn text-accent">Forgot?</button>
                </div>
              </div>
              <div id="submitBtn" class="text-center">
                <button class="btn w-50 btn-lg shadow-sm rounded-pill">Login</button>
              </div>
            </form>
            <div class="text-center pb-4">
              Don't have an account? <a href="#">Signup</a>
            </div>
          </div>
          <div class="p-2 mx-2 rounded-bottom shadow bg-accent border-bottom border-dark"></div>
          <div class="p-1 mx-3 rounded-bottom shadow bg-accent"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- REGISTER PAGE -->
 <div id="pageContent-Register">
  <div class="d-flex align-items-center h-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5 mt-5 col-md-6 col-sm-8 col-xs-12 ms-auto">
          <div class="bg-white rounded shadow-lg">
            <h1 class="text-center h5 pt-5 pb-3"><strong>REGISTER</strong></h1>
            <form class="py-2">
              <div class="position-relative maxWidth320 px-2">
                <div class="inlineLogo"><i class="text-accent fas fa-at"></i></div>
                <input type="email" placeholder="Email ID" class="border-0  w-100" />
              </div>
              <div class="position-relative maxWidth320 px-2 d-flex align-items-end justify-content-between">
                <div>
                  <div class="inlineLogo"><i class="text-accent fas fa-key"></i></div>
                  <input type="password" placeholder="Password" class="border-0  w-100" />
                </div>
              </div>
              <div id="submitBtn" class="text-center">
                <button class="btn w-50 btn-lg shadow-sm rounded-pill">Register</button>
              </div>
            </form>
            <div class="text-center pb-4">
              Have an account? <a href="#">Login</a>
            </div>
          </div>
          <div class="p-2 mx-2 rounded-bottom shadow bg-accent border-bottom border-dark"></div>
          <div class="p-1 mx-3 rounded-bottom shadow bg-accent"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ROOM PAGE -->
<div class="container mb-5 mt-5" >
      <div class="d-flex justify-content-between gap-5">
        <div class="mt-4" style="width:1000px">
            <h3 class="title">Rooms & Suites</h3>
            <p class="text">
              Experience the finest in luxury hotel stays at Park Hyatt Jakarta, with 220 oversized rooms, including 36 suites within our smoke free property. Sophisticated, spacious and contemporary guest rooms, designed with Indonesian touches and materials, all with uninterrupted views of Jakarta starting from the 25th floor. Unwind in the deep-soaking marble bath, with custom Le Labo® products, or enjoy the large, flat-screen TVs and integrated media hub. Upgrade your stay with one of our elegant suites, many featuring additional spaces such as dining and sitting areas.
            </p>
        </div>
        <div class="">
          <img
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280"
            class="img-fluid rounded"
            alt="..."
            width="1000"
          />
        </div>
      </div>
    </div>

<!-- CARD ROOM -->
    <div class="container row row-cols-2 row-cols-md-2 g-4" style="margin-left:5%;">
  <div class="col">
    <div class="card mb-5" style="max-width: 500px;">
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Deluxe Room</h5>
        <p class="card-text">Unwind in a room that offers 127 square meter, with luxurious features including a rain shower, deep soaking marble bath and floor-to-ceiling windows.</p>
        <button class="btn btn-warning">Detail Room</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-5" style="max-width: 500px;">
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Deluxe Room</h5>
        <p class="card-text">Unwind in a room that offers 127 square meter, with luxurious features including a rain shower, deep soaking marble bath and floor-to-ceiling windows.</p>
        <button class="btn btn-warning">Detail Room</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-5" style="max-width: 500px;">
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Deluxe Room</h5>
        <p class="card-text">Unwind in a room that offers 127 square meter, with luxurious features including a rain shower, deep soaking marble bath and floor-to-ceiling windows.</p>
        <button class="btn btn-warning">Detail Room</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-5" style="max-width: 500px;">
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Deluxe Room</h5>
        <p class="card-text">Unwind in a room that offers 127 square meter, with luxurious features including a rain shower, deep soaking marble bath and floor-to-ceiling windows.</p>
        <button class="btn btn-warning">Detail Room</button>
      </div>
    </div>
  </div>
</div>

<!-- DETAIL CARD -->
<div class="container mb-5 mt-5">
      <div class="d-flex justify-content-between gap-5">
        <div class="mt-4" style="width:1000px">
            <h2 class="title">Park Suite King</h2>
            <p class="text mt-3">
              Pamper yourself in this spacious 87 square meter luxurious suite. The suite includes one king bed, separate bedroom, living room and dining room areas
            </p>
            <h5 class="mt-3">
              Rp. 6999000/Night
            </h5>
        <button class="btn btn-warning mt-3">Booking Now</button>

        </div>
        <div class="">
          <img
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/04/1041/Park-Hyatt-Jakarta-P008-Park-Room-Bed.jpg/Park-Hyatt-Jakarta-P008-Park-Room-Bed.16x9.jpg?imwidth=1280"
            class="img-fluid rounded"
            alt="..."
            width="1000"
          />
        </div>
      </div>
    </div>


<!-- DETAIL FOOD -->
<h2 class="d-flex justify-content-center mb-5" ><span style="border-bottom: solid 1px black;">OUR MENU</span></h2>
<div class="container row row-cols-2 row-cols-md-3 g-4" style="margin-left:5%;">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

</template>

<style>
/* LOGIN STYLE */
#pageContent {
    background : url('https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/08/21/0318/CKPGH-P0036-Swimming-Pool.jpg/CKPGH-P0036-Swimming-Pool.16x9.jpg?imwidth=1280') no-repeat;
    background-size : cover;
    background-position: center;
    height:100vh;
    width:100%;
  }
#pageContent-Register {
    background : url('https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/08/21/0036/CGKPH-P0043-The-Spa-Couple-Treatment-Room.jpg/CGKPH-P0043-The-Spa-Couple-Treatment-Room.16x9.jpg?imwidth=1280') no-repeat;
    background-size : cover;
    background-position: center;
    height:100vh;
    width:100%;
  }
  input {
    height:64px;
    outline : none;
    padding-left:32px;
  }
  .inlineLogo {
    position : absolute;
    line-height:64px;
  }
  .text-accent {
    color:black
  }
  .bg-accent {
    background-color:black
  }
  #submitBtn {
    margin-top:64px;
    margin-bottom: 32px;
    border-top : 1px dashed #eaeaea;
  }
#submitBtn button {
    margin-top:-28px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f7644a+0,e73827+100 */
    background: rgb(3, 3, 3); /* Old browsers */
    background: -moz-linear-gradient(-45deg,  rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg,  rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg,  rgb(0, 0, 0) 0%,rgb(0, 0, 0)0%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7644a', endColorstr='#e73827',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    color:#fff;
  }
  .maxWidth320 {
    max-width:320px;
    margin: 0 auto;
  }
</style>
