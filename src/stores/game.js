import axios from "axios";
import { defineStore } from "pinia";
import { auth, firebaseAuth } from "../auth/auth.service";
import { BASE_URL, toast } from "../main";

export const useGameStore = defineStore("game", {
  state: () => ({
    games: [],
    console: [],
    isPaid: false,
    query: {
      search: "",
      page: 1,
      platformId: "",
    },
    rentData: {
      user: localStorage.getItem("email"),
      ConsoleId: "",
      ConsoleName: "",
      ConsolePrice: "",
      GameId: [],
      day: 1,
      GameName: [],
      GamePrice: [],
    },
    cartData: {},
    total_price: 0,
    openCart: false,
  }),
  actions: {
    async fetchGames() {
      try {
        let sendQuery = {};

        if (this.query.search != "") {
          sendQuery.search = this.query.search;
        }
        if (this.query.page > 1) {
          sendQuery.page = this.query.page;
        }
        if (this.query.platformId != "") {
          sendQuery.platformId = this.query.platformId;
        }

        const { data } = await axios({
          url: BASE_URL + "/games",
          method: "GET",
          params: sendQuery,
        });
        this.games = data.games;
        this.currentPage = data.currentPage;
      } catch (err) {
        toast.error("ERROR FETCH GAMES");
      }
    },
    async fetchConsole() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/console",
          method: "GET",
        });
        this.console = data;
      } catch (err) {
        toast.error("ERROR FETCH CONSOLE");
      }
    },
    calculatePrice() {
      let data = this.rentData;
      let gamePrice = 0;
      data.GamePrice.forEach((el) => {
        gamePrice += +el;
      });
      this.total_price = data.ConsolePrice * data.day + gamePrice;
    },
    getGameId({ id, name, price }) {
      if (!localStorage.getItem("access_token")) {
        toast.error("Please Login First");
      } else {
        let found = this.rentData.GameId.find((el) => el == id);
        if (!found) {
          this.rentData.GameId.push(id);
          this.rentData.GameName.push(name);
          this.rentData.GamePrice.push(price);
          toast.success("Added new game");
          this.calculatePrice();
        } else {
          toast.info("Game already in cart");
        }
      }
    },
    getConsoleId({ id, name, rent_price }) {
      if (!this.rentData.ConsoleId) {
        this.rentData.ConsoleId = id;
        this.rentData.ConsoleName = name;
        this.rentData.ConsolePrice = rent_price;
        toast.success("Console aded to cart");
        this.calculatePrice();
        this.isPaid = false
      } else {
        toast.info("Console already in cart");
      }
    },
    async rentGames() {
      try {
        const idToken = await auth.currentUser.getIdToken(true);

        const { data } = await axios({
          url: BASE_URL + "/games/rent",
          method: "POST",
          headers: { access_token: localStorage.getItem("access_token") },
          data: this.cartData,
        });



         window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            toast.success("payment success!");
          },
        });
        this.router.push({name: 'homePage'})
        this.resetData()
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    resetData() {
      this.rentData.user = localStorage.getItem("access_token")
    
    }
    
  },
});
