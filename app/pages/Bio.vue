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
          <div class="w-full max-w-sm sm:max-w-md lg:max-w-lg group relative my-12 px-4">
            <button
              class="hidden sm:flex items-center justify-center cursor-pointer w-full bg-[#00214f]/90 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-[#00214f] py-5 px-6 rounded-2xl shadow-xl transition-all duration-300 text-xl md:text-2xl font-black uppercase tracking-widest active:scale-95"
            >
              Nuestra Estrategia de Ventas
            </button>
            
            <!-- Desktop Popup -->
            <div 
              class="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 pb-6 
                     w-[90vw] max-w-3xl 
                     opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                     transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-50"
            >
              <StrategySection innerClass="p-8 text-left shadow-2xl" />
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00214f] rotate-45 border-r border-b border-amber-500/30"></div>
            </div>

            <!-- Mobile: Shown directly with better spacing -->
            <div class="sm:hidden w-full">
              <div class="text-amber-500 text-center font-black uppercase tracking-[0.2em] text-xs mb-4">Nuestra Estrategia</div>
              <StrategySection innerClass="p-6 text-left" />
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
    <LeadForm mode="modal" />
    <ComingSoonToast />
  </div>
</template>

<script lang="ts" setup>
import BioProfile from '~/components/bio/BioProfile.vue';
import BioSocials from '~/components/bio/BioSocials.vue';
import BioVideo from '~/components/bio/BioVideo.vue';
import BioEducation from '~/components/bio/BioEducation.vue';
import BioActions from '~/components/bio/BioActions.vue';
import StrategySection from '~/components/home/StrategySection.vue';
import LeadForm from '~/components/LeadForm.vue';
import ComingSoonToast from '~/components/ComingSoonToast.vue';
</script>

<style scoped>
.back-image {
  background-image: url('~/assets/images/xp-background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 56vh;
}
</style>
