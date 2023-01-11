<script>
export default {
  name: "Home",
};
</script>

<template>
  <!--Carousel Section-->
  <center>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-mdb-ride="carousel"
      style="width: 75%; margin-top: 20px; margin-bottom: 20px;"
    >
      <div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="d-block w-100 rounded-5"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="d-block w-100 rounded-5"
              alt="Camera"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="d-block w-100 rounded-5"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </center>
  <!--End-Carousel-Section-->

  <!--List-->
  <div class="container w-50">
    <div class="d-flex" style="margin-bottom: 10px">
      <img
        class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
        src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
        width="250"
        alt=""
      />
      <h4 style="margin-left: 30px">Berita</h4>
    </div>
    <div class="d-flex" style="margin-bottom: 10px">
      <img
        class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
        src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
        width="250"
        alt=""
      />
      <h4 style="margin-left: 30px">Berita</h4>
    </div>
    <div class="d-flex" style="margin-bottom: 10px">
      <img
        class="bg-image hover-overlay ripple shadow-2-strong rounded-5"
        src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
        width="250"
        alt=""
      />
      <h4 style="margin-left: 30px">Berita</h4>
    </div>
  </div>
</template>
