<template>
  <div
    class="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden"
  >
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop playsinline class="object-cover w-full h-full">
        <source
          src="~/assets/images/Real_Estate_Video_Generation.mp4"
          type="video/mp4"
        />
      </video>
      <!-- Overlay for readability -->
      <div class="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
    </div>

    <!-- Content Container -->
    <div
      class="relative z-10 w-full overflow-y-auto max-h-screen custom-scrollbar"
    >
      <!-- NavBar inside scrollable area -->
      <NavBar class="w-full" />

      <div class="px-6 pb-12 md:pb-20">
        <div class="w-full max-w-none ml-0 mr-0 mt-8">
          <!-- Hero Section -->
          <header class="text-center mb-12 md:mb-16">
            <h1
              class="inline-block max-w-full text-4xl sm:text-5xl md:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight uppercase leading-none border-b-4 md:border-b-8 border-[#00214f] pb-4 md:pb-6"
            >
              Acerca de <span class="text-amber-500">PlusBienes</span>
            </h1>
            <p
              class="text-lg md:text-3xl text-white leading-relaxed max-w-6xl mx-auto font-medium px-2 mt-8 md:mt-12"
            >
              Transformamos la experiencia de compra y venta de propiedades en
              Montevideo, Uruguay. Nacimos de la visión del
              <span class="text-amber-400 font-bold italic"
                >Lic. Luis Rengel</span
              >, enfocada en la
              <span class="text-white font-black underline decoration-amber-500"
                >integridad, la transparencia y los resultados eficientes</span
              >.
            </p>
          </header>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full">
            <!-- Specialization -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >01</span
                >
                Nuestra especialización
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium">
                Nos especializamos en el mercado residencial de Montevideo.
                Entendemos que cada transacción es una decisión de gran
                inversión y valor personal, por lo que ofrecemos una atención
                personalizada y un trato de excelencia, buscando celeridad y
                seguridad para nuestros clientes.
              </p>
            </section>

            <!-- Value Proposition -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >02</span
                >
                Propuesta de valor
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Nuestro diferencial es la unión del profesionalismo y la
                innovación. Establecemos una hoja de ruta clara, tiempos de
                ejecución precisos y resultados predecibles.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span
                    ><strong class="text-amber-400 font-black"
                      >Marketing de alto impacto:</strong
                    >
                    fotografía profesional, planos, 360° y videos con dron.</span
                  >
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span
                    ><strong class="text-amber-400 font-black"
                      >Máxima visibilidad:</strong
                    >
                    destaque premium en Mercado Libre e InfoCasas.</span
                  >
                </li>
              </ul>
            </section>
          </div>

          <!-- Values Section -->
          <section class="mt-20 text-center">
            <h2
              class="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-widest"
            >
              Nuestros valores
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="(value, index) in values"
                :key="index"
                class="p-8 rounded-[2rem] bg-[#00214f] border border-amber-500/30 hover:border-amber-500 transition-all transform hover:-translate-y-2 shadow-xl"
              >
                <h3
                  class="text-amber-500 font-black text-2xl mb-4 uppercase leading-tight"
                >
                  {{ value.title }}
                </h3>
                <p class="text-white text-base font-bold leading-relaxed">
                  {{ value.desc }}
                </p>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <footer class="mt-16 md:mt-24 text-center pb-20 px-4">
            <p
              class="text-2xl md:text-4xl text-white font-black mb-10 md:mb-12 italic leading-tight"
            >
              ¿Está listo para vender o invertir con la confianza de un proceso
              profesional?
            </p>
            <NuxtLink
              to="/formulario"
              class="inline-block bg-[#00214f] hover:bg-[#002b66] text-amber-500 border-2 border-amber-500 font-black py-4 md:py-6 px-8 md:px-16 rounded-full text-xl md:text-2xl transition-all hover:scale-110 shadow-[0_0_30px_rgba(0,33,79,0.4)] uppercase"
            >
              INICIAR MI PROCESO
            </NuxtLink>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '~/components/home/NavBar.vue'

const values = [
  {
    title: 'Integridad',
    desc: 'Máxima honestidad en la valoración y comunicación en cada etapa del proceso.',
  },
  {
    title: 'Profesionalismo',
    desc: 'Cumplimiento estricto de procedimientos y un proceso comercial claro y definido.',
  },
  {
    title: 'Innovación',
    desc: 'Uso de las herramientas de marketing más avanzadas y efectivas del mercado actual.',
  },
  {
    title: 'Empatía',
    desc: 'Entendemos sus necesidades profundas y trabajamos para lograr su objetivo con éxito.',
  },
]
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 10px;
}

/* Hide scrollbar for IE, Edge and Firefox */
.custom-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: thin; /* Firefox */
}
</style>
