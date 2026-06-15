<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/useAuthStore'

const auth = useAuthStore()
const router = useRouter()
const isMobileMenuOpen = ref(false)

const handleLogout = async () => {
  await auth.logout()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-[#00214f] text-white flex">
    <!-- Sidebar / Menú Lateral (Desktop) -->
    <aside class="hidden md:flex flex-col w-64 bg-white/5 border-r border-white/10 backdrop-blur-xl transition-all duration-300">
      <!-- Logo o Título -->
      <div class="h-20 flex items-center justify-center border-b border-white/10">
        <h2 class="text-xl font-black tracking-widest uppercase">
          <span class="text-white">Plus</span><span class="text-amber-500">Bienes</span>
        </h2>
      </div>

      <!-- Links del Menú -->
      <nav class="flex-1 py-8 px-4 space-y-2">
        <NuxtLink 
          to="/admin" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-white/70 hover:text-white"
          active-class="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold"
          exact
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          Dashboard
        </NuxtLink>

        <NuxtLink 
          to="/admin/peticiones" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-white/70 hover:text-white"
          active-class="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          Peticiones
        </NuxtLink>
      </nav>

      <!-- Footer del Sidebar -->
      <div class="p-4 border-t border-white/10">
        <div class="flex items-center gap-3 px-4 py-3 mb-4">
          <div class="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-[#00214f] font-black">
            {{ auth.user?.profile?.fullName?.charAt(0) || 'A' }}
          </div>
          <div class="flex-1 overflow-hidden">
            <p class="text-sm font-bold truncate">{{ auth.user?.profile?.fullName || 'Administrador' }}</p>
            <p class="text-xs text-white/50 truncate">{{ auth.user?.email }}</p>
          </div>
        </div>
        
        <button 
          @click="handleLogout" 
          class="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-xl transition-colors font-bold text-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Cerrar Sesión
        </button>
      </div>
    </aside>

    <!-- Mobile Header & Overlay -->
    <div class="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#00214f]/95 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-4">
      <h2 class="text-lg font-black tracking-widest uppercase">
        <span class="text-white">Plus</span><span class="text-amber-500">Bienes</span>
      </h2>
      <button @click="toggleMobileMenu" class="text-white/70 hover:text-white p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" @click="toggleMobileMenu"></div>
    </Transition>

    <Transition name="slide">
      <aside v-if="isMobileMenuOpen" class="md:hidden fixed inset-y-0 left-0 w-64 bg-[#00214f] border-r border-white/10 z-50 flex flex-col">
        <div class="h-16 flex items-center justify-between px-4 border-b border-white/10">
          <h2 class="text-lg font-black tracking-widest uppercase">
            <span class="text-white">Menú</span>
          </h2>
          <button @click="toggleMobileMenu" class="text-white/70 hover:text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav class="flex-1 py-8 px-4 space-y-2">
          <NuxtLink to="/admin" @click="toggleMobileMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-white/70 hover:bg-white/10" active-class="bg-amber-500/10 text-amber-500">Dashboard</NuxtLink>
          <NuxtLink to="/admin/peticiones" @click="toggleMobileMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-white/70 hover:bg-white/10" active-class="bg-amber-500/10 text-amber-500">Peticiones</NuxtLink>
        </nav>
        <div class="p-4 border-t border-white/10">
          <button @click="handleLogout" class="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-xl transition-colors font-bold text-sm">
            Cerrar Sesión
          </button>
        </div>
      </aside>
    </Transition>

    <!-- Contenido Principal -->
    <main class="flex-1 flex flex-col min-h-screen overflow-hidden pt-16 md:pt-0">
      <div class="flex-1 overflow-y-auto p-4 md:p-10">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>
