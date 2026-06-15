<script lang="ts" setup>
import { useLeadManager } from '~/composables/useLeadManager'

definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const { stats, loading, fetchStats } = useLeadManager()

onMounted(() => {
  fetchStats()
})
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-4xl font-black text-white tracking-tight">
          Bienvenido al <span class="text-amber-500">Panel</span>
        </h1>
        <p class="text-white/60 mt-2 text-lg">Resumen general de la plataforma PlusBienes.</p>
      </div>
    </div>

    <!-- Tarjetas de Resumen -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 relative overflow-hidden group">
        <!-- Decoration -->
        <div class="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors"></div>
        
        <div class="flex items-center justify-between mb-4 relative z-10">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/20">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          </div>
        </div>
        
        <p class="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">Peticiones de Contacto</p>
        
        <div v-if="loading" class="h-10 w-24 bg-white/5 animate-pulse rounded-lg mb-1"></div>
        <h3 v-else class="text-4xl font-black text-white mb-1 relative z-10">
          {{ stats.leadCount }}
        </h3>
        
        <p v-if="!loading && stats.leadCount === 0" class="text-white/30 text-xs mb-4">No hay nuevos leads hoy.</p>
        <p v-else-if="!loading" class="text-amber-500/60 text-xs mb-4 font-bold italic">¡Tienes trabajo pendiente!</p>

        <div class="mt-2 relative z-10">
          <NuxtLink to="/admin/peticiones" class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs font-black transition-all group/btn">
            Gestionar Peticiones
            <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Otras tarjetas... -->
    </div>
  </div>
</template>
