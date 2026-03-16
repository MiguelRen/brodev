<template>
  <Transition name="fade">
    <div
      v-if="isPhoneModalOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      @click.self="closePhoneModal"
    >
      <div
        class="relative w-full max-w-md bg-[#00214f] rounded-[2rem] shadow-2xl p-8 border border-amber-500/30 text-center animate-in fade-in zoom-in duration-300"
      >
        <!-- Close button -->
        <button
          @click="closePhoneModal"
          class="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="space-y-6">
          <div class="flex justify-center">
            <div class="p-4 bg-amber-500 rounded-full">
              <svg class="w-8 h-8 text-[#00214f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>

          <div>
            <h3 class="text-amber-500 font-black text-xl uppercase tracking-widest mb-2">Nuestro Teléfono</h3>
            <p class="text-white text-3xl font-black tabular-nums">+598 9742 4590</p>
          </div>

          <p class="text-gray-400 text-sm italic">
            Estamos disponibles para atenderte y acompañarte en cada fase de tu proceso inmobiliario.
          </p>

          <a
            href="tel:+59897424590"
            class="sm:hidden block w-full bg-amber-500 hover:bg-amber-600 text-[#00214f] font-black py-4 rounded-xl transition-all shadow-lg"
          >
            LLAMAR AHORA
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useUiManager } from '~/composables/useUiManager'
const { isPhoneModalOpen, closePhoneModal } = useUiManager()
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
