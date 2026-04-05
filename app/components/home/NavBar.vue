<script lang="ts" setup>
import { ref } from 'vue'
import { useUiManager } from '~/composables/useUiManager'
import PhoneModal from '../PhoneModal.vue'
import ComingSoonToast from '../ComingSoonToast.vue'
import DropdownMenu from '../DropdownMenu.vue'

// 1. Link Definitions (Move to top for better scope visibility)
const serviciosVenderLinks = [
  // { text: 'Propuesta de Valor', href: '#' },
  { text: 'Guía del Vendedor', href: '/guia-vendedor' },
  { text: 'Valorar mi Propiedad', href: '/valorar-propiedad' },
]

const serviciosComprarLinks = [
  // { text: 'Propuesta de Valor', href: '#' },
  { text: 'Guia del Comprador', href: '/guia-comprador' },
  { text: 'Contáctame', href: '#' },
]

const serviciosAlquilarLinks = [
  // { text: 'Propuesta de Valor', href: '#' },
  { text: 'Guia del propietario', href: '/guia-propietario' },
  { text: 'Contáctame', href: '#' },
]

const serviciosEmpresaLinks = [
  { text: 'Quienes Somos', href: '/OurcompanyMenu' },
  { text: 'Equipo', href: '#' },
  { text: 'Blogs', href: '#' },
  { text: 'Testimonios', href: '#' },
]

const serviciosContactoLinks = [
  {
    text: 'WhatsApp',
    href: 'https://wa.me/59897424590?text=Hola, quisiera más información sobre el servicio de Bienes Raíces de Plusbienes.',
  },
  { text: 'Llamada', href: 'tel:+59897424590' },
]

// 2. State & Composables
const { openLeadModal, openPhoneModal, showComingSoon } = useUiManager()
const showMobile = ref(false)

// 3. Methods
const toggleMenu = () => {
  showMobile.value = !showMobile.value
}

const handleInternalAction = (link: any) => {
  if (link.href === '#') {
    showComingSoon()
    showMobile.value = false
  } else if (
    link.href === '/valorar-propiedad' ||
    link.href === '/valorar-mi-propiedad'
  ) {
    openLeadModal()
    showMobile.value = false
  } else if (link.text === 'Llamada') {
    openPhoneModal()
    showMobile.value = false
  }
}

