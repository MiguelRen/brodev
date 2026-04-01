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
              Guía del <span class="text-amber-500">Propietario</span>
            </h1>
            <p
              class="text-lg md:text-3xl text-white leading-relaxed max-w-6xl mx-auto font-medium px-2 mt-8 md:mt-12"
            >
              "En Plusbienes, maximizamos la rentabilidad de tu inversión mientras protegemos tu patrimonio. Esta guía te ayudará a preparar tu inmueble y conocer el marco legal para un arrendamiento exitoso en el mercado uruguayo."
            </p>
          </header>

          <!-- Main Content Grid 1: Steps 1 & 2 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full mb-12 flex-initial">
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
                Tu "Kit" de Propietario
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Para iniciar el proceso de promoción y cierre, debes tener a mano la siguiente documentación:
              </p>
              <ul class="space-y-4 flex-grow">
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Título de Propiedad</strong> o testimonio de exhibición.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Cédula de Identidad</strong> vigente de todos los titulares.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Facturas de servicios al día:</strong> UTE, OSE y Gastos Comunes.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Comprobante de tributos:</strong> Contribución Inmobiliaria e Impuesto de Primaria al día.</span>
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
                Estado del Inmueble
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Calidad que atrae calidad. Para defender el precio de renta y atraer a los mejores inquilinos, el inmueble debe cumplir con:
              </p>
              <ul class="space-y-4 flex-grow">
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Higiene y Pintura:</strong> Entrega en condiciones de limpieza profunda y pintura en buen estado (tonos neutros preferentemente).</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Funcionamiento:</strong> Sin pérdidas de agua, grifos funcionales y tablero eléctrico bajo norma vigente.</span>
                </li>
                <li class="flex items-start gap-3 text-white text-base md:text-lg">
                  <span class="text-amber-500 text-xl md:text-2xl font-black mt-1">✓</span>
                  <span><strong>Inventario Detallado:</strong> En Plusbienes realizamos un relevamiento fotográfico y escrito minucioso para asegurar que recibas la propiedad en el mismo estado.</span>
                </li>
              </ul>
            </section>
          </div>

          <!-- Main Content Grid 2: Steps 3 & 4 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full mb-20">
            <!-- Step 03 -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl h-full flex flex-col"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4 leading-tight"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >03</span
                >
                Tipos de Contrato
              </h2>
              <ul class="space-y-6 flex-grow">
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-amber-500 font-bold text-xl mb-2">Libre Contratación (General)</h3>
                  <p class="text-white/90 text-sm md:text-base">El más utilizado. El plazo mínimo estándar es de 1 año (usualmente con opción a prórroga).</p>
                </li>
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-amber-500 font-bold text-xl mb-2">Alquiler sin Garantía (LUC)</h3>
                  <p class="text-white/90 text-sm md:text-base">Un régimen que permite plazos flexibles y procesos de desalojo abreviados, ideal para perfiles específicos de inversión.</p>
                </li>
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-amber-500 font-bold text-xl mb-2">Alquiler Temporario</h3>
                  <p class="text-white/90 text-sm md:text-base">Para plazos menores a 5 meses, común en zonas de alta demanda turística o corporativa.</p>
                </li>
              </ul>
            </section>

            <!-- Step 04 -->
            <section
              class="bg-[#00214f]/40 border border-white/20 p-6 md:p-10 rounded-[2.5rem] backdrop-blur-lg shadow-2xl h-full flex flex-col"
            >
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 mb-6 md:mb-8 flex items-center gap-3 md:gap-4 leading-tight"
              >
                <span
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black"
                  >04</span
                >
                Garantías Permitidas
              </h2>
              <p class="text-white leading-relaxed text-lg md:text-xl font-medium mb-6">
                Tu Red de Seguridad. Contamos con diversas opciones para asegurar tu cobro mensual:
              </p>
              <ul class="space-y-4 md:space-y-6 flex-grow">
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-white font-bold text-base md:text-lg mb-1 flex items-center gap-2"><span class="text-amber-500">🛡️</span> Aseguradoras</h3>
                  <p class="text-white/80 text-sm md:text-base">(Porto, Sura, Mapfre, SBI) Pólizas que cubren alquiler y gastos. Son ágiles y muy seguras.</p>
                </li>
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-white font-bold text-base md:text-lg mb-1 flex items-center gap-2"><span class="text-amber-500">🏛️</span> ANDA o Contaduría (CGN)</h3>
                  <p class="text-white/80 text-sm md:text-base">Garantías institucionales sólidas con respaldo de haberes.</p>
                </li>
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-white font-bold text-base md:text-lg mb-1 flex items-center gap-2"><span class="text-amber-500">🏦</span> Depósito en el BHU</h3>
                  <p class="text-white/80 text-sm md:text-base">El inquilino deposita entre 5 y 10 meses de alquiler como respaldo.</p>
                </li>
                <li class="bg-black/20 p-5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 class="text-white font-bold text-base md:text-lg mb-1 flex items-center gap-2"><span class="text-amber-500">🏠</span> Propiedad de un Tercero</h3>
                  <p class="text-white/80 text-sm md:text-base">Un avalista que garantiza la operación con un inmueble de su propiedad.</p>
                </li>
              </ul>
            </section>
          </div>

          <!-- Documentation Costs / Costs Section for Owner -->
          <section class="mt-20 text-center">
             <div class="bg-[#00214f]/60 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md max-w-5xl mx-auto text-left relative overflow-hidden shadow-2xl">
                <h2 class="text-2xl md:text-4xl font-black text-white mb-8 uppercase text-center flex justify-center items-center gap-4 whitespace-normal lg:whitespace-nowrap flex-wrap md:flex-nowrap">
                  <span class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-[#00214f] flex items-center justify-center text-lg md:text-xl font-black">05</span>
                  Gastos y Responsabilidades
                </h2>
                <p class="text-white/90 text-base md:text-lg mb-10 text-center">Es fundamental conocer la distribución de costos para una relación armoniosa:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div class="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                    <h4 class="text-amber-500 font-black uppercase text-base md:text-lg mb-3 leading-snug">Impuesto a la Renta (IRPF/IRNR)</h4>
                    <p class="text-white font-medium text-sm md:text-base leading-relaxed">Tasa del 10,5% sobre el monto del alquiler (existen casos de exoneración que podemos analizar juntos).</p>
                  </div>
                  <div class="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                    <h4 class="text-amber-500 font-black uppercase text-base md:text-lg mb-3 leading-snug">Honorarios Inmobiliarios</h4>
                    <p class="text-white font-medium text-sm md:text-base leading-relaxed">Equivalente a 1 mes de alquiler + IVA por la gestión de búsqueda, filtro de inquilino y cierre.</p>
                  </div>
                  <div class="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                    <h4 class="text-amber-500 font-black uppercase text-base md:text-lg mb-3 leading-snug">Tributos Inmobiliarios</h4>
                    <p class="text-white font-medium text-sm md:text-base leading-relaxed">Contribución Inmobiliaria e Impuesto de Primaria son responsabilidad exclusiva del propietario.</p>
                  </div>
                </div>

                <div class="mt-10 p-6 md:p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
                  <div class="text-4xl md:text-5xl flex-shrink-0">💡</div>
                  <div>
                    <h4 class="text-amber-500 font-black uppercase text-lg mb-2">
                       Nota de Experto Plusbienes
                    </h4>
                    <p class="text-white/90 font-medium leading-relaxed text-sm md:text-base">
                      En el sistema uruguayo, los <strong class="text-white font-bold">Gastos Comunes ordinarios</strong> (mantenimiento diario, luz, limpieza) los abona el inquilino. Sin embargo, los <strong class="text-white font-bold">Gastos Comunes Extraordinarios</strong> (mejoras estructurales) y los <strong class="text-white font-bold">Fondos de Reserva</strong> son responsabilidad del propietario. En Plusbienes nos aseguramos de que esto quede claro desde el primer día.
                    </p>
                  </div>
                </div>
             </div>
          </section>

          <!-- CTA Footer -->
          <footer class="mt-16 md:mt-24 text-center pb-20 px-4">
            <p
              class="text-2xl md:text-4xl text-white font-black mb-10 md:mb-12 italic leading-tight"
            >
              ¿Listo para maximizar la rentabilidad de tu inmueble?
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
  title: 'Guía del Propietario | PlusBienes',
  meta: [
    { name: 'description', content: 'Aprende cómo preparar tu inmueble y el marco legal para alquilar con seguridad en Uruguay.' }
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
