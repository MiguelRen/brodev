<template>
  <section class="relative min-h-screen w-full flex flex-col overflow-hidden">
    <!-- Optimized Background with Video -->
    <div class="absolute inset-0 z-0 h-full w-full">
      <video
        autoplay
        muted
        loop
        playsinline
        class="object-cover w-full h-full"
      >
        <source src="~/assets/images/IMG_1114.MP4" type="video/mp4" />
      </video>
    </div>

    <!-- Improved overlay for contrast -->
    <div class="absolute inset-0 z-10 bg-black/60 h-full w-full"></div>

    <!-- Main Content Container -->
    <div class="relative z-20 flex flex-col min-h-screen overflow-y-auto">
      <!-- Navigation sits at the top -->
      <NavBar class="w-full flex-shrink-0" />

      <!-- Center content: Body and Footer -->
      <main class="flex-grow flex flex-col items-center px-6 py-12 text-white text-center">
        <div class="max-w-4xl w-full mb-12">
          <BodyBar />
        </div>
        <div class="w-full max-w-4xl mt-auto">
          <FootBar />
        </div>
      </main>
    <!-- Modals -->
    <ComingSoonToast />
    </section>
    </template>

    <script lang="ts" setup>
    import NavBar from './home/NavBar.vue'
    import BodyBar from './home/BodyBar.vue'
    import FootBar from './home/FootBar.vue'
    import ComingSoonToast from './ComingSoonToast.vue'

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
