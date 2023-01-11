<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Mousewheel, Pagination, EffectFade],
    };
  },
};
</script>

<style>
  .swiper {
  width: 100vw;
  height: 100vh;
  }

  .swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-wrapper{
    transition-duration: 1000ms !important;
}

.swiper-slide img {
  display: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
    <swiper
      :direction="'vertical'"
      :effect="'fade'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper bg-black"
    >
      <swiper-slide>
        <!-- <img src="../assets/13.webp" alt=""> -->
        <div class="h-screen brightness-90 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1360,h_1015/f_webp,q_auto/v1658839694/the-last-man-1-1.jpg?_i=AA');">
            <p class="text-white text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Monday, January 9, 2023</p>
            <h1 class="text-7xl font-sans uppercase text-white font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">Mauro C. Martinez</h1>
            <p class="text-white font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">The Last Man</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen brightness-90 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" data-aos1="zoom-out" data-aos1-duration="2000" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1360,h_907/f_webp,q_auto/v1657971626/eah-008-1-1-1_11550e8285_11550e700d.jpg?_i=AA')">
            <p class="text-white text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Tuesday, December 12, 2023</p>
            <h1 class="text-7xl font-sans uppercase text-white font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">ETERNALISING ART HISTORY : FROM DA VINCI TO MODIGLIANI</h1>
            <!-- <p class="text-white font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">Normal Life</p> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen text-[#fdde05] brightness-75 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" data-aos1="zoom-out" data-aos1-duration="2000" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1360,h_907/f_webp,q_auto/v1658839637/heesookim-4-1-.jpg?_i=AA')">
            <p class="text-black text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Tuesday, July 18, 2023</p>
            <h1 class="text-white text-7xl font-sans uppercase font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">Heesoo Kim</h1>
            <p class="text-black font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">Normal Life</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen brightness-90 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" data-aos1="zoom-out" data-aos1-duration="2000" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1360,h_708/f_webp,q_auto/v1658839721/emc_uta_billboard2-1.jpg?_i=AA')">
            <p class="text-white text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Sunday, April 23, 2023</p>
            <h1 class="text-7xl font-sans uppercase text-white font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">ENRIQUE MARTINEZ CELAYA</h1>
            <p class="text-white font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">The Rose Garden at UTA Artist Space</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen brightness-90 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" data-aos1="zoom-out" data-aos1-duration="2000" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1360,h_1015/f_webp,q_auto/v1658839678/header-3.jpg?_i=AA')">
            <p class="text-white text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Thursday, March 23, 2023</p>
            <h1 class="text-7xl font-sans uppercase text-white font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">NICOLAS HOLIBER</h1>
            <p class="text-white font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">Shape-Shifter</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen brightness-90 relative w-full px-24 bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4 -z-10" data-aos1="zoom-out" data-aos1-duration="2000" style="background-image: url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1960,h_1474/f_webp,q_auto/v1669390262/STEPHEN-WONG-INSTALLS-095-Edit.jpg?_i=AA')">
            <p class="text-white text-xs mb-4 border-b border-b-white/25 pb-6" data-aos1="fade-down" data-aos1-duration="2000">Monday, January 9, 2023</p>
            <h1 class="text-7xl font-sans uppercase text-white font-bold tracking-wider" data-aos1="zoom-in" data-aos1-duration="2000">STEPHEN WONG</h1>
            <p class="text-white font-semibold text-2xl tracking-wide" data-aos1="fade-up" data-aos1-duration="2000">Dream Travel</p>
        </div>
      </swiper-slide>
    </swiper>
</template>


<!-- <div class="h-screen w-full px-24 bg-[url('https://res.cloudinary.com/unit-london/image/upload/c_scale,w_1960,h_1431/f_webp,q_auto/v1671095303/Trust-1.jpg?_i=AA')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center gap-y-4" data-aos="zoom-out" data-aos-duration="2000"> -->
        