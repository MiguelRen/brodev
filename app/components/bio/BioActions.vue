<template>
  <div
    class="py-8 px-6 sm:px-10 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-5 sm:gap-8 lg:gap-4 text-center text-white text-2xl sm:text-5xl font-bold w-full"
  >
    <a
      href="https://wa.me/59897424590?text=Hola, quisiera más información sobre el servicio."
      target="_blank"
      class="w-full bg-amber-600 hover:bg-green-700 py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block"
    >
      Mensaje WhatsApp
    </a>

    <NuxtLink
      to="/formulario"
      class="cursor-pointer w-full bg-amber-600 hover:bg-violet-700 py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block"
    >
      Valorar mi Propiedad
    </NuxtLink>
    <a
      href="tel:+584128371049"
      class="w-full bg-amber-600 hover:bg-blue-700 py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block"
    >
      Llama Ahora !!!
    </a>
    <nuxt-link
      to="/"
      class="cursor-pointer w-full bg-amber-600 hover:bg-violet-700 py-5 sm:py-6 px-4 rounded-2xl shadow-lg transition-all duration-300 block"
    >
      Plusbienes.com
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup></script>
