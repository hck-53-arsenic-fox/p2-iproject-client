<script>
export default {};
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="fontstyle">My Order Story</h1>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <table class="table table-secondary table-hover overflow-auto">
      <thead>
        <tr>
          <th class="col">#</th>
          <th scope="col">Order ID Number</th>
          <th scope="col">Brand</th>
          <th scope="col">Service Name</th>
          <th scope="col">Order Date</th>
          <th scope="col">Estimated Complete Date</th>
          <th scope="col">Order status</th>
          <th scope="col">Order Complete Date</th>
          <th scope="col">Order Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>81728376</td>
          <td>Nike</td>
          <td>Premium Cleaning</td>
          <td>now</td>
          <td>tomorrow</td>
          <td>on process</td>
          <td>next week</td>
          <td><button class="btn btn-outline-secondary btn-block btn-sm col-10 border border-secondary text-dark">Check Detail</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
