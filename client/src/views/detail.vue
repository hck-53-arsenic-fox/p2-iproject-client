<script>
import { RouterLink, RouterView } from 'vue-router'
import { useResortStore } from '../stores/resort'
import { mapState, mapActions } from 'pinia'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"



export default {
  name: 'detail',
  data() {
    return {
      money: '',
      commenter: ''
    }
  },
  components: {

  },
  computed: {
    ...mapState(useResortStore, ['resort', 'mapToken', 'isLogin']),

  },
  methods: {
    ...mapActions(useResortStore, ['fetchOneResort', 'addReview']),
    onClickReview() {
      this.addReview(this.$route.params.id, this.review, this.rating)
      // console.log(this.$route.params.id, this.review, this.rating)
    }
  },
  created() {
    this.fetchOneResort(this.$route.params.id)


  },
  mounted() {
    this.commenter = this.resort.User.username
    mapboxgl.accessToken = this.mapToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.resort.geometry.coordinates,
      zoom: 15
    })
    new mapboxgl.Marker()
      .setLngLat(this.resort.geometry.coordinates)
      .addTo(map);

    this.money = this.resort.price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    })
  }
}

</script>

<template>
  <section class="flex items-center justify-center h-full bg-[#EBF1FF] bg-cover">

    <!-- card container -->
    <div
      class="relative flex flex-col m-6 space-y-10 bg-white shadow-xl md:flex-row md:space-y-0 md:m-0 w-auto divide-x-2">

      <!-- left side -->
      <div class="flex basis-1/3 p-4 md:p-5 bg-white w-full h-screen flex-col justify-center">

        <!-- Top -->
        <div class="p-2 m-2 rounded-xl justify-center self-center items-center">
          <p class="my-3 self-center items-center text-center">
            Location
          </p>
          <div id='map' style="width: 350px; height: 350px;" class="rounded-2xl"></div>

        </div>

        <!-- bottom -->
        <div class="w-full rounded-xl p-2 justify-center items-center self-center">

          <form class="w-full h-full" v-if="isLogin === true">
            <div class="p-5 w-full items-center self-center">
              <fieldset class="starability-slot" style="margin-auto">
                <legend class="text-center">Rating</legend>
                <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked
                  aria-label="No rating." />
                <input type="radio" id="first-rate1" name="rating" value="1" v-model="rating" />
                <label for="first-rate1" title="Terrible">1 star</label>
                <input type="radio" id="first-rate2" name="rating" value="2" v-model="rating" />
                <label for="first-rate2" title="Not good">2 stars</label>
                <input type="radio" id="first-rate3" name="rating" value="3" v-model="rating" />
                <label for="first-rate3" title="Average">3 stars</label>
                <input type="radio" id="first-rate4" name="rating" value="4" v-model="rating" />
                <label for="first-rate4" title="Very good">4 stars</label>
                <input type="radio" id="first-rate5" name="rating" value="5" v-model="rating" />
                <label for="first-rate5" title="Amazing">5 stars</label>
              </fieldset>
            </div>




            <textarea v-model="review" id="message" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."></textarea>

            <div class="flex items-center justify-center mt-2">
              <button type="button" @click="onClickReview"
                class="bg-[#05B384] hover:bg-[#06D6A0] py-2 px-5 text-white rounded-xl mt-2">
                Add Review
              </button>
            </div>
          </form>
        </div>



      </div>

      <!-- right side -->
      <div class="flex flex-col basis-2/3 p-4 md:p-5 bg-white w-full h-full">

        <!-- top -->
        <div class="flex flex-col justify-center items-center py-4">
          <h2 class="mb-3 text-2xl text-bold p-3">{{ resort.title }}</h2>
          <img :src="resort.imageUrl" alt="" class="rounded object-cover duration-200 w-80 hover:scale-105">
        </div>



        <!-- bottom -->
        <div class="flex flex-col justify-start items-start p-4 w-full">
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            Description: {{ resort.description }}
          </p>
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            Price per Night: {{ money }}
          </p>
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            Location:📍 {{ resort.location }}
          </p>
          <p class="max-w-sm mb-3 font-light text-grey-600 text-left p-2">
            Posted by: {{ resort.User.username }}
          </p>

          <div v-for="rev in resort.Reviews">


            <div class="px-5 mt-2">
              <div class="bg-white rounded-md p-4 space-y-4 shadow-lg w-96">
                <h3 class="border-b mb-2 pt-3 font-semibold">Name: <span class="font-thin">{{ commenter }}</span></h3>

                <div class="">
                  <h3 class="font-semibold">Review:</h3>
                  <p class="font-thin mt-2">{{ rev.review }}</p>
                </div>
                <h3 class="border-t mb-2 pt-3 font-semibold">Stars:
                  <span class="font-thin">
                    <p class="starability-result" :data-rating="rev.rating"> </p>


                  </span>
                </h3>

              </div>
            </div>

          </div>


          <!-- component -->


        </div>




      </div>


    </div>

  </section>

