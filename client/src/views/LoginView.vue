<script>
</script>

<template>
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
</template>

<style>
#pageContent {
    background : url('https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/08/21/0318/CKPGH-P0036-Swimming-Pool.jpg/CKPGH-P0036-Swimming-Pool.16x9.jpg?imwidth=1280') no-repeat;
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
