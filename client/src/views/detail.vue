<script>
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';
import axios from 'axios';

export default{
  data(){
    return{
      qrImage:''
    }
  },
  computed:{
    ...mapState(useMovieStore,['movieDetail','qr','qrtype'])
  },
  methods:{
    ...mapActions(useMovieStore,['fetchMovieDetail','qrCode']),
    async getqr(id){
      const res = await axios({
        method: 'POST',
        url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e173ccc7aamsh29b811e1385cc26p1e6735jsn16089c753a58',
          'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
        },
        responseType: 'arraybuffer',
        data: `{"data":"http://localhost:5173/detail/${id}","image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}`
      })
      console.log(res.data)
      let blob = new Blob(
          [res.data],
          {type: res.headers['content-type']}
      );

      let imgUrl = URL.createObjectURL(blob);
      this.qrImage = imgUrl;
    }
  },
  created(){
    this.fetchMovieDetail(this.$route.params.id)
    this.getqr(this.$route.params.id)
  }
}
</script>

<template>
       <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3" id="dashboard-section" >
      <div class="card w-75" >
        <div class="text-center">
    <iframe width="910" height="380" poster:="" :src="movieDetail.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
    <div class="card-body">
      <h5 class="card-title">Title: {{movieDetail.title}}</h5>
      <p class="card-text">Synopsis: {{movieDetail.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="background-color: grey;"> Genre:<span v-for="gen in movieDetail.genre"> {{ `${gen} ` }} </span></li>
      <li class="list-group-item" style="background-color: grey;">Rating: {{movieDetail.rating}}/10</li>
      <li class="list-group-item" style="background-color: grey;">Year: {{movieDetail.year}}</li>
      <li class="list-group-item" style="background-color: grey;">Writer: <span v-for="wrt in movieDetail.writers"> {{ `${wrt}   ` }} </span></li>
      <li class="list-group-item" style="background-color: grey;">director:<span v-for="dire in movieDetail.director"> {{ `${dire} ` }} </span></li>

      <li class="list-group-item text-center" style="background-color: grey;"><img :src="qrImage" alt="" width="100"></li>
      <li class="list-group-item text-center" style="background-color: grey;">
        <button @click="$router.push('/')" type="button" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;">Back</button></li>
    </ul>
  </div>
  </section>
  
  </template>