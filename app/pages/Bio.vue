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
</script>

<style scoped>
.back-image {
  background-image: url('~/assets/images/xp-background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 56vh;
}
</style>
