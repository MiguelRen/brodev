<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      <div class="p-6 md:p-10">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="hidden md:block w-1/3">
            <div class="uppercase tracking-wide text-xs text-[#00214f] font-bold mb-2">PlusBienes</div>
            <h1 class="text-2xl font-black text-gray-900 leading-tight mb-4">Valorar mi Propiedad</h1>
            <p class="text-sm text-gray-500 leading-relaxed">
              Acepto ser contactado por Plusbienes a través de llamadas,
              correo electrónico y mensajes de texto
            </p>
            <div class="mt-8">
              <img src="~/assets/images/plus_logo_no_background.png" class="w-20 opacity-20 grayscale" />
            </div>
          </div>

          <div class="flex-1 w-full">
            <div class="md:hidden mb-6 text-center">
              <h1 class="text-2xl font-bold text-gray-900 mb-2">Valorar mi Propiedad</h1>
              <p class="text-xs text-gray-500 leading-relaxed px-4">
                Acepto ser contactado por Plusbienes a través de llamadas,
                correo electrónico y mensajes de texto
              </p>
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
                  <div class="flex">
                    <select
                      v-model="form.countryCode"
                      class="px-3 py-2.5 bg-gray-100 border-0 ring-1 ring-gray-200 rounded-l-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200 text-sm font-bold border-r border-gray-300"
                    >
                      <option value="+598">🇺🇾 +598</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+595">🇵🇾 +595</option>
                      <option value="+58">🇻🇪 +58</option>
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+1">🇺🇸 +1</option>
                    </select>
                    <input 
                      v-model="form.phone" 
                      type="tel" 
                      required
                      placeholder="99123456"
                      class="block w-full px-4 py-2.5 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-r-2xl focus:ring-2 focus:ring-[#00214f] transition duration-200"
                    />
                  </div>
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

              <div v-if="validationError || leadError" class="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-100">
                {{ validationError || leadError }}
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
                <NuxtLink 
                  :to="from === 'bio' ? '/Bio' : '/'" 
                  class="text-xs font-bold text-[#00214f] hover:text-amber-600 transition-colors uppercase tracking-widest"
                >
                  ← {{ from === 'bio' ? 'Volver al Bio' : 'Volver al inicio' }}
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
import { ref, reactive, watch } from 'vue'
import { useLeadManager } from '~/composables/useLeadManager'
import { useRoute } from 'vue-router'

const { createLead, loading, error: leadError } = useLeadManager()
const route = useRoute()
const success = ref(false)
const validationError = ref('')

const from = route.query.from

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+598',
  propertyAddress: '',
  propertyType: '',
  message: ''
})

// Real-time input cleaning
watch(() => form.fullName, (newVal) => {
  const cleaned = newVal.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
  if (cleaned.length > 40) {
    form.fullName = cleaned.substring(0, 40)
  } else {
    form.fullName = cleaned
  }
})

watch(() => form.phone, (newVal) => {
  // Only numbers, no length limit
  form.phone = newVal.replace(/\D/g, '')
})

watch(() => form.email, (newVal) => {
  if (newVal.length > 40) {
    form.email = newVal.substring(0, 40)
  }
})

const handleSubmit = async () => {
  validationError.value = ''
  
  if (!form.email.includes('@')) {
    validationError.value = 'El email debe contener un @'
    return
  }
  
  if (form.phone.length === 0) {
    validationError.value = 'El número de WhatsApp es requerido'
    return
  }

  try {
    const finalData = {
      ...form,
      phone: `${form.countryCode}${form.phone}`
    }

    await createLead(finalData)
    success.value = true
    
    // Clear form
    form.fullName = ''
    form.email = ''
    form.phone = ''
    form.propertyAddress = ''
    form.propertyType = ''
    form.message = ''
    
    setTimeout(() => {
      navigateTo(from === 'bio' ? '/Bio' : '/')
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
