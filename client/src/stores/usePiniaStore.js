import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from "sweetalert2";

const baseUrl = "http://localhost:4000/users"
const urlAPI_1 = "https://api.api-ninjas.com/v1/planets"
const urlAPI_2 = "https://images-api.nasa.gov/search?q=apollo%2022&description=moon%20landing&media_type=image"

export const usePiniaStore = defineStore("piniaStore", {
    state: () => ({
        dateAndTime: {},
        isLogin: false,
        dataPlanets: [],
        dataAstros: [],
        queryPlanets: {
            search: ""
        },
        dataUser: "",
        dataStatus: []
    }),
    actions: {
        timeStamper() {
            const hour = new Date().getHours();
            const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
            let welcomeText = "";
            if (hour < 12) welcomeText = welcomeTypes[0];
            else if (hour < 18) welcomeText = welcomeTypes[1];
            else welcomeText = welcomeTypes[2];
            this.dateAndTime = welcomeText;
          },
        async register(dataRegister){
            try {
                await axios({
                    method: "POST",
                    url: `${baseUrl}/register`,
                    data: dataRegister
                })
                Swal.fire({
                    title: 'Register success, please Login',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                this.router.push('/login')
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                  });
                  console.log(error);
            }
        },
        async login(dataLogin){
            try {
                let {data} = await axios({
                    method: "POST",
                    url: `${baseUrl}/login`,
                    data: dataLogin
                })
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("id", data.id);
                this.isLogin = true
                this.router.push('/')
                Swal.fire({
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: 'Wrong Email/Password'
                  });
                  console.log(error);
                }
            },

            async planetaryInfo(){
                try {
                    let name = this.queryPlanets
                    if(!name.search){
                        delete name.search
                    }
                    let {data} = await axios({
                        method: "GET",
                        url: 'http://localhost:4000/users/planetsInfo' + `?name=${name.search}`,
                        headers: {
                            access_token: localStorage.getItem("access_token")
                        }
                    })
                    this.dataPlanets = data
                    console.log(data, "<< data planet");
                } catch (error) {
                    console.log(error);
                }
            },
            async getProfile(){
                try {
                    let {data} = await axios({
                        method: "GET",
                        url: `${baseUrl}/profile`,
                        headers: {access_token: localStorage.getItem("access_token")}
                    })
                    this.dataUser = data
                    console.log(data, "<<< data profile");
                } catch (error) {
                    console.log(error);
                }
            },
            async updateStatus(){
                try {
                    let {data} =  await axios({
                        method: "PATCH",
                        url: `${baseUrl}/subscription`,
                        data: {isSubscribed: true},
                        headers: {
                            access_token: localStorage.getItem("access_token")
                        }
                    })
                    this.dataStatus = data
                } catch (error) {
                    console.log(error);
                }
            },
            async subscribe(){
                try {
                    let {data} = await axios({
                        method: "POST",
                        url: `http://localhost:4000/users/paymentToken`,
                        headers: {
                            access_token: localStorage.getItem("access_token")
                        }
                    })
                    const cb = this.updateStatus
                    window.snap.pay(data.token, {
                        onSuccess: function(result){
                          /* You may add your own implementation here */
                          alert("payment success!"); console.log(result);
                          cb()
                        },
                        onPending: function(result){
                            /* You may add your own implementation here */
                            alert("wating your payment!"); console.log(result);
                          },
                          onError: function(result){
                            /* You may add your own implementation here */
                            alert("payment failed!"); console.log(result);
                          },
                          onClose: function(){
                            /* You may add your own implementation here */
                            alert('you closed the popup without finishing the payment');
                          }
                      })
                } catch (error) {
                    console.log(error);
                }
            },
            async astroGallery(){
                try {
                    let {data} = await axios({
                        method: "GET",
                        url: urlAPI_2
                    })
                    this.dataAstros = data
                } catch (error) {
                    console.log(error);
                }
            },
        }
    }
)