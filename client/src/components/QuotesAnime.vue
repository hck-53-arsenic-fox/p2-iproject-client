<script>
    export default {
        data() {
            return {
                kata: ''
            }
        },
        methods: {
            Quotes() {
                fetch("https://animechan.vercel.app/api/random")
                    .then((response) => response.json())
                    .then((quote) => {
                        // console.log(quote)
                        this.kata = quote.quote
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
            <p class="text-muted"> Quotes </p>
             {{ this.kata }}
        </div>
    </div>
</template>