<template>
  <div
    class="py-8 px-6 sm:px-10 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-5 sm:gap-8 lg:gap-4 text-center text-[#00214f] text-2xl sm:text-5xl font-bold w-full"
  >
    <a
      href="https://wa.me/59897424590?text=¡Hola!, quisiera más información sobre el servicio de bienes raíces de Plusbienes."
      target="_blank"
      class="w-full bg-amber-500 hover:bg-amber-600 text-[#00214f] py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block font-black uppercase tracking-tight"
    >
      Mensaje WhatsApp
    </a>

    <NuxtLink
      to="/formulario?from=bio"
      class="cursor-pointer w-full bg-amber-500 hover:bg-amber-600 text-[#00214f] py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block font-black uppercase tracking-tight"
    >
      Valorar mi Propiedad
    </NuxtLink>

    <a
      href="tel:+59897424590"
      class="w-full bg-amber-500 hover:bg-amber-600 text-[#00214f] py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block font-black uppercase tracking-tight"
    >
      Llama Ahora !!!
    </a>

    <nuxt-link
      to="/"
      class="cursor-pointer w-full bg-[#00214f] hover:bg-[#001a3d] text-white py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block font-black uppercase tracking-tight border border-amber-500/30"
    >
      Plusbienes.com
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import StrategySection from '../home/StrategySection.vue'
</script>
