<template>
  <component
    :is="isLink ? 'NuxtLink' : 'button'"
    :to="isLink ? to : undefined"
    :type="!isLink ? type : undefined"
    :class="[
      'inline-flex items-center justify-center',
      'px-8 py-5 sm:mx-7 rounded-2xl' /* Forma redondeada y padding */,
      'font-black text-amber-500 uppercase tracking-widest transition-all duration-300 transform hover:scale-105 hover:bg-amber-500 hover:text-[#00214f]' /* Texto y hover */,
      'bg-[#00214f]/90 border-2 border-amber-500 shadow-[0_0_20px_rgba(0,33,79,0.5)]',
      'cursor-pointer text-xl sm:text-4xl lg:text-5xl ' /* Asegura que se vea como clickeable */,
    ]"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  // Texto por defecto del botón si no se usa un slot
  text: {
    type: String,
    default: 'Button',
  },
  // Tipo de botón (para <button> nativo)
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  // Si el botón debe actuar como un enlace de NuxtLink
  isLink: {
    type: Boolean,
    default: false,
  },
  // La ruta a la que navegar si isLink es true
  to: {
    type: String,
    default: '#',
  },
})

// `computed` para decidir qué elemento HTML usar (button o NuxtLink)
// La lógica principal para `is` se ha movido directamente al template con <component :is="..." />
</script>

<style scoped>
/* No se necesita CSS scoped adicional si Tailwind cubre todo */
</style>
