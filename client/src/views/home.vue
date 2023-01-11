<script>

</script>

<template>
    <section id="side-section">
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-grey">
        <div style="background-color: black; width: 50;height: 50;color: red;"> <img
            src="../assets/images/Netflix-iphone-8.jpg" alt="" width="50" height="50"> RAYFLIX STREAM</div>
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <form>
              <div class="form-outline mb-4">
                <label class="form-label label danger" for="formTrailerUrl" style="color: whitesmoke;">Movie Name</label>
                <input type="text" id="formTrailerUrl" class="form-control" />
              </div>
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Search</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </section>
    <div class="container mx-auto mt-4">
      <div class="row ">
        <div class="col-md-4 " >
          <div class="card " style="width: 18rem;" >
            <img src="movie.imgUrl" class="card-img-top box"
              alt="...">
            <div class="card-body">
              <p class="card-text">movie.title</p>
              <p class="card-text">movie.synopsis</p>
              <a href="#"  class="btns mr-2"><i class="fas fa-link"></i> See Detail</a>     <span  style="font-size: small;">Watch? Scan Barcode</span><span  style="font-size: small;">LOGIN for watch</span>
              <br><br>
              <div>
              <button type="button" class="btn btn-warning">
                <i class="fa-solid fa-heart" style="font-size: x-small;"> Favorite</i>
              </button> <i style="font-size: x-small;"> Add This Movie to Your Favorite </i>
            </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div style="margin-left: 50%;">
        <nav aria-label="...">
          <ul class="pagination">
            <!-- <li class="page-item disabled">
              <span class="page-link">Previous</span>
            </li> -->
            <li  class="page-item active"><a class="page-link" >value</a></li>
            <!-- <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </template>