</template>

<style>
.starability-result {
  position: relative;
  width: 150px;
  height: 30px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8CAMAAABGivqtAAAAxlBMVEUAAACZmZn2viTHuJ72viOampqampr1viSampr3vySampqdnZ34wiX1vSSampr1vSOZmZmampr1viT2vSOampr2viT2viSampr2viSampr2vyX4vyWbm5v3vSSdnZ32wSadnZ36wCWcnJyZmZn/wSr/2ySampr2vSP2viSZmZn2vSSZmZn2vST2viSampr2viSbm5ubm5uZmZn1vSSampqbm5v2vSWampqampr3vSf5wiT5vyagoKD/xCmkpKT/yCSZmZn1vSO4V2dEAAAAQHRSTlMA+vsG9fO6uqdgRSIi7+3q39XVqZWVgnJyX09HPDw1NTAwKRkYB+jh3L6+srKijY2Ef2lpYllZUU5CKigWFQ4Oneh1twAAAZlJREFUOMuV0mdzAiEQBmDgWq4YTWIvKRqT2Htv8P//VJCTGfYQZnw/3fJ4tyO76KE0m1b2fZu+U/pu4QGlA7N+Up5PIz9d+cmkbSrSNr9seT3GKeNYIyeO5j16S28exY5suK0U/QKmmeCCX6xs22hJLVkitMImxCvEs8EG3SCRCN/ViFPqnq5epIzZ07QJJvkM9Tkz1xnkmXbfSvR7f4H8AtXBkLGj74mMvjM1+VHZpAZ4LM4K/LBWEI9jwP71v1ZEQ6dyvQMf8A/1pmdZnKce/VH1iIsdte4U8VEtY23xOujxtFpWDgKbfjD2YeEhY0OzfjGeLyO/XfnNpAcmcjDwKOXRfU1IyiTRyEkaiz67pb9oJHJb9vVqKfgjLBPyF5Sq9T0KmSUhQmtiQrJGPHVi0DoSabj31G2gW3buHd0pY85lNdcCk8xlNDPXMuSyNiwl+theIb9C7RLIpKvviYy+M6H8qGwSAp6Is19+GP6KxwnggJ/kq6Jht5rnRQA4z9zyRRaXssvyqp5I6Vutv0vkpJaJtnjpz/8B19ytIayazLoAAAAASUVORK5CYII=");
  font-size: 0.1em;
  color: transparent;
}

