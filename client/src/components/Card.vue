<script>
    export default{
        name: "CardHome", 
        props: ['item'], 
    }
</script>

<template>
    <div  v-if="$route.name === 'home'" class="col-lg-3 col-6">
        <div @click.prevent="$router.push(`movie/${item.id}`)" class="card mt-3">
          <img :src="item.imageUrl" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="button">
              <a href="#" class="btn btn-outline-secondary">2D</a>
              <a href="#" class="ms-2 btn btn-outline-secondary">D17+</a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="$route.name === 'commingsoon'" class="col-lg-3 col-6">
        <div @click.prevent="$router.push(`movie/${item.id}`)" class="card mt-3">
          <img :src="item.image" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h2 class="card-title">{{ item.title }}</h2>
            <h5 class="card-title">{{ item.releaseState }}</h5>
            <div class="button">
              <a href="#" class="btn btn-outline-secondary">2D</a>
              <a href="#" class="ms-2 btn btn-outline-secondary">D17+</a>
            </div>
          </div>
        </div>
      </div>
</template>