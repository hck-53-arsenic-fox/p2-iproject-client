<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    name: 'editForm',
    data(){
        return {
            transaction:{
                name: '',
                date: '',
                doctor: '',
                id: ''
            },
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(useCounterStore, ['detailTransactions', 'editData'])
    },
    async created(){
        try {
            const {data} = await this.detailTransactions(this.$route.params.id)
            this.transaction.name = data.name
            this.transaction.date = new Date(data.date)?.toLocaleDateString('en-CA')
            this.transaction.doctor = data.Doctor.name,
            this.transaction.id = data.id
            
        } catch (error) {
            console.log(error);
        }


    }
}

</script>

<template>


    <!-- Formulir section starts -->
    <section class="formulir">
        <div class="formCreate">
            <div class="form-contents">
                <div class="text">Formulir</div>
                <form @submit.prevent="editData(transaction.id, transaction)">
                    <div class="field">
                        <span class="fas fa-user"></span>
                        <input type="text" v-model="transaction.name">
                    </div>
                    <div class="field">
                        <label class="dateform" for="date">Tanggal Pertemuan:</label>
                        <span class="fas"></span>
                        <input type="date" v-model="transaction.date" >
                    </div>
                    <div class="field">
                        <label class="dateform" for="date">Doctor:</label>
                        <br>
                        <span class="fas fa-user"></span>
                        <input type="text" v-model="transaction.doctor">
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Formulir section ends -->
</template>