.starability-result:after {
  content: " ";
  position: absolute;
  left: 0;
  height: 30px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8CAMAAABGivqtAAAAxlBMVEUAAACZmZn2viTHuJ72viOampqampr1viSampr3vySampqdnZ34wiX1vSSampr1vSOZmZmampr1viT2vSOampr2viT2viSampr2viSampr2vyX4vyWbm5v3vSSdnZ32wSadnZ36wCWcnJyZmZn/wSr/2ySampr2vSP2viSZmZn2vSSZmZn2vST2viSampr2viSbm5ubm5uZmZn1vSSampqbm5v2vSWampqampr3vSf5wiT5vyagoKD/xCmkpKT/yCSZmZn1vSO4V2dEAAAAQHRSTlMA+vsG9fO6uqdgRSIi7+3q39XVqZWVgnJyX09HPDw1NTAwKRkYB+jh3L6+srKijY2Ef2lpYllZUU5CKigWFQ4Oneh1twAAAZlJREFUOMuV0mdzAiEQBmDgWq4YTWIvKRqT2Htv8P//VJCTGfYQZnw/3fJ4tyO76KE0m1b2fZu+U/pu4QGlA7N+Up5PIz9d+cmkbSrSNr9seT3GKeNYIyeO5j16S28exY5suK0U/QKmmeCCX6xs22hJLVkitMImxCvEs8EG3SCRCN/ViFPqnq5epIzZ07QJJvkM9Tkz1xnkmXbfSvR7f4H8AtXBkLGj74mMvjM1+VHZpAZ4LM4K/LBWEI9jwP71v1ZEQ6dyvQMf8A/1pmdZnKce/VH1iIsdte4U8VEtY23xOujxtFpWDgKbfjD2YeEhY0OzfjGeLyO/XfnNpAcmcjDwKOXRfU1IyiTRyEkaiz67pb9oJHJb9vVqKfgjLBPyF5Sq9T0KmSUhQmtiQrJGPHVi0DoSabj31G2gW3buHd0pY85lNdcCk8xlNDPXMuSyNiwl+theIb9C7RLIpKvviYy+M6H8qGwSAp6Is19+GP6KxwnggJ/kq6Jht5rnRQA4z9zyRRaXssvyqp5I6Vutv0vkpJaJtnjpz/8B19ytIayazLoAAAAASUVORK5CYII=");
  background-position: 0 -30px;
}

.starability-result[data-rating="5"]::after {
  width: 150px;
}

.starability-result[data-rating="4"]::after {
  width: 120px;
}

.starability-result[data-rating="3"]::after {
  width: 90px;
}

.starability-result[data-rating="2"]::after {
  width: 60px;
}

.starability-result[data-rating="1"]::after {
  width: 30px;
}

