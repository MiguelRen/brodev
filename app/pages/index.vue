<template>
    <section  class="relative h-screen flex items-center justify-center">
        <div class="absolute inset-0 z-0" >
            <img 
            src="../assets/images/street_gif.gif" 
            alt="Background Image" 
            class="object-cover w-full h-full sm:w-full">
        </div>
        <div class="absolute inset-0 z-10 bg-black  opacity-50"> </div>
        <div class="absolute inset-0 z-20 text-white text-center p-4">
            <NavBar></NavBar>
            <BodyBar></BodyBar>
            <FootBar></FootBar>
        </div>
    </section>

</template>

<script lang="ts" setup>
    import NavBar from '../components/home/NavBar.vue';
    import BodyBar from '../components/home/BodyBar.vue'
    import FootBar from '../components/home/FootBar.vue'
</script>

<style>

.body-background{
    background-image: url('../assets/images/street_gif.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
