<script>
export default {
    name: 'Button',
    props: ['button']
}
</script>

<template>
<button class="w-full text-[#012d95] rounded-xl bg-yellow-500 p-3 hover:bg-yellow-600">{{ button }}</button>
</template>