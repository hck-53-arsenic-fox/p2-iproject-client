<script>
import { mapActions , mapState } from 'pinia';
import { useMovieStore } from '../stores/movie';
    export default{
        name: 'LayoutRoom', 
        data(){
            return {
                id: this.$route.params.id, 
                seatNumber: ''
            }
        },
        methods: {
            ...mapActions(useMovieStore , ['createTicket' , 'tokenMidTrans'])
        }
    }
</script>

<template>
  <div class="container p-3 bg-light mb-3 content">
<section id="kursi">
  <div class="atas">
    <p><img src="../assets/seat_free.png"> Available <img src="../assets/seat_own_booking.png"> Your Seats <img src="../assets/seat_other_book.png"> On Booking <img src="../assets/seat_booked.png"> Sold</p>
  </div>
  <hr>
  <div class="desc">
    <h5>M3GAN</h5>
    <p>Seats -</p>
    <p>Tickets 0/1</p>
    <p>Cinema AEON MALL TANJUNG BARAT XXI</p>
    <P>Studio 2</P>
    <p>Date 11-01-2023 Time 16:55</p>
    <p>Total Payment Rp.0</p>
  </div>
  <hr>
  <div class="bawah d-flex justify-content-center">
    <div>
    <div class="baris" v-for="baris in 4">
      <img v-for="(col , index) in 4"  src="../assets/seat_free.png"> 
      <img src="../assets/seat_free.png">
    </div>
    <div class="layar text-center p-2">
      <h4>SCREEN</h4>
    </div>
      <button @click.prevent="tokenMidTrans">Pembayaran</button>
    </div>
  </div>
</section>
</div>
</template>