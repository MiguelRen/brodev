<template>
  <div class="absolute inset-0 z-0">
    <img
      src="../assets/images/street_gif.gif"
      alt="Background Image"
      class="object-cover w-full h-full sm:w-full z-0"
    />
  </div>
  <div class="relative z-10 w-full h-full">
    <NavBar></NavBar>
    <AboutUs> </AboutUs>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/home/NavBar.vue'
import AboutUs from '~/components/home/dropdowns/AboutUs.vue'
</script>
