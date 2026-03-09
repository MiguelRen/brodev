<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      <div class="p-6 md:p-10">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="hidden md:block w-1/3">
            <div class="uppercase tracking-wide text-xs text-[#00214f] font-bold mb-2">PlusBienes</div>
            <h1 class="text-2xl font-black text-gray-900 leading-tight mb-4">Valorar mi Propiedad</h1>
            <p class="text-sm text-gray-500 leading-relaxed">
              Completa estos datos y te enviaremos un reporte profesional de mercado para tu inmueble en menos de 24h.
            </p>
            <div class="mt-8">
              <NuxtImg src="/images/plus_logo_no_background.png" class="w-20 opacity-20 grayscale" />
            </div>
          </div>

          <div class="flex-1 w-full">
            <div class="md:hidden mb-6 text-center">
              <h1 class="text-2xl font-bold text-gray-900">Valorar mi Propiedad</h1>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4 text-left">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Nombre</label>
                  <input 
                    v-model="form.fullName" 
                    type="text" 
                    required
                    placeholder="Juan Pérez"
                    class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">WhatsApp</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required
                    placeholder="+58 412..."
                    class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    placeholder="juan@ejemplo.com"
                    class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Tipo</label>
                  <select 
                    v-model="form.propertyType" 
                    required
                    class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                  >
                    <option value="" disabled>Seleccionar...</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Local">Local</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Dirección Exacta</label>
                <input 
                  v-model="form.propertyAddress" 
                  type="text" 
                  required
                  placeholder="Calle, Edificio, Apartamento..."
                  class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                />
              </div>

              <div v-if="error" class="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-100">
                {{ error }}
              </div>

              <div v-if="success" class="p-3 bg-green-50 text-green-700 rounded-xl text-xs border border-green-100 text-center">
                ¡Enviado con éxito! Te contactaremos pronto.
              </div>

              <button 
                type="submit" 
                :disabled="loading"
                class="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-[1.25rem] shadow-xl text-base font-black text-white bg-[#00214f] hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00214f] disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span v-if="loading">Enviando...</span>
                <span v-else>OBTENER VALORACIÓN GRATIS</span>
              </button>

              <div class="text-center mt-4">
                <NuxtLink to="/" class="text-xs font-bold text-[#00214f] hover:text-amber-600 transition-colors uppercase tracking-widest">
                  ← Volver al inicio
                </NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLeadManager } from '~/composables/useLeadManager'

const { createLead, loading, error } = useLeadManager()
const success = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyAddress: '',
  propertyType: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    await createLead({ ...form })
    success.value = true
    Object.keys(form).forEach(key => (form[key as keyof typeof form] = ''))
    
    setTimeout(() => {
      navigateTo('/')
    }, 3000)
  } catch (err) {
    console.error('Error submitting form:', err)
  }
}

useHead({
  title: 'Valorar mi Propiedad | PlusBienes',
  meta: [
    { name: 'description', content: 'Solicita una valoración profesional de tu propiedad en PlusBienes.' }
  ]
})
</script>
