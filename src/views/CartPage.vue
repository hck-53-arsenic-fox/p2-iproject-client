<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { toast } from "../main";
import { useGameStore } from "../stores/game";
export default {
  data() {
    return {
      start_date: "",
      user_email: "",
      token: "",
      address: "",
      sendData: {
        transaction_token: "",
        user: "",
        day: "",
        ConsoleId: "",
        GameId: [],
        total_price: 0,
      },
    };
  },
  computed: {
    ...mapWritableState(useGameStore, ["rentData", "cartData", "isPaid", "total_price"]),
  },
  methods: {
    ...mapActions(useGameStore, ["calculatePrice", "rentGames"]),
    
    generateTransactionToken() {
      this.token =
        `ORDER` +
        Math.floor(1000000000000000 + Math.random() * 9000000000000000)
          .toString(36)
          .substr(0, 10);
      this.$router.replace({
        name: this.$route.name,
        query: { transactionId: this.token },
      });
    },
    async checkout() {
      this.sendData.user = this.rentData.user;
      this.sendData.ConsoleId = this.rentData.ConsoleId;
      this.sendData.GameId = this.rentData.GameId;
      this.sendData.day = this.rentData.day;
      this.sendData.total_price = this.total_price;
      this.sendData.address = this.address;
      this.sendData.transaction_token = this.$route.query.transactionId;
      if (!this.sendData.ConsoleId) {
        toast.error("Console cannot be empty");
      } else if (!this.sendData.address) {
        toast.error("Address cannot be empty");
      } else {
        this.cartData = this.sendData;
        await this.rentGames()
        this.generateTransactionToken()
      }
    },
    async toPdf() {
      try {
        const data = document.getElementById("toPdf");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.generateTransactionToken();

    this.user_email = localStorage.getItem("email");
  },
};
</script>
<template>
  <!-- <button @click.prevent="toPdf">PRINT</button> -->
  <div
    id="toPdf"
    class="mx-auto mt-24 border-2 border-black w-[400px] rounded-xl p-2 shadow-lg"
  >
    <div class="text-center font-bold text-xl">
      <strong class="text-red-600">GAME</strong
      ><span class="font-semibold">RENT</span>
    </div>
    <div class="text-xs font-semibold text-center pb-1">CART</div>
    <div class="text-xs font-semibold text-center pb-1">TRANSACTION ID</div>
    <div class="text-xs font-semibold text-center pb-1">{{ token }}</div>
    <div class="text-center font-bold text-neutral-700">
      {{ user_email }}
    </div>
    <div class="flex justify-between mt-2 px-2">
      <div class="text-neutral-700">Start Date</div>
      <div>
        <input
          v-model="start_date"
          class="border-2 border-black rounded-xl px-2"
          type="date"
          name=""
          id=""
        />
      </div>
    </div>
    <div class="flex justify-between mt-2 px-2">
      <div class="text-neutral-700">Days</div>
      <div>
        <input
          @change.prevent="calculatePrice"
          v-model="rentData.day"
          class="border-2 w-16 border-black rounded-xl px-2"
          type="number"
          name=""
          id=""
        />
      </div>
    </div>
    <div class="mt-2 px-2">
      <div class="text-neutral-700">Address</div>
      <div>
        <textarea
          v-model="address"
          class="border-2 w-full h-20 border-black rounded-xl px-2"
          type="text"
          name=""
          id=""
        ></textarea>
      </div>
    </div>

    <div class="border-t-2 border-black mt-2"></div>

    <div class="mb-2">
      <div class="rounded-lg font-bold">CONSOLE</div>
      <div class="text-sm flex justify-between px-2">
        <div>
          <p>{{ rentData.ConsoleName }}</p>
        </div>
        <div v-if="rentData.ConsolePrice" class="flex gap-2">
          <p>{{ rentData.day }} x Rp {{ rentData.ConsolePrice }}</p>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-black"></div>

    <div class="mb-2">
      <div class="rounded-lg font-bold">GAMES</div>
      <div class="text-sm flex justify-between px-2">
        <div>
          <p v-for="game in rentData.GameName">{{ game }}</p>
        </div>
        <div>
          <div v-for="price in rentData.GamePrice" class="flex gap-2">
            <p>Rp {{ price.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-black"></div>
    <div class="flex justify-between p-1">
      <div class="rounded-lg font-bold">TOTAL PRICE</div>
      <div>Rp {{ total_price }}</div>
    </div>

    <div class="mt-4">
      <button
        @click="checkout"
        type="submit"
        class="rounded-xl w-full px-3 py-2 bg-green-700 tracking-wider text-white hover:-translate-y-1 hover:bg-green-600"
      >
        <strong v-if="!isPaid">Checkout</strong>
        <strong v-if="isPaid">Success</strong>
      </button>
    </div>
  </div>
</template>
