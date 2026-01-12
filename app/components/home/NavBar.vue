<template>
  <navbar>
    <div class="navbar-container flex">
      <div class="title-styles">
        <img
          src="../../assets/images/plus_logo_no_background.png"
          width="10"
          height="10"
          class="w-20 h-20"
        />
      </div>
      <div class="links-navbar-styles">
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
          class="text-white focus:outline-none lg:hidden"
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
        <div v-show="showMobile" class="fixed inset-0 z-40">
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            @click="toggleMenu"
          ></div>

          <!-- Slide-in panel -->
          <div
            class="absolute inset-y-0 right-0 z-50 w-3/4 max-w-xs transform transition-transform duration-300"
            :class="showMobile ? 'translate-x-0' : 'translate-x-full'"
            aria-hidden="false"
          >
            <div
              class="h-full bg-black/90 text-white rounded-l-2xl p-4 flex flex-col overflow-auto"
            >
              <!-- Header with close button -->
              <div class="flex items-center justify-between mb-4">
                <div class="text-lg font-semibold">Menú</div>
                <button @click="toggleMenu" class="text-white p-2">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Sections as overlay 'cards' -->
              <div class="space-y-3">
                <div class="bg-white/6 rounded-md p-3">
                  <div class="font-semibold mb-2">Vender</div>
                  <ul class="space-y-1">
                    <li v-for="link in serviciosVenderLinks" :key="link.href">
                      <nuxt-link
                        @click="toggleMenu"
                        :to="link.href"
                        class="block py-2"
                        >{{ link.text }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>

                <div class="bg-white/6 rounded-md p-3">
                  <div class="font-semibold mb-2">Comprar</div>
                  <ul class="space-y-1">
                    <li v-for="link in serviciosComprarLinks" :key="link.href">
                      <nuxt-link
                        @click="toggleMenu"
                        :to="link.href"
                        class="block py-2"
                        >{{ link.text }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>

                <div class="bg-white/6 rounded-md p-3">
                  <div class="font-semibold mb-2">Alquilar</div>
                  <ul class="space-y-1">
                    <li v-for="link in serviciosAlquilarLinks" :key="link.href">
                      <nuxt-link
                        @click="toggleMenu"
                        :to="link.href"
                        class="block py-2"
                        >{{ link.text }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>

                <div class="bg-white/6 rounded-md p-3">
                  <div class="font-semibold mb-2">Nuestra Empresa</div>
                  <ul class="space-y-1">
                    <li v-for="link in serviciosEmpresaLinks" :key="link.href">
                      <nuxt-link
                        @click="toggleMenu"
                        :to="link.href"
                        class="block py-2"
                        >{{ link.text }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>

                <div class="bg-white/6 rounded-md p-3">
                  <div class="font-semibold mb-2">Contacto</div>
                  <ul class="space-y-1">
                    <li v-for="link in serviciosContactoLinks" :key="link.href">
                      <nuxt-link
                        @click="toggleMenu"
                        :to="link.href"
                        class="block py-2"
                        >{{ link.text }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script lang="ts" setup>
const serviciosVenderLinks = [
  { text: 'Propuesta de Valor', href: '/propuesta-valor-vender' },
  { text: 'Guia del Vendedor', href: '/guia-vendedor' },
  { text: 'Valorar mi Propiedad', href: '/valorar-propiedad' },
]

const serviciosComprarLinks = [
  { text: 'Propuesta de Valor', href: '/propuesta-valor-comprar' },
  { text: 'Guia del Comprador', href: '/guia-comprador' },
  { text: 'Contáctame', href: '/contactame-comprar' },
]

const serviciosAlquilarLinks = [
  { text: 'Propuesta de Valor', href: '/propuesta-valor-alquilar' },
  { text: 'Guia del propietario', href: '/guia-propietario' },
  { text: 'Contáctame', href: '/contactame-alquilar' },
]

const serviciosEmpresaLinks = [
  { text: 'Quienes Somos', href: '/OurcompanyMenu' },
  { text: 'Equipo', href: '/equipo' },
  { text: 'Blogs', href: '/blog' },
  { text: 'Testimonios', href: '/testimonios' },
]
const serviciosContactoLinks = [
  { text: 'WhatsApp', href: '/whatsapp' },
  { text: 'Teléfono', href: '/telefono' },
]

import { ref } from 'vue'
const showMobile = ref(false)
function toggleMenu() {
  showMobile.value = !showMobile.value
}

defineOptions({
  name: 'NavBar',
})
</script>

<style scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
}
.title-styles {
  display: flex;
  align-items: center;
}
.title-styles img {
  height: 10%;
  width: auto;
}
.links-navbar-styles {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
