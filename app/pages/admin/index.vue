<script lang="ts" setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
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

    <!-- Tarjetas de Resumen (Placeholder) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm transition-transform hover:-translate-y-1">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          </div>
        </div>
        <p class="text-white/50 text-sm font-bold uppercase tracking-widest mb-1">Leads Totales</p>
        <h3 class="text-3xl font-black text-white">Ir a Leads</h3>
        <div class="mt-4">
          <NuxtLink to="/admin/leads" class="text-amber-500 hover:text-amber-400 text-sm font-bold flex items-center gap-1 transition-colors">
            Ver todos los leads
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Otras tarjetas... -->
    </div>
  </div>
</template>
