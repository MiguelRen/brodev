<template>
  <div
    class="flex flex-col justify-around text-xl sm:text-2xl lg:text-3xl text-white gap-3 sm:gap-5 rounded-xl"
  >
    <Button @click="openLeadModal">Valorar mi Propiedad</Button>
    <Button>Nuestra estrategia de Ventas</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../Button.vue'
import { useUiManager } from '~/composables/useUiManager'

const { openLeadModal } = useUiManager()
</script>

<style scoped></style>