@media screen and (-webkit-min-device-pixel-ratio: 2),
screen and (min-resolution: 192dpi) {
  .starability-result {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAMAAACZ62E6AAABAlBMVEUAAACZmZmampr2vSObm5v/yiufn5+ampr1viP1viSZmZn2viOZmZmampqampr2viSampqampqcnJz5vyScnJz3wSf/wyn/xiujo6Oqqqr/0C/1vSOampr2viP2viOampr2viP2vST2viOampqampqampr1vyP3viSampr2vyT4vyX3viSbm5ubm5v5wCT8xSmgoKCampqampr3vyb2wiWenp72viOampqZmZmampr2viP2viP1viSampqbm5v2vyT3viObm5v4vyadnZ34wSSbm5v2viSZmZn2viP2vST2viP2viT1viOZmZn2viT2viX3viT3vyb2vyOZmZn1vSOZmZlNN+fKAAAAVHRSTlMA9uz4PQwS8O7r5+fTw4yMelw2MB0dFRELBgbS+/Hfu7uxqKWdg4N7ZmZMPi8pKRgPs0w7Nhb14drKw6Gck21tXkNDIyMZ1rDLycTBtaqVknlfV0sGP8ZwAAADW0lEQVRYw9zWvYqDQBSG4TPDoCAqKhYKQgoVLFaIgZCkiCBBUqVazv3fyu4aEXWdM85Uy779A+LP58AfTQgw73AwtxFiZIwbxMbUfuB3H4b49YNfZrbGodoI52+cm9hH9sbZwwAXOFbo2zjDsSzWxnecuuvaM8MpdtbEPs7y9azF5phZWrjERaWOPdpLbB81cICrgv3W4mvMLbU6RmFQeA5u5HhFEEbHLdWLsMxvHJXxW16Goh+ZqPyny1Az5j79SsCJoWHsBNAxQ9sNF26bWFuMC8v1LY+mmeTadjaqtaNnnXoxWBcde1nNWnzdb68xrOqvu22/MTzuPutujpJ122NvluSb8tTWk85CclDZQwLS0oa2TQpEKacsJy0kSJaQOKJxROKKxhWJ7zS+k9ijsUdim8Y2ZWNUFBP4pMKfOv8onX9WrsI5gd3VVLXtatxcuU0znGUHCUAS2DgrS6mT6hTzrXEjfIZj5Dk2xKkihqm4wKlQfQRqalhUP9UHo3FIPAG/Et44JVLsDDf0JHmB3OEByOwZES8hSAsviGjBdh3ylh6plmMnW4IyAUVJWcE/76vTell1EIaiMBwIAcWBA9GC0lIdKFXQQUsHVVCklN7ojf3+z3JOxYqK2TH555+K6CJJQtRbr9XtDmCnjH0AX9Va8J+liIMvDtRsCk2pEs6hKVexR2g7KuDihwt5a9MfprY0fkLXU9ZmFLpoJolN6GXKWWfZx0tHCocwKJSxC22ItYUEjmBUJHFjfYz1xQxlfaLiZsBExq2IPtbkNbLtOwwuGgjTLkH43mYtSzam7+1Bsr3nm5uExBQUozEh9V7N7uvmwZcqdpm0C6vJW63bZEuXtbrV2zpDzhrpYLBWMnY1mjV7JWFtMio7zbWniWFxvHnWm1yGxXmOPXP+L3YV2ysjnNhaZNeMcHPvuL27BMnVMaujljBAYyje4niH4g2ONyh+4PiB4gOODyjWcKxh1gZBNoJjEY4R/BLhF4IDEQ4QPBoEoyxH4+bxrUsHyxwxQlg0WHXqYifVLmo67cKY/UtaXFxBV26TLjuHrkp8BPJTMij1xQejdkgO24nf7dBOCRcbzQuNOR9Qs64GzzrfQa8It2oFAA6Zrga9xEeq1KHmLUHIiCAWInsg1x/MLqkMsItF8QAAAABJRU5ErkJggg==");
    background-size: 30px auto;
  }

  .starability-result:after {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAMAAACZ62E6AAABAlBMVEUAAACZmZmampr2vSObm5v/yiufn5+ampr1viP1viSZmZn2viOZmZmampqampr2viSampqampqcnJz5vyScnJz3wSf/wyn/xiujo6Oqqqr/0C/1vSOampr2viP2viOampr2viP2vST2viOampqampqampr1vyP3viSampr2vyT4vyX3viSbm5ubm5v5wCT8xSmgoKCampqampr3vyb2wiWenp72viOampqZmZmampr2viP2viP1viSampqbm5v2vyT3viObm5v4vyadnZ34wSSbm5v2viSZmZn2viP2vST2viP2viT1viOZmZn2viT2viX3viT3vyb2vyOZmZn1vSOZmZlNN+fKAAAAVHRSTlMA9uz4PQwS8O7r5+fTw4yMelw2MB0dFRELBgbS+/Hfu7uxqKWdg4N7ZmZMPi8pKRgPs0w7Nhb14drKw6Gck21tXkNDIyMZ1rDLycTBtaqVknlfV0sGP8ZwAAADW0lEQVRYw9zWvYqDQBSG4TPDoCAqKhYKQgoVLFaIgZCkiCBBUqVazv3fyu4aEXWdM85Uy779A+LP58AfTQgw73AwtxFiZIwbxMbUfuB3H4b49YNfZrbGodoI52+cm9hH9sbZwwAXOFbo2zjDsSzWxnecuuvaM8MpdtbEPs7y9azF5phZWrjERaWOPdpLbB81cICrgv3W4mvMLbU6RmFQeA5u5HhFEEbHLdWLsMxvHJXxW16Goh+ZqPyny1Az5j79SsCJoWHsBNAxQ9sNF26bWFuMC8v1LY+mmeTadjaqtaNnnXoxWBcde1nNWnzdb68xrOqvu22/MTzuPutujpJ122NvluSb8tTWk85CclDZQwLS0oa2TQpEKacsJy0kSJaQOKJxROKKxhWJ7zS+k9ijsUdim8Y2ZWNUFBP4pMKfOv8onX9WrsI5gd3VVLXtatxcuU0znGUHCUAS2DgrS6mT6hTzrXEjfIZj5Dk2xKkihqm4wKlQfQRqalhUP9UHo3FIPAG/Et44JVLsDDf0JHmB3OEByOwZES8hSAsviGjBdh3ylh6plmMnW4IyAUVJWcE/76vTell1EIaiMBwIAcWBA9GC0lIdKFXQQUsHVVCklN7ojf3+z3JOxYqK2TH555+K6CJJQtRbr9XtDmCnjH0AX9Va8J+liIMvDtRsCk2pEs6hKVexR2g7KuDihwt5a9MfprY0fkLXU9ZmFLpoJolN6GXKWWfZx0tHCocwKJSxC22ItYUEjmBUJHFjfYz1xQxlfaLiZsBExq2IPtbkNbLtOwwuGgjTLkH43mYtSzam7+1Bsr3nm5uExBQUozEh9V7N7uvmwZcqdpm0C6vJW63bZEuXtbrV2zpDzhrpYLBWMnY1mjV7JWFtMio7zbWniWFxvHnWm1yGxXmOPXP+L3YV2ysjnNhaZNeMcHPvuL27BMnVMaujljBAYyje4niH4g2ONyh+4PiB4gOODyjWcKxh1gZBNoJjEY4R/BLhF4IDEQ4QPBoEoyxH4+bxrUsHyxwxQlg0WHXqYifVLmo67cKY/UtaXFxBV26TLjuHrkp8BPJTMij1xQejdkgO24nf7dBOCRcbzQuNOR9Qs64GzzrfQa8It2oFAA6Zrga9xEeq1KHmLUHIiCAWInsg1x/MLqkMsItF8QAAAABJRU5ErkJggg==");
    background-size: 30px auto;
  }
}

