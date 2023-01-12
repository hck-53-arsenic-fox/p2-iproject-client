<script></script>

<template>
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
        <h1 style="border-bottom: solid 2px black; width: 400px">
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
            <button
              class="btn btn-outline-secondary"
              @click.prevent="this.$router.push('/room')"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-5 mt-5 container" style="max-width: 1000px; padding: 0">
      <div class="row g-0">
        <div class="col-md-4 mt-5">
          <div class="card-body mt-3">
            <h5 class="card-title" style="border-bottom: solid 1px black; width: 150px">Our Location</h5>
            <p class="card-text mt-4">Map, Parking + Transportation</p>
            <p class="card-text">Email : BlackDoorz@mail.com</p>
            <p class="card-text">Phone : +62 21 3111 1234</p>
          </div>
        </div>
        <div class="col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9407322516167!2d110.36029411392403!3d-7.796100079538128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5993032c838b%3A0xf690bedfda29d738!2sBLACKDOOR%20Lounge%20%26%20KTV!5e0!3m2!1sid!2sid!4v1673469848325!5m2!1sid!2sid"
            width="666"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
