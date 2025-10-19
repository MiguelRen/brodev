<template>
  <component
    :is="isLink ? 'NuxtLink' : 'button'"
    :to="isLink ? to : undefined"
    :type="!isLink ? type : undefined"
    :class="[
      'inline-flex items-center justify-center',
      'px-6 py-3 rounded-full', /* Forma redondeada y padding */
      'font-semibold text-white text-lg', /* Texto blanco y tamaño */
      'bg-gradient-to-r from-violet-500 to-green-600', /* Gradiente de verde */
      'shadow-lg', /* Sombra ligera */
      'hover:from-green-600 hover:to-green-700', /* Efecto hover */
      'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50', /* Foco accesible */
      'transition ease-in-out duration-300', /* Transiciones suaves */
      'cursor-pointer' /* Asegura que se vea como clickeable */
    ]"
  >
    <slot>{{ text }}</slot> </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  // Texto por defecto del botón si no se usa un slot
  text: {
    type: String,
    default: 'Button'
  },
  // Tipo de botón (para <button> nativo)
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  // Si el botón debe actuar como un enlace de NuxtLink
  isLink: {
    type: Boolean,
    default: false
  },
  // La ruta a la que navegar si isLink es true
  to: {
    type: String,
    default: '#'
  }
})

// `computed` para decidir qué elemento HTML usar (button o NuxtLink)
// La lógica principal para `is` se ha movido directamente al template con <component :is="..." />
</script>

<style scoped>
/* No se necesita CSS scoped adicional si Tailwind cubre todo */
</style>