<script>
export default{
    props: ['item']
}
</script>

<template>
  <div class="col mb-4">
    <div class="card h-100">
      <img :src="item.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>
      </div>
      <div class="card-footer">
        <p class="card-text">Out Of Stock</p>
      </div>
    </div>
  </div>
</template>