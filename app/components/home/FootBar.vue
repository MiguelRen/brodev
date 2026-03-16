<template>
  <div
    class="flex flex-col justify-around text-xl sm:text-2xl lg:text-3xl text-white gap-3 sm:gap-5 rounded-xl w-full"
  >
    <Button @click="openLeadModal">Valorar mi Propiedad</Button>
    
    <!-- Strategy Button with Toggle (Mobile) and Hover (Desktop) -->
    <div class="relative group w-full flex flex-col items-center">
      <Button 
        class="w-full flex justify-center text-center"
        @click="toggleStrategy"
      >
        Nuestra Estrategia de Ventas
      </Button>
      
      <!-- Desktop: Hover Popup -->
      <div 
        class="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 pb-3 sm:pb-4 
               w-[calc(100vw-2rem)] sm:w-[85vw] md:max-w-2xl 
               opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
               transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-50"
      >
        <StrategySection />
        <!-- Tooltip Arrow -->
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00214f] rotate-45 border-r border-b border-amber-500/30"></div>
      </div>

      <!-- Mobile: Expandable Section -->
      <Transition name="expand">
        <div v-if="showStrategyMobile" class="sm:hidden w-full mt-4 origin-top">
          <StrategySection innerClass="p-4" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../Button.vue'
import StrategySection from './StrategySection.vue'
import { useUiManager } from '~/composables/useUiManager'

const { openLeadModal } = useUiManager()
const showStrategyMobile = ref(false)

const toggleStrategy = () => {
  showStrategyMobile.value = !showStrategyMobile.value
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  max-height: 1000px;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
