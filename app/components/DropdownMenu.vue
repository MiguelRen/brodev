<template>
  <div class="relative group" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <button
      class="flex items-center gap-1 px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      {{ title }}
      <svg
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-show="isOpen"
      class="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 transform origin-top transition-all duration-200"
      role="menu"
    >
      <div class="py-1">
        <template v-for="link in links" :key="link.href">
          <!-- Special case for Valorar mi Propiedad to open modal -->
          <button
            v-if="link.href === '/valorar-propiedad'"
            @click="handleAction(link.href)"
            class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            role="menuitem"
          >
            {{ link.text }}
          </button>
          <NuxtLink
            v-else
            :to="link.href"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            role="menuitem"
          >
            {{ link.text }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
const { openLeadModal } = useUiManager()

const handleAction = (href: string) => {
  if (href === '/valorar-propiedad') {
    openLeadModal()
    isOpen.value = false
  }
}
</script>
