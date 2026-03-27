<template>
  <Transition name="mega-toast">
    <div
      v-if="isComingSoonOpen"
      class="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none p-4"
    >
      <!-- Background dimming for focus -->
      <div class="absolute inset-0 bg-[#00214f]/20 backdrop-blur-sm"></div>

      <!-- Content -->
      <div
        class="relative bg-[#00214f] border-4 border-amber-500 text-white px-10 py-8 rounded-[3rem] shadow-[0_0_50px_rgba(245,158,11,0.4)] flex flex-col items-center gap-4 text-center max-w-sm w-full"
      >
        <div class="bg-amber-500 p-4 rounded-full shadow-lg animate-bounce">
          <svg class="w-12 h-12 text-[#00214f]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
        
        <div>
          <h3 class="text-3xl font-black uppercase tracking-tighter text-amber-500 italic mb-1">
            Próximamente
          </h3>
          <p class="text-gray-300 font-bold uppercase tracking-widest text-xs">
            Estamos trabajando en esta sección
          </p>
        </div>

        <!-- Decorative pulse line -->
        <div class="w-24 h-1 bg-amber-500/30 rounded-full overflow-hidden">
          <div class="w-full h-full bg-amber-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useUiManager } from '~/composables/useUiManager'
const { isComingSoonOpen } = useUiManager()
</script>

<style scoped>
.mega-toast-enter-active, .mega-toast-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.mega-toast-enter-from {
  opacity: 0;
  transform: scale(0.5) translateY(50px);
}
.mega-toast-leave-to {
  opacity: 0;
  transform: scale(0.9) opacity(0);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
