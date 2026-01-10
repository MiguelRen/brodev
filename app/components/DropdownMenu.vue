<template>
  <div ref="dropdownContainer" class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-1 rounded hover:bg-gray-100 p-2 transition-colors duration-200"
    >
      <span>{{ title }}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1"
    >
      <nuxt-link
        v-for="link in links"
        :key="link.href"
        :to="link.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        @click="closeDropdown"
      >
        {{ link.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// --- Props para hacerlo reutilizable ---
defineProps({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: Array as () => Array<{ text: string; href: string }>, // Array de objetos link
    required: true,
  },
})

// --- Lógica de estado (Abierto/Cerrado) ---
const isOpen = ref(false)
const dropdownContainer = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// --- Lógica para cerrar al hacer clic fuera ---
const handleClickOutside = (event: MouseEvent) => {
  // Si el menú está abierto y el clic fue FUERA del contenedor del dropdown
  if (
    isOpen.value &&
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target as Node)
  ) {
    closeDropdown()
  }
}

// Añadimos y quitamos el listener de forma segura
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Aunque usamos Tailwind, puedes añadir estilos 'scoped' adicionales
  si necesitas algo muy específico que Tailwind no cubra fácilmente.
  En este caso, Tailwind es suficiente.
*/
</style>
