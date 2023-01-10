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
    <a class="nav-link fontstyle active">Hi, {{ username }} </a>
</template>