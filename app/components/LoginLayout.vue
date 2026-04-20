<template>
  <div class="relative min-h-screen w-full flex flex-col overflow-hidden font-lora">
    <!-- Background with sophisticated overlay (Matching MainContainer) -->
    <div class="absolute inset-0 z-0 h-full w-full bg-[#00214f]">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col min-h-screen">
      <NavBar class="w-full flex-shrink-0" />
      
      <main class="flex-grow flex items-center justify-center px-6 py-12">
        <slot />
      </main>

      <div class="p-8 opacity-30 flex justify-center">
         <img src="~/assets/images/plus_logo_no_background.png" class="w-24 grayscale" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '~/components/home/NavBar.vue'
</script>

<style scoped>
.font-lora {
  font-family: 'Lora', serif;
}
</style>
