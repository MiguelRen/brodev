<template>
  <div
    class="py-8 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-8 lg:gap-4 text-center text-white text-3xl sm:text-5xl font-bold w-full"
  >
    <a
      href="https://wa.me/584128371049?text=Hola, quisiera más información sobre el servicio."
      target="_blank"
      class="w-full bg-amber-600 hover:bg-green-700 py-6 sm:py-6 px-4 rounded-xl block"
    >
      Mensaje WhatsApp
    </a>

    <NuxtLink
      to="/formulario"
      class="cursor-pointer w-full bg-amber-600 hover:bg-violet-700 py-6 sm:py-6 px-4 rounded-xl block"
    >
      Valorar mi Propiedad
    </NuxtLink>
    <a 
      href="tel:+584128371049"
      class="w-full bg-amber-600 hover:bg-blue-700 py-6 sm:py-6 px-4 rounded-xl block"
    >
      Llama Ahora !!!
    </a>
    <nuxt-link
      to="/"
      class="cursor-pointer w-full bg-amber-600 hover:bg-violet-700 py-6 sm:py-6 px-4 rounded-xl block"
    >
      Plusbienes.com
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup></script>