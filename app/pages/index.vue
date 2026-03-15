<template>
  <section class="relative h-screen w-full flex flex-col overflow-hidden">
    <!-- Optimized Background with Video -->
    <div class="absolute inset-0 z-0 h-full w-full">
      <video
        autoplay
        muted
        loop
        playsinline
        class="object-cover w-full h-full"
      >
        <source src="~/assets/images/IMG_1114.MP4" type="video/mp4" />
      </video>
    </div>

    <!-- Improved overlay for contrast -->
    <div class="absolute inset-0 z-10 bg-black/60 h-full w-full"></div>

    <!-- Main Content Container -->
    <div class="relative z-20 flex flex-col h-full overflow-hidden">
      <!-- Navigation sits at the top -->
      <NavBar class="w-full flex-shrink-0" />

      <!-- Center content: Body and Footer -->
      <main class="flex-grow flex flex-col items-center justify-around px-6 py-6 text-white text-center">
        <div class="max-w-4xl w-full">
          <BodyBar />
        </div>
        <div class="w-full max-w-4xl">
          <FootBar />
        </div>
      </main>
    </div>

    <!-- Modals -->
    <LeadFormModal />
  </section>
</template>

<script lang="ts" setup>
import NavBar from '../components/home/NavBar.vue'
import BodyBar from '../components/home/BodyBar.vue'
import FootBar from '../components/home/FootBar.vue'
import LeadFormModal from '../components/LeadFormModal.vue'

useHead({
  title: 'PlusBienes | Expertos Inmobiliarios',
  meta: [
    { name: 'description', content: 'Servicio y acompañamiento en cada fase del proceso inmobiliario.' }
  ]
})
</script>

<style scoped>
/* Removed redundant body-background class as it's handled by NuxtImg */
</style>
