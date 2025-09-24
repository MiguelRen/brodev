<template>
<div class="body-background">
    <NavBar></NavBar>
    <BodyBar></BodyBar>
    <FootBar></FootBar>
</div>

</template>

<script lang="ts" setup>
    import NavBar from '../components/home/NavBar.vue';
    import BodyBar from '../components/home/BodyBar.vue'
    import FootBar from '../components/home/FootBar.vue'
</script>

<style>

.body-background{
    background-image: url('../assets/images/gifttest.gif')
}
</style>
