<script>
  import CreateOrder from "../components/CreateOrder.vue";
  export default {
    components:{
      CreateOrder,
    },
    props:['sections'],
    emits:['activatedMenu'],
    data(){
      return {
      }
    },
    methods: {
      activatedMenu(section){
        this.$emit('activatedMenu', section)
      },
    },
  } 
</script>
<template>
  <div class="mt-24 w-full bg-slate-500">
    <span class="text-xl font-semibold">Enter recepient detail</span>

    <div class="">
      <div class=""><span>Recepient name:</span></div>
      <div>
        <input type="text" name="recepientName" id="recepientName">
      </div>

      <div>
        <button>New</button>
      </div>
      <div>
        <button>Saved</button>
      </div>
    </div>
  </div>
  <CreateOrder @activatedMenu="activatedMenu" :sections="sections" class="z-50"/>
</template>