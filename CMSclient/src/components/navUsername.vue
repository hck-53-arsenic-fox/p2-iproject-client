<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/user';
export default {
    computed: {
        ...mapState(useUserStore,['username']),
    }
}
</script>

<template>
    <a class="nav-link fontstyle active ms-5">Hi, {{ username }} </a>
</template>