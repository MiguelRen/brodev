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
              Guía del <span class="text-amber-500">Comprador</span>
            </h1>
            <p
              class="text-lg md:text-3xl text-white leading-relaxed max-w-6xl mx-auto font-medium px-2 mt-8 md:mt-12"
            >
              "Comprar una propiedad es una de las decisiones más importantes de la vida. 
              En Plusbienes, queremos que recorras este camino con total claridad y seguridad."
            </p>
          </header>

          <!-- Main Content Grid: Steps -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full mb-20">
            <!-- Step 01 -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl h-full flex flex-col"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4 leading-tight"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >01</span
                >
                Actividades Obligatorias
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Para una compra exitosa en el mercado uruguayo, estos son los pasos que no puedes saltar:
              </p>
              <ul class="space-y-4 flex-grow">
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Presupuesto Real:</strong> Antes de buscar, es vital saber con cuánto cuentas (ahorros + posible préstamo).</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Visita Técnica:</strong> Verifica estado de humedades, presión de agua y orientación solar.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Información Registral:</strong> Tu escribano debe revisar que la propiedad esté libre de embargos.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Firma del Boleto:</strong> Documento que "congela" la propiedad mientras se revisan los papeles.</span>
                </li>
              </ul>
            </section>

            <!-- Step 02 -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl h-full flex flex-col"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4 leading-tight"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >02</span
                >
                Documentación Necesaria
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Lo que debes preparar para avanzar con la operación de manera ágil:
              </p>
              <ul class="space-y-4 flex-grow">
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Cédula de Identidad:</strong> Debe estar vigente y en buenas condiciones.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Estado Civil:</strong> Si eres casado, se requiere la presencia del cónyuge para las firmas.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Justificación de Fondos:</strong> De acuerdo a la normativa de prevención de lavado de activos.</span>
                </li>
              </ul>
              
              <div class="mt-8 bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl w-full">
                <h4 class="text-amber-500 font-black uppercase text-sm mb-2 text-center md:text-left">💡 Consejo Plusbienes</h4>
                <p class="text-white/90 text-sm font-medium leading-relaxed">
                  En Uruguay, el escribano es seleccionado por el comprador. Asegúrate de trabajar con alguien de total confianza.
                </p>
              </div>
            </section>
          </div>

          <!-- Costs Section: Integrated High-End Grid -->
          <section class="mt-20">
            <h2
              class="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-widest text-center"
            >
              Costos e Inversión Inicial
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Comisión Inmobiliaria -->
              <div
                class="p-8 rounded-[2rem] bg-[#00214f] border border-amber-500/30 hover:border-amber-500 transition-all transform hover:-translate-y-2 shadow-xl flex flex-col"
              >
                <h3
                  class="text-amber-500 font-black text-2xl mb-4 uppercase leading-tight"
                >
                  Honorarios Inmobiliarios
                </h3>
                <p class="text-white text-3xl font-black mb-4">3% + IVA</p>
                <p class="text-white/80 text-base font-bold leading-relaxed">
                  Se abona al momento de la escritura o compromiso de compraventa.
                </p>
              </div>

              <!-- ITP -->
              <div
                class="p-8 rounded-[2rem] bg-[#00214f] border border-amber-500/30 hover:border-amber-500 transition-all transform hover:-translate-y-2 shadow-xl flex flex-col"
              >
                <h3
                  class="text-amber-500 font-black text-2xl mb-4 uppercase leading-tight"
                >
                  ITP (Impuesto)
                </h3>
                <p class="text-white text-3xl font-black mb-4">2% Valor Real</p>
                <p class="text-white/80 text-base font-bold leading-relaxed">
                  Calculado sobre el valor real (catastral) de la propiedad, que suele ser menor al de mercado.
                </p>
              </div>

              <!-- Honorarios Escribano -->
              <div
                class="p-8 rounded-[2rem] bg-[#00214f] border border-amber-500/30 hover:border-amber-500 transition-all transform hover:-translate-y-2 shadow-xl flex flex-col lg:col-span-1"
              >
                <h3
                  class="text-amber-500 font-black text-2xl mb-4 uppercase leading-tight"
                >
                  Honorarios de Escribano
                </h3>
                <p class="text-white text-3xl font-black mb-4">3% + IVA</p>
                <p class="text-white/80 text-base font-bold leading-relaxed">
                  Profesional de tu confianza que garantiza la legalidad de toda la operación.
                </p>
              </div>
            </div>
          </section>

          <!-- Documentation Costs -->
          <section class="mt-20 text-center">
             <div class="bg-[#00214f]/60 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md max-w-4xl mx-auto">
                <h2 class="text-2xl md:text-4xl font-black text-white mb-8 uppercase">📋 Gastos de Documentación</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div class="space-y-2">
                    <h4 class="text-amber-500 font-black uppercase text-lg">Certificados Registrales</h4>
                    <p class="text-white font-bold text-sm">Gastos de oficina para obtener la "historia" de la propiedad.</p>
                  </div>
                  <div class="space-y-2">
                    <h4 class="text-amber-500 font-black uppercase text-lg">Montepíos y Timbres</h4>
                    <p class="text-white font-bold text-sm">Tasas obligatorias para la validación de documentos notariales.</p>
                  </div>
                  <div class="space-y-2">
                    <h4 class="text-amber-500 font-black uppercase text-lg">Costo de Inscripción</h4>
                    <p class="text-white font-bold text-sm">El arancel que cobra el Registro para poner el inmueble a tu nombre.</p>
                  </div>
                </div>
                <div class="mt-10 pt-6 border-t border-white/10">
                  <p class="text-white/60 italic font-medium text-sm md:text-base">Estos son gastos administrativos que surgen durante el proceso.</p>
                </div>
             </div>
          </section>

          <!-- CTA Footer -->
          <footer class="mt-16 md:mt-24 text-center pb-20 px-4">
            <p
              class="text-2xl md:text-4xl text-white font-black mb-10 md:mb-12 italic leading-tight"
            >
              ¿Listo para encontrar tu nuevo hogar con total seguridad?
            </p>
            <NuxtLink
              to="/formulario"
              class="inline-block bg-[#00214f] hover:bg-[#002b66] text-amber-500 border-2 border-amber-500 font-black py-4 md:py-6 px-8 md:px-16 rounded-full text-xl md:text-2xl transition-all hover:scale-110 shadow-[0_0_30px_rgba(0,33,79,0.4)] uppercase"
            >
              CONTÁCTANOS
            </NuxtLink>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/home/NavBar.vue'

useHead({
  title: 'Guía del Comprador | PlusBienes',
  meta: [
    { name: 'description', content: 'Aprende los pasos esenciales y costos para comprar una propiedad en Uruguay con total claridad y seguridad.' }
  ]
})
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
