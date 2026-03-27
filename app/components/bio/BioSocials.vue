<template>
  <div class="mt-6 sm:mt-10 lg:mt-7 text-2xl justify-center w-full flex flex-col items-center">
    <h4 class="font-semibold text-center sm:text-4xl w-full text-white">
      Cuentas Oficiales
    </h4>

    <div class="flex justify-center gap-8 sm:gap-20 w-full">
      <a href="https://www.facebook.com/profile.php?id=61578385348289&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="cursor-pointer transition-transform flex hover:scale-110 active:scale-95">
        <nuxt-img
          src="/images/brand-facebook.svg"
          alt="facebook-brand"
          class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
        />
      </a>
      <a href="https://www.instagram.com/lrengel.plusbienes?igsh=dXY1aGo4bjFmcTB5&utm_source=qr" target="_blank" rel="noopener noreferrer" class="cursor-pointer transition-transform flex hover:scale-110 active:scale-95">
        <nuxt-img
          src="/images/brand-instagram.svg"
          alt="instagram-brand"
          class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
        />
      </a>
      <button @click="showComingSoon" class="cursor-pointer transition-transform hover:scale-110 active:scale-95">
        <nuxt-img
          src="/images/brand-tiktok.svg"
          alt="tiktok-brand"
          class="mt-4 size-15 sm:size-22 filter brightness-0 invert"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUiManager } from '~/composables/useUiManager'
const { showComingSoon } = useUiManager()
</script>