.starability-slot {
  display: block;
  position: relative;
  width: 150px;
  min-height: 60px;
  padding: 0;
  border: none;
  margin: 0 auto;
}

.starability-slot>input {
  position: absolute;
  margin-right: -100%;
  opacity: 0;
}

.starability-slot>input:checked~label,
.starability-slot>input:focus~label {
  background-position: 0 0;
}

.starability-slot>input:checked+label,
.starability-slot>input:focus+label {
  background-position: 0 -30px;
}

.starability-slot>input[disabled]:hover+label {
  cursor: default;
}

.starability-slot>input:not([disabled]):hover~label {
  background-position: 0 0;
}

.starability-slot>input:not([disabled]):hover+label {
  background-position: 0 -30px;
}

.starability-slot>input:not([disabled]):hover+label::before {
  opacity: 1;
}

.starability-slot>input:focus+label {
  outline: 1px dotted #999;
}

.starability-slot .starability-focus-ring {
  position: absolute;
  left: 0;
  width: 100%;
  height: 30px;
  outline: 2px dotted #999;
  pointer-events: none;
  opacity: 0;
}

.starability-slot>.input-no-rate:focus~.starability-focus-ring {
  opacity: 1;
}

.starability-slot>label {
  position: relative;
  display: inline-block;
  float: left;
  width: 30px;
  height: 30px;
  font-size: 0.1em;
  color: transparent;
  cursor: pointer;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8CAMAAABGivqtAAAAxlBMVEUAAACZmZn2viTHuJ72viOampqampr1viSampr3vySampqdnZ34wiX1vSSampr1vSOZmZmampr1viT2vSOampr2viT2viSampr2viSampr2vyX4vyWbm5v3vSSdnZ32wSadnZ36wCWcnJyZmZn/wSr/2ySampr2vSP2viSZmZn2vSSZmZn2vST2viSampr2viSbm5ubm5uZmZn1vSSampqbm5v2vSWampqampr3vSf5wiT5vyagoKD/xCmkpKT/yCSZmZn1vSO4V2dEAAAAQHRSTlMA+vsG9fO6uqdgRSIi7+3q39XVqZWVgnJyX09HPDw1NTAwKRkYB+jh3L6+srKijY2Ef2lpYllZUU5CKigWFQ4Oneh1twAAAZlJREFUOMuV0mdzAiEQBmDgWq4YTWIvKRqT2Htv8P//VJCTGfYQZnw/3fJ4tyO76KE0m1b2fZu+U/pu4QGlA7N+Up5PIz9d+cmkbSrSNr9seT3GKeNYIyeO5j16S28exY5suK0U/QKmmeCCX6xs22hJLVkitMImxCvEs8EG3SCRCN/ViFPqnq5epIzZ07QJJvkM9Tkz1xnkmXbfSvR7f4H8AtXBkLGj74mMvjM1+VHZpAZ4LM4K/LBWEI9jwP71v1ZEQ6dyvQMf8A/1pmdZnKce/VH1iIsdte4U8VEtY23xOujxtFpWDgKbfjD2YeEhY0OzfjGeLyO/XfnNpAcmcjDwKOXRfU1IyiTRyEkaiz67pb9oJHJb9vVqKfgjLBPyF5Sq9T0KmSUhQmtiQrJGPHVi0DoSabj31G2gW3buHd0pY85lNdcCk8xlNDPXMuSyNiwl+theIb9C7RLIpKvviYy+M6H8qGwSAp6Is19+GP6KxwnggJ/kq6Jht5rnRQA4z9zyRRaXssvyqp5I6Vutv0vkpJaJtnjpz/8B19ytIayazLoAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-position: 0 -30px;
}

