<template>
  <div class="w-screen h-screen">
    <NavBar></NavBar>
    <BodyBar></BodyBar>
    <FootBar></FootBar>
  </div>
</template>

<script lang="ts" setup>
import NavBar from './home/NavBar.vue'
import BodyBar from './home/BodyBar.vue'
import FootBar from './home/FootBar.vue'

useHead({
  title: 'Plusbienes, Servicio y Acompañamiento en cada fase del proyecto',
  meta: [
    {
      name: 'description',
      content: 'Plusbienes, Empresa de venta y compra de vienes e inmuebles',
    },
    {
      property: 'og:title',
      content:
        'Plusbienes | Servicio y Acompañamiento en cada fase del proceso',
    },
    {
      property: 'og:description',
      content: 'Una landing page con un diseño sofisticado.',
    },
    {
      property: 'og:image',
      content: 'https://tu-dominio.com/imagen-preview.jpg',
    },
    { name: 'robots', content: 'index, follow' },
  ],
  htmlAttrs: {
    lang: 'es',
  },
})
</script>

<style>
/* 💅 Estilos Globales para replicar la estética de Caul Group */
:root {
  --color-text: #2c2c2c;
  --color-background: #ffffff;
  --color-accent: #f0f0f0;
}

body {
  font-family: 'Lora', serif; /* O 'Playfair Display' */
  margin: 0;
  color: var(--color-text);
  background-color: var(--color-background);
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Playfair Display', serif; /* Fuente serif de alto contraste */
  font-weight: 500;
  margin-top: 0;
}
</style>
