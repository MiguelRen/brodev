<template>
  <section class="relative min-h-screen w-full flex flex-col overflow-x-hidden">
    <!-- Optimized Background with Video -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        class="object-cover w-full h-full"
      >
        <source src="@/assets/images/Real_Estate_Video_Generation.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- Improved overlay for contrast -->
    <div class="absolute inset-0 z-10 bg-black/60"></div>

    <!-- Main Content Container -->
    <div class="relative z-20 flex flex-col min-h-screen">
      <!-- Navigation sits at the top -->
      <NavBar class="w-full" />

      <!-- Center content: Body and Footer -->
      <main class="flex-grow flex flex-col items-center justify-center px-6 py-10 text-white text-center">
        <div class="max-w-4xl w-full flex flex-col gap-8 md:gap-12 lg:gap-16">
          <BodyBar />
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