.starability-slot>label::before {
  content: "";
  position: absolute;
  display: block;
  height: 30px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8CAMAAABGivqtAAAAxlBMVEUAAACZmZn2viTHuJ72viOampqampr1viSampr3vySampqdnZ34wiX1vSSampr1vSOZmZmampr1viT2vSOampr2viT2viSampr2viSampr2vyX4vyWbm5v3vSSdnZ32wSadnZ36wCWcnJyZmZn/wSr/2ySampr2vSP2viSZmZn2vSSZmZn2vST2viSampr2viSbm5ubm5uZmZn1vSSampqbm5v2vSWampqampr3vSf5wiT5vyagoKD/xCmkpKT/yCSZmZn1vSO4V2dEAAAAQHRSTlMA+vsG9fO6uqdgRSIi7+3q39XVqZWVgnJyX09HPDw1NTAwKRkYB+jh3L6+srKijY2Ef2lpYllZUU5CKigWFQ4Oneh1twAAAZlJREFUOMuV0mdzAiEQBmDgWq4YTWIvKRqT2Htv8P//VJCTGfYQZnw/3fJ4tyO76KE0m1b2fZu+U/pu4QGlA7N+Up5PIz9d+cmkbSrSNr9seT3GKeNYIyeO5j16S28exY5suK0U/QKmmeCCX6xs22hJLVkitMImxCvEs8EG3SCRCN/ViFPqnq5epIzZ07QJJvkM9Tkz1xnkmXbfSvR7f4H8AtXBkLGj74mMvjM1+VHZpAZ4LM4K/LBWEI9jwP71v1ZEQ6dyvQMf8A/1pmdZnKce/VH1iIsdte4U8VEtY23xOujxtFpWDgKbfjD2YeEhY0OzfjGeLyO/XfnNpAcmcjDwKOXRfU1IyiTRyEkaiz67pb9oJHJb9vVqKfgjLBPyF5Sq9T0KmSUhQmtiQrJGPHVi0DoSabj31G2gW3buHd0pY85lNdcCk8xlNDPXMuSyNiwl+theIb9C7RLIpKvviYy+M6H8qGwSAp6Is19+GP6KxwnggJ/kq6Jht5rnRQA4z9zyRRaXssvyqp5I6Vutv0vkpJaJtnjpz/8B19ytIayazLoAAAAASUVORK5CYII=");
  background-position: 0 30px;
  pointer-events: none;
  opacity: 0;
}

.starability-slot>label:nth-of-type(5)::before {
  width: 120px;
  left: -120px;
}

.starability-slot>label:nth-of-type(4)::before {
  width: 90px;
  left: -90px;
}

.starability-slot>label:nth-of-type(3)::before {
  width: 60px;
  left: -60px;
}

.starability-slot>label:nth-of-type(2)::before {
  width: 30px;
  left: -30px;
}

.starability-slot>label:nth-of-type(1)::before {
  width: 0px;
  left: 0px;
}

