<script>
    export default{
        name: 'TheaterCard', 
        props: ['item']
    }
</script>

<template>
    <a href="#" @click.prevent="$router.push(`theater/${item.id}`)"  class="list-group-item list-group-item-action py-3">{{ item.name }}</a>
</template>