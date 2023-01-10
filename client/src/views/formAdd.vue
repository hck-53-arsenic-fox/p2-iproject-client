<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    name: 'formAdd',
    data(){
        return{
            doctors:{
                name: '',
                id: ''
            },
            doctor:{
                name: '',
                date: ''
            }
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(useCounterStore, ['detailDoctors', 'addForm'])
        
        
    },
    async created(){
        const {data} = await this.detailDoctors(this.$route.params.id)
        this.doctors.name = data.name
        this.doctors.id = data.id
    }
}

</script>

<template>

    <!-- Formulir section starts -->
    <section class="formulir">
        <div class="formCreate">
            <div class="form-contents">
                <div class="text">Formulir</div>
                <form @submit.prevent="addForm(doctors.id, doctor)">
                    <div class="field">
                        <span class="fas fa-user"></span>
                        <input v-model="doctor.name" type="text" placeholder="input your name">
                    </div>
                    <div class="field">
                        <label class="dateform" for="date">Tanggal Pertemuan:</label>
                        <span class="fas"></span>
                        <input v-model="doctor.date" type="date">
                    </div>
                    <div class="field">
                        <label class="dateform" for="date">Doctor:</label>
                        <br>
                        <span class="fas fa-user"></span>
                        <input v-if="doctors.name" type="text" v-model="doctors.name">
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Formulir section ends -->
</template>