defineOptions({
  name: 'NavBar',
})
</script>
<template>
  <nav>
    <div
      class="navbar-container flex items-center justify-between w-full px-4 sm:px-8"
    >
      <div class="title-styles flex-shrink-0">
        <NuxtLink to="/">
          <nuxt-img
            src="/images/plus_logo_no_background.png"
            width="320"
            height="320"
            format="webp"
            class="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
          />
        </NuxtLink>
      </div>
      <div class="links-navbar-styles flex-grow flex justify-end">
        <!-- Desktop links: hidden on small, shown on lg+ -->
        <div class="hidden lg:flex gap-6 items-center">
          <DropdownMenu title="Vender" :links="serviciosVenderLinks" />
          <DropdownMenu title="Comprar" :links="serviciosComprarLinks" />
          <DropdownMenu title="Alquilar" :links="serviciosAlquilarLinks" />
          <DropdownMenu
            title="Nuestra Empresa"
            :links="serviciosEmpresaLinks"
          />
          <DropdownMenu title="Contacto" :links="serviciosContactoLinks" />
        </div>

        <!-- Hamburger: visible on small, hidden on lg -->
        <button
          @click="toggleMenu"
          class="text-white focus:outline-none lg:hidden ml-auto p-2"
        >
          <svg
            class="w-11 h-11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile overlay menu: backdrop + slide-in panel -->
      <div class="lg:hidden">
        <div v-show="showMobile" class="fixed inset-0 z-[60]">
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            @click="toggleMenu"
          ></div>

          <!-- Slide-in panel -->
          <div
            class="absolute inset-y-0 right-0 z-50 w-4/5 max-w-sm transform transition-transform duration-300"
            :class="showMobile ? 'translate-x-0' : 'translate-x-full'"
            aria-hidden="false"
          >
            <div
              class="h-full bg-[#00214f]/95 backdrop-blur-xl text-white rounded-l-[2.5rem] p-6 flex flex-col overflow-auto border-l border-white/10 shadow-2xl"
            >
              <!-- Header with close button -->
              <div
                class="flex items-center justify-between mb-8 pb-4 border-b border-white/10"
              >
                <div
                  class="text-xl font-black uppercase tracking-widest text-amber-500"
                >
                  Menú
                </div>
                <button
                  @click="toggleMenu"
                  class="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Sections as overlay 'cards' -->
              <div class="space-y-6">
                <!-- Vender Section -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-black uppercase tracking-[0.2em] text-amber-500/60 ml-2"
                  >
                    Vender
                  </div>
                  <ul class="space-y-1">
                    <li
                      v-for="link in serviciosVenderLinks"
                      :key="link.href + link.text"
                    >
                      <button
                        v-if="
                          link.href === '/valorar-propiedad' ||
                          link.href === '/valorar-mi-propiedad' ||
                          link.href === '#'
                        "
                        @click="handleInternalAction(link)"
                        class="block w-full text-left px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                      >
                        {{ link.text }}
                      </button>
                      <NuxtLink
                        v-else
                        @click="toggleMenu"
                        :to="link.href"
                        class="block px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                        >{{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Comprar Section -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-black uppercase tracking-[0.2em] text-amber-500/60 ml-2"
                  >
                    Comprar
                  </div>
                  <ul class="space-y-1">
                    <li
                      v-for="link in serviciosComprarLinks"
                      :key="link.href + link.text"
                    >
                      <button
                        v-if="link.href === '#'"
                        @click="handleInternalAction(link)"
                        class="block w-full text-left px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                      >
                        {{ link.text }}
                      </button>
                      <NuxtLink
                        v-else
                        @click="toggleMenu"
                        :to="link.href"
                        class="block px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                        >{{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Alquilar Section -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-black uppercase tracking-[0.2em] text-amber-500/60 ml-2"
                  >
                    Alquilar
                  </div>
                  <ul class="space-y-1">
                    <li
                      v-for="link in serviciosAlquilarLinks"
                      :key="link.href + link.text"
                    >
                      <button
                        v-if="link.href === '#'"
                        @click="handleInternalAction(link)"
                        class="block w-full text-left px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                      >
                        {{ link.text }}
                      </button>
                      <NuxtLink
                        v-else
                        @click="toggleMenu"
                        :to="link.href"
                        class="block px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                        >{{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Nuestra Empresa Section -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-black uppercase tracking-[0.2em] text-amber-500/60 ml-2"
                  >
                    Empresa
                  </div>
                  <ul class="space-y-1">
                    <li
                      v-for="link in serviciosEmpresaLinks"
                      :key="link.href + link.text"
                    >
                      <button
                        v-if="link.href === '#'"
                        @click="handleInternalAction(link)"
                        class="block w-full text-left px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                      >
                        {{ link.text }}
                      </button>
                      <NuxtLink
                        v-else
                        @click="toggleMenu"
                        :to="link.href"
                        class="block px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                        >{{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>

                <!-- Contacto Section -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-black uppercase tracking-[0.2em] text-amber-500/60 ml-2"
                  >
                    Contacto
                  </div>
                  <ul class="space-y-1">
                    <li
                      v-for="link in serviciosContactoLinks"
                      :key="link.href + link.text"
                    >
                      <button
                        v-if="link.text === 'Llamada'"
                        @click="handleInternalAction(link)"
                        class="block w-full text-left px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                      >
                        {{ link.text }}
                      </button>
                      <NuxtLink
                        v-else
                        @click="toggleMenu"
                        :to="link.href"
                        class="block px-4 py-3 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-[#00214f] transition-all"
                        >{{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Footer logo -->
              <div class="mt-auto pt-8 flex justify-center opacity-30">
                <img
                  src="~/assets/images/plus_logo_no_background.png"
                  class="w-24 grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <PhoneModal />
    <ComingSoonToast />
  </nav>
</template>

<style scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;
  min-height: 60px;
}
.title-styles {
  display: flex;
  align-items: center;
}
.links-navbar-styles {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
