<template>
  <div class="w-screen min-h-screen flex flex-col">
    <!-- A part begin -->
    <div
      class="back-image w-full flex items-center justify-center py-12 sm:py-20 lg:py-28 relative"
    >
      <div class="absolute inset-0 bg-[#00214f]/90"></div>

      <div class="w-full text-white relative">
        <div class="relative z-10 flex flex-col items-center">
          <BioProfile />
          <BioSocials />
          <BioVideo />

          <!-- Strategy Section: Desktop hover and Mobile shown directly -->
          <div class="w-full max-w-sm group relative my-8">
            <button
              class="hidden sm:block cursor-pointer w-full bg-amber-600 hover:bg-indigo-700 py-4 px-4 rounded-2xl shadow-lg transition-all duration-300 text-xl font-bold"
            >
              Nuestra Estrategia de Ventas
            </button>
            
            <!-- Desktop Popup -->
            <div 
              class="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 pb-4 
                     w-[85vw] max-w-2xl 
                     opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                     transition-all duration-300 ease-out z-50"
            >
              <StrategySection innerClass="p-8 text-left" />
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00214f] rotate-45 border-r border-b border-amber-500/30"></div>
            </div>

            <!-- Mobile: Shown directly -->
            <div class="sm:hidden w-full px-4">
              <StrategySection innerClass="p-5 text-left" />
            </div>
          </div>

          <BioEducation />
        </div>
      </div>
    </div>
    <!-- A part end -->

    <!-- B part begin -->
    <BioActions />
    <!-- B part end -->
  </div>
</template>

<script lang="ts" setup>
import BioProfile from '~/components/bio/BioProfile.vue';
import BioSocials from '~/components/bio/BioSocials.vue';
import BioVideo from '~/components/bio/BioVideo.vue';
import BioEducation from '~/components/bio/BioEducation.vue';
import BioActions from '~/components/bio/BioActions.vue';
import StrategySection from '~/components/home/StrategySection.vue';
</script>

<style scoped>
.back-image {
  background-image: url('~/assets/images/xp-background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 56vh;
}
</style>
