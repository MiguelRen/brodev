<template>
  <div :class="['w-full', customClass]">
    <div :class="['relative bg-[#00214f] p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/30 overflow-hidden', innerClass]">
      
      <!-- Subtle Background Decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl -ml-16 -mb-16 rounded-full"></div>
      </div>

      <div class="relative z-10">
        <h3 class="text-white font-black text-base sm:text-xl mb-4 sm:mb-6 tracking-tight text-center">
          Toda tu cartera de propiedades con:
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div v-for="(item, index) in strategyItems" :key="index" 
               class="flex items-center justify-between bg-white px-5 sm:px-6 py-4 sm:py-3 rounded-full shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-transparent hover:border-amber-500/50">
            <div class="flex items-center gap-3 sm:gap-4 overflow-hidden">
              <div class="text-amber-500 flex-shrink-0">
                <!-- Using raw SVG with direct control over size -->
                <svg 
                  class="w-7 h-7 sm:w-8 sm:h-8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2"
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <path :d="item.path" />
                </svg>
              </div>
              <span class="text-[#00214f] font-black text-sm sm:text-base leading-none truncate">{{ item.title }}</span>
            </div>
            
            <!-- Checkmark -->
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-inner ml-3">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#00214f]" fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-8 sm:mt-8 pt-4 sm:pt-4 border-t border-white/10 flex items-center justify-center gap-3">
          <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <p class="text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">
            Marketing Inmobiliario de Alto Impacto
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  customClass: { type: String, default: '' },
  innerClass: { type: String, default: '' }
})

const strategyItems = [
  { 
    title: 'Fotografías pro', 
    path: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' 
  },
  { 
    title: 'Video', 
    path: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' 
  },
  { 
    title: 'Plano', 
    path: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' 
  },
  { 
    title: 'Amoblamiento virtual', 
    path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' 
  },
  { 
    title: 'Tour 360°', 
    path: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' 
  },
  { 
    title: 'Máxima exposición', 
    path: 'M13 10V3L4 14h7v7l9-11h-7z' 
  },
]
</script>