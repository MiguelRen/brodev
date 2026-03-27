<template>
  <div class="relative group" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <button
      class="flex items-center gap-1.5 px-4 py-2 text-white hover:text-amber-500 transition-colors duration-300 font-bold uppercase tracking-wider text-sm sm:text-base"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      {{ title }}
      <svg
        class="w-4 h-4 transition-transform duration-300 text-amber-500"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Panel -->
    <div
      v-show="isOpen"
      class="absolute left-0 mt-0 w-64 bg-[#00214f]/95 backdrop-blur-md rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/10 z-50 transform origin-top transition-all duration-300 overflow-hidden"
      role="menu"
    >
        <template v-for="link in links" :key="link.href + link.text">
          <!-- Special cases: Modal triggers or Coming Soon -->
          <button
            v-if="link.href === '/valorar-propiedad' || link.href === '/valorar-mi-propiedad' || link.text === 'Llamada' || link.href === '#'"
            @click="handleAction(link)"
            class="block w-full text-left px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 hover:text-[#00214f] transition-all duration-200"
            role="menuitem"
          >
            {{ link.text }}
          </button>
          <NuxtLink
            v-else
            :to="link.href"
            class="block px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 hover:text-[#00214f] transition-all duration-200"
            role="menuitem"
          >
            {{ link.text }}
          </NuxtLink>
        </template>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUiManager } from '~/composables/useUiManager'

interface Link {
  text: string;
  href: string;
}

defineProps<{
  title: string;
  links: Link[];
}>();

const isOpen = ref(false);
const { openLeadModal, openPhoneModal, showComingSoon } = useUiManager()

const handleAction = (link: Link) => {
  if (link.href === '#') {
    showComingSoon()
  } else if (link.href === '/valorar-propiedad' || link.href === '/valorar-mi-propiedad') {
    openLeadModal()
  } else if (link.text === 'Llamada') {
    if (window.innerWidth >= 640) {
      openPhoneModal()
    } else {
      window.location.href = link.href
    }
  }
  isOpen.value = false
}
</script>
