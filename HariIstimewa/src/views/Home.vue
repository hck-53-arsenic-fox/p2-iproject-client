<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
    <Navbar />

<section class="px-[10%]">
    <div class="container py-5">
        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://hariistimewa.com/_exclusive/themes/elegantgold/thumbnail.jpg" alt="">
            <div class="my-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 md:text-4xl">
                    Undangan Pernikahan Digital
                </a>
                <div >
                <p class="mt-3 text-xl md:text-3xl text-gray-500">
                    Sebarkan hari istimewamu dengan mudah hanya dalam hitungan detik menggunakan undangan digital.
                </p>
                <p class="mt-3 text-xl md:text-3xl text-gray-500">
                    Kami memiliki semua yang Kamu butuhkan untuk membuat undangan digital.
                </p>
            </div>
            <div  class="mt-3">
                <a class="px-4 py-2 text-sm font-semibold bg-pink-200 rounded-lg text-pink-500 hover:bg-pink-300 hover:text-pink-700" href="#">Lihat Katalog Tema</a>
            </div>
            </div>
        </div>
    </div>
</section>


<section class="bg-gradient-to-l from-pink-200 to-pink-400 px-[10%]">
    <div class="container py-5">
        <div class="mt-8 ">
            <div class="my-6 w-full lg:mt-0 lg:mx-6 ">
                <div >
                <p class="title text-center mt-3 text-4xl md:text-6xl text-white drop-shadow-lg shadow-black">
                    Timeless Invitation for
                </p>                
                <p class="title text-center mt-3 text-4xl md:text-6xl text-white drop-shadow-lg shadow-black">
                    Modern Wedding
                </p>
            </div>
            </div>
        </div>
    </div>
</section>



<section class="px-[10%]">
    <p class="text-center mt-10 text-4xl md:text-5xl text-gray-500">
        Temukan Fitur-Fitur Menarik
    </p>
    <p class="text-center mt-3 text-ms md:text-lg text-gray-500">
        Yang Akan Membuat Undangan Pernikahan Anda Tampil Beda
    </p>
    <div class="min-w-screen grid grid-cols-3 gap-4 items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="rounded-xl bg-white shadow-xl p-5  text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-03.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Custom Nama Tamu
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-5 text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-11.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Quotes & Doa
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-5 text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-06.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Galeri Foto & Video
                    </p>
                </div>
            </div>
        </div>        
        <div class="rounded-xl bg-white shadow-xl p-5 text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-10.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Amplop Digital
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-5 text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-09.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Navigasi Maps
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-5 text-gray-800 md:text-left">
            <div class="flex items-center p-2">
                <div class="w-1/2 mr-5">
                    <img src="https://hariistimewa.com/wp-content/uploads/2021/03/WDP-IKON-12.png"
                        class="rounded-xl" alt="">
                </div>
                
                <div class="w-1/2">
                    <p class="text-gray-500">
                        Musik Latar
                    </p>
                </div>
            </div>
        </div>
        
    </div>

</section>

<section class="my-10">
<div class="pb-16 bg-gradient-to-r from-pink-200 to-pink-400 lg:pb-0 lg:z-10 lg:relative">
	<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
		<div class="relative lg:-my-8">
			<div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden">
			</div>
			
			<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
				<div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="object-cover lg:h-full lg:w-full">
				</div>
			</div>
		</div>
		<div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
			<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote class="">
				<div class="">
                    <svg fill="black" viewBox="0 0 32 32" aria-hidden="true" class="h-12 w-12 text-white opacity-25">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z">
                        </path>
                    </svg>
                    <p class="mt-6 text-2xl font-medium text-black outfit">Membantu banget undangan digitalnya, fiturnya menarik, isi undangannya bisa disesuaikan sendiri</p>
				</div>
                <footer class="mt-6">
                    <p class="text-base font-medium text-black outfit">- Vena &amp; Andre</p></footer>
                </blockquote>
			</div>
		</div>
	</div>
</div>
</section>

<section id="tema" class="px-[10%]">
    <p class="text-center mt-20 text-4xl md:text-5xl text-gray-500">
        Berbagai Tema Siap Pakai
    </p>
    <p class="text-center mt-3 text-ms md:text-lg text-gray-500">
        Tidak perlu bingung untuk membuat desainnya. Pilih tema yang sesuai dengan kamu.
    </p>
    <div class="min-w-screen grid grid-cols-3 gap-5  items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="rounded-xl bg-white shadow-lg text-gray-800 md:text-left">
            <div class="flex items-center">
                <img class="rounded-md" src="../assets/img/theme1.png" alt="" srcset="">
            </div>
            <p class="text-center">Tema 1</p>
        </div>
        <div class="rounded-xl bg-white shadow-lg text-gray-800 md:text-left">
            <div class="flex items-center">
                <img class="rounded-md" src="../assets/img/theme2.png" alt="" srcset="">
            </div>
            <p class="text-center">Tema 2</p>
        </div>
        <div class="rounded-xl bg-white shadow-lg text-gray-800 md:text-left">
            <div class="flex items-center">
                <img class="rounded-md" src="../assets/img/theme1.png" alt="" srcset="">
            </div>
            <p class="text-center">Tema 3</p>
        </div>
        
    </div>

</section>

<section id="harga" class="px-[10%]">
    
    <div class="rounded-xl bg-gradient-to-b from-pink-200 to-pink-400 shadow-lg text-gray-800 md:text-left">
        <h1 class="text-center font-bold ml-5 py-3 text-2xl text-gray-800">Harga</h1>
        <div class="flex justify-center text-center mb-2">
            <p class="w-1/2 text-4xl hover:text-3xl duration-1000 place-items-end font-semibold line-through">Rp. 150.000</p>
            <p class="w-1/2 text-4xl hover:text-5xl duration-1000 font-semibold">Rp. 75.000</p>
        </div>
        <p class="text-center">Biaya nikah sudah mahal, biar kami saja yang kasih murah dengan fitur melimpah.</p>
        <div  class="p-5 ">
            <p class="px-4 py-2 text-xl text-center font-semibold bg-pink-200 rounded-lg text-pink-500 hover:bg-pink-600 hover:text-pink-100" href="#">Buat Sekarang Disc. 50%</p>
        </div>
    </div>
</section>

<Footer />
</template>