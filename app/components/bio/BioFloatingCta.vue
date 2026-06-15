<template>
  <Transition name="fade-in">
    <div
      v-if="isVisible"
      class="fixed z-40 right-6 bottom-6 md:right-8 md:bottom-8 pointer-events-auto"
    >
      <!-- Single Condensed Floating Pill -->
      <button
        type="button"
        class="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#00214f] border-2 border-amber-500 shadow-[0_10px_25px_rgba(0,33,79,0.5)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.35)] text-amber-500 hover:bg-amber-500 hover:text-[#00214f] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group select-none"
        @click="handleClick"
        title="Valorar mi propiedad"
      >
        <!-- Pulsing outer light ring from the initial design -->
        <span class="absolute inset-0 rounded-full border-2 border-amber-500/50 bg-amber-500/10 animate-ping opacity-75 group-hover:hidden pointer-events-none"></span>

        <!-- House & Graph Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-4 h-4 transition-transform group-hover:scale-110"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v14.25M9 16.5V12m3 4.5V9m3 7.5V13.5M6 16.5V15m12 .75V6.75m0 0L21 12m-3-5.25L15 12" />
        </svg>

        <!-- CTA Text -->
        <span class="text-[10px] font-black uppercase tracking-widest">
          Valorar Propiedad
        </span>

        <!-- Small notification green/pulse indicator -->
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUiManager } from '~/composables/useUiManager'

const { openLeadModal } = useUiManager()

const isVisible = ref(false)

onMounted(() => {
  // Fade in the CTA after 600ms
  setTimeout(() => {
    isVisible.value = true
  }, 600)
})

const handleClick = () => {
  openLeadModal()
}
</script>

<style scoped>
/* Entry Animation */
.fade-in-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-in-enter-from {
  transform: scale(0.9) translateY(15px);
  opacity: 0;
}
</style>
