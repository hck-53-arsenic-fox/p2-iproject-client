<script>
    export default {
        data() {
            return {
                QuotesAnime: {
                    karakter: '',
                    kata: ''
                }
            }
        },
        methods: {
            Quotes() {
                fetch("https://animechan.vercel.app/api/random")
                    .then((response) => response.json())
                    .then((quote) => {
                        // console.log(quote)
                        this.QuotesAnime.kata = quote.quote
                        this.QuotesAnime.karakter = quote.character
                    });
            }
        },
        created() {
            this.Quotes()
        }
    }
</script>

<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="alert alert-info text-center" role="alert">
            <h3 class="text-muted"> Quotes </h3>
            <h4> {{ this.QuotesAnime.karakter }}</h4>
            <p>
                {{ this.QuotesAnime.kata }}
            </p>
        </div>
    </div>
</template>