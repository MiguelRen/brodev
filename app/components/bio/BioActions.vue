<template>
  <div
    class="py-12 px-6 sm:px-10 flex flex-col items-center justify-center lg:w-3/5 mx-auto gap-6 sm:gap-10 text-center w-full"
  >
    <Button
      is-link
      to="https://wa.me/59897424590?text=¡Hola!, quisiera más información sobre el servicio de bienes raíces de Plusbienes."
      class="w-full"
    >
      Mensaje WhatsApp
    </Button>

    <Button
      class="w-full"
      @click="openLeadModal"
    >
      Valorar mi Propiedad
    </Button>

    <Button
      is-link
      to="tel:+59897424590"
      class="w-full"
    >
      Llama Ahora !!!
    </Button>

    <Button
      is-link
      to="/"
      class="w-full !bg-[#00214f] !text-white border-amber-500/30"
    >
      Plusbienes.com
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../Button.vue'
import { useUiManager } from '~/composables/useUiManager'

const { openLeadModal } = useUiManager()
</script>