@media screen and (-webkit-min-device-pixel-ratio: 2),
screen and (min-resolution: 192dpi) {
  .starability-slot>label {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAMAAACZ62E6AAABAlBMVEUAAACZmZmampr2vSObm5v/yiufn5+ampr1viP1viSZmZn2viOZmZmampqampr2viSampqampqcnJz5vyScnJz3wSf/wyn/xiujo6Oqqqr/0C/1vSOampr2viP2viOampr2viP2vST2viOampqampqampr1vyP3viSampr2vyT4vyX3viSbm5ubm5v5wCT8xSmgoKCampqampr3vyb2wiWenp72viOampqZmZmampr2viP2viP1viSampqbm5v2vyT3viObm5v4vyadnZ34wSSbm5v2viSZmZn2viP2vST2viP2viT1viOZmZn2viT2viX3viT3vyb2vyOZmZn1vSOZmZlNN+fKAAAAVHRSTlMA9uz4PQwS8O7r5+fTw4yMelw2MB0dFRELBgbS+/Hfu7uxqKWdg4N7ZmZMPi8pKRgPs0w7Nhb14drKw6Gck21tXkNDIyMZ1rDLycTBtaqVknlfV0sGP8ZwAAADW0lEQVRYw9zWvYqDQBSG4TPDoCAqKhYKQgoVLFaIgZCkiCBBUqVazv3fyu4aEXWdM85Uy779A+LP58AfTQgw73AwtxFiZIwbxMbUfuB3H4b49YNfZrbGodoI52+cm9hH9sbZwwAXOFbo2zjDsSzWxnecuuvaM8MpdtbEPs7y9azF5phZWrjERaWOPdpLbB81cICrgv3W4mvMLbU6RmFQeA5u5HhFEEbHLdWLsMxvHJXxW16Goh+ZqPyny1Az5j79SsCJoWHsBNAxQ9sNF26bWFuMC8v1LY+mmeTadjaqtaNnnXoxWBcde1nNWnzdb68xrOqvu22/MTzuPutujpJ122NvluSb8tTWk85CclDZQwLS0oa2TQpEKacsJy0kSJaQOKJxROKKxhWJ7zS+k9ijsUdim8Y2ZWNUFBP4pMKfOv8onX9WrsI5gd3VVLXtatxcuU0znGUHCUAS2DgrS6mT6hTzrXEjfIZj5Dk2xKkihqm4wKlQfQRqalhUP9UHo3FIPAG/Et44JVLsDDf0JHmB3OEByOwZES8hSAsviGjBdh3ylh6plmMnW4IyAUVJWcE/76vTell1EIaiMBwIAcWBA9GC0lIdKFXQQUsHVVCklN7ojf3+z3JOxYqK2TH555+K6CJJQtRbr9XtDmCnjH0AX9Va8J+liIMvDtRsCk2pEs6hKVexR2g7KuDihwt5a9MfprY0fkLXU9ZmFLpoJolN6GXKWWfZx0tHCocwKJSxC22ItYUEjmBUJHFjfYz1xQxlfaLiZsBExq2IPtbkNbLtOwwuGgjTLkH43mYtSzam7+1Bsr3nm5uExBQUozEh9V7N7uvmwZcqdpm0C6vJW63bZEuXtbrV2zpDzhrpYLBWMnY1mjV7JWFtMio7zbWniWFxvHnWm1yGxXmOPXP+L3YV2ysjnNhaZNeMcHPvuL27BMnVMaujljBAYyje4niH4g2ONyh+4PiB4gOODyjWcKxh1gZBNoJjEY4R/BLhF4IDEQ4QPBoEoyxH4+bxrUsHyxwxQlg0WHXqYifVLmo67cKY/UtaXFxBV26TLjuHrkp8BPJTMij1xQejdkgO24nf7dBOCRcbzQuNOR9Qs64GzzrfQa8It2oFAA6Zrga9xEeq1KHmLUHIiCAWInsg1x/MLqkMsItF8QAAAABJRU5ErkJggg==");
    background-size: 30px auto;
  }
}

@media screen and (-ms-high-contrast: active) {
  .starability-slot {
    width: auto;
  }

  .starability-slot>input {
    position: static;
    margin-right: 0;
    opacity: 1;
  }

  .starability-slot .input-no-rate {
    display: none;
  }

  .starability-slot>label {
    display: inline;
    float: none;
    width: auto;
    height: auto;
    font-size: 1em;
    color: inherit;
    background: none;
  }

  .starability-slot>label::before,
  .starability-slot>label::after {
    display: none;
  }
}

.starability-slot>input:checked~label,
.starability-slot>input:hover~label,
.starability-slot>input:focus~label {
  -webkit-transition: background-position 0.7s;
  transition: background-position 0.7s;
}
</style>

