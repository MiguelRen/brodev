<template>
  <div
    class="flex flex-col justify-around text-3xl text-white mt-8 md:mt-16 lg:mt-24 gap-6 md:gap-8 rounded-xl py-5"
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
