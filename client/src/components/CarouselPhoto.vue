<script>
    export default {
        name: 'CarouselPhoto',
        props: ['item']
    }
</script>


<template>
    <!-- Single item -->
    <div class="carousel-item active">
      <img :src="item.url" class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
</template>