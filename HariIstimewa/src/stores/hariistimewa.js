import { defineStore } from "pinia";
import axios from 'axios';
import swal from "sweetalert2";

// const mainUrl = "https://hariistimewa-new-production.up.railway.app"
const mainUrl = "http://127.0.0.1:3000"

export const useHawaStore = defineStore("hawa", {
  state: () => ({
    register: {
      email: '',
      password: '',
    },
    dataInvitation: [],
    listLagu: [],
    greet : {
      guest: '',
      presence: '',
      greeting: ''      
    },
    user : []
  }),

  actions: {
    async navigatePage(toPage) {
      await this.router.push(toPage)
    },

    async handleRegister(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/register",
        data: input,
      })
        .then((data) => { 
          // request.json('>>>>>>>>>>>',data)
          // console.log(data.id);      
          swal.fire({
            title: `Akun Berhasil dibuat`,
            icon: "success",
            confirmButtonColor: "#fa98d0",
          });
          this.register = {
            email: '',
            password: '',
          }
          this.router.push('/login')
        })
        .catch((err) => {
          console.log('>>>>>>>',err);
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    
    async handleLogin(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/login",
        data: input,
      })
        .then((result) => {
          
          swal.fire({
            title: `Welcome!`,
            confirmButtonColor: "#fa98d0",
          });
          localStorage.setItem("access_token", result.data.access_token);
          localStorage.setItem("email", result.data.email);
          localStorage.setItem("role", result.data.role);
          this.access_token = result.data.access_token;
          this.email = result.data.email;
          this.password = "";
console.log('berhasil');
          this.router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err);
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    async googleLogin(credential) {
      await axios({
        method: "POST",
        url: mainUrl + "/google-sign-in",
        headers: {
          google_auth_token: credential
        }
      }).then((result) => {
        swal.fire({
          title: `Welcome!`,
          confirmButtonColor: "#fa98d0",
        });
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("role", result.data.role);
        this.access_token = result.data.access_token;
        this.email = result.data.email;
        this.router.push('/dashboard')
      })
      .catch((err) => {
        swal.fire({
          title: `${err.response.data.message}`,
          icon: "error",
          confirmButtonColor: "#fa98d0",
        });
      });
    },

    
    async fenchInvitaion(id) {
      await axios({
        method: "GET",
        url: mainUrl + `/invitations/${id}`,
      })
        .then(({data}) => {
          this.dataInvitation = data;
        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    
    async listMusic() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl + `/musics`,
        })

        this.listLagu = data;
      } catch (error) {
        swal.fire({
            title: `${error.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
      }
    },

    async getUser() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl + `/users`, 
          headers: {
          access_token: localStorage.access_token
        },
        })
console.log(data);
        this.user = data.status;
      } catch (error) {
        swal.fire({
            title: `${error.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
      }
    },

    async addInvitation(input) {
      await axios({
        method: "POST",
        url: mainUrl + "/invitations",
        headers: {
          access_token: localStorage.access_token
        },
        data: input,
      })
        .then((result) => {          
          swal.fire({
            title: `Undangan Berhasil dibuat`,
            icon: "success",
            confirmButtonColor: "#fa98d0",
          });
          console.log(result);
          response.json(result)
          this.router.push('/dashboard')
        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    
    handleLogout() {
      localStorage.clear();
      this.router.push('/')
    },

    async addGreet(id, input) {
      console.log('INPUT>>>>>',input);
      await axios({
        method: "POST",
        url: mainUrl + `/greets/${id}`,
        data: input,
      })
        .then(({data}) => {   
          console.log(data);
          swal.fire({
            title: `Ucapan Berhasil dikirim`,
            icon: "success",
            confirmButtonColor: "#fa98d0",
          });
          this.greet = {
            guest: '',
            presence: '',
            greeting: ''
        }
          this.fenchInvitaion(id)
          
          // this.router.push(`/t1/${id}`)
        })
        .catch((err) => {
          swal.fire({
            title: `${err.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#fa98d0",
          });
        });
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('id','ID')
  },

  async patchStatus(id) {
    console.log('a');
    console.log('>>>>',id);
    await axios({
      method: 'PATCH',
      url: mainUrl + `/users/${id}`,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({ data }) => {
        // this.courses = data
        swal.fire({
          title: 'Status Active',
          confirmButtonColor: "#fa98d0",
        })
      }).catch((error) => {
        console.log('s');
        console.log(error.response.data.message);
        swal.fire({
          title: 'Error!',
          text: `${error.response.data.message}`,
          icon: 'error',
          confirmButtonColor: "#fa98d0",
        })
      });

  },
  async midtrans(price) {

    if (this.promoCode === "TOPUPBONUS") {

      price = price - (price * 15 / 100)
    }
    try {
      let { data } = await axios({
        method: 'POST',
        url: mainUrl + "/generateToken",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
      })

      

      window.snap.pay(`${data.token}`, {
        onSuccess: async (result) => {
          // alert("Success!"); console.log(result);
          await axios({
            method: 'PATCH',
            url: mainUrl + `/users`,
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(({ data }) => {
              // this.courses = data
              swal.fire({
                title: 'Status Active',
                confirmButtonColor: "#fa98d0",
              })
            }).catch((error) => {
              console.log('s');
              console.log(error.response.data.message);
              swal.fire({
                title: 'Error!',
                text: `${error.response.data.message}`,
                icon: 'error',
                confirmButtonColor: "#fa98d0",
              })
            });
        },
        onPending: function (result) {
          // alert("wating your payment!"); console.log(result);
        },
        onError: function (result) {
          // alert("payment failed!"); console.log(result);
        },
        onClose: function () {
          // alert('you closed the popup without finishing the payment');
        }
      })
    } catch (error) {
      console.log(error)
    }

  },
  

  }
});
