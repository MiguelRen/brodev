<template>
  <Transition name="fade">
    <div
      v-if="isLeadModalOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      @click.self="closeLeadModal"
    >
      <div
        class="relative w-full max-w-3xl bg-[#00214f]/80 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden text-white"
      >
        <!-- Close button -->
        <button
          @click="closeLeadModal"
          class="absolute top-5 right-5 text-white/70 hover:text-white p-2 transition-colors z-10"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="p-6 md:p-10">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="hidden md:block w-1/3">
              <div
                class="uppercase tracking-wide text-xs text-amber-500 font-bold mb-2"
              >
                PlusBienes
              </div>
              <h1 class="text-2xl font-black text-white leading-tight mb-4">
                Valorar mi Propiedad
              </h1>
              <p class="text-white/70 text-sm leading-relaxed">
                Acepto ser contactado por Plusbienes a través de llamadas,
                correo electrónico y mensajes de texto
              </p>
              <div class="mt-8">
                <img
                  src="~/assets/images/plus_logo_no_background.png"
                  class="w-20 opacity-40 brightness-0 invert"
                />
              </div>
            </div>

            <div class="flex-1 w-full">
              <div class="md:hidden mb-6 text-center">
                <h1 class="text-2xl font-bold text-white mb-2">
                  Valorar mi Propiedad
                </h1>
                <p class="text-xs text-white/70 leading-relaxed px-4">
                  Acepto ser contactado por Plusbienes a través de llamadas,
                  correo electrónico y mensajes de texto
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs font-bold text-amber-500/80 uppercase mb-1 ml-1"
                      >Nombre</label
                    >
                    <input
                      v-model="form.fullName"
                      type="text"
                      required
                      placeholder="Juan Pérez"
                      class="block w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/30 transition duration-200"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-xs font-bold text-amber-500/80 uppercase mb-1 ml-1"
                      >WhatsApp</label
                    >
                    <div class="flex">
                      <select
                        v-model="form.countryCode"
                        class="px-2 py-2.5 bg-white/20 border border-white/20 rounded-l-2xl focus:ring-2 focus:ring-amber-500 text-white text-sm font-bold transition duration-200"
                      >
                        <option value="+598" class="text-black">🇺🇾 +598</option>
                        <option value="+54" class="text-black">🇦🇷 +54</option>
                        <option value="+55" class="text-black">🇧🇷 +55</option>
                        <option value="+56" class="text-black">🇨🇱 +56</option>
                        <option value="+595" class="text-black">🇵🇾 +595</option>
                        <option value="+58" class="text-black">🇻🇪 +58</option>
                        <option value="+57" class="text-black">🇨🇴 +57</option>
                        <option value="+34" class="text-black">🇪🇸 +34</option>
                        <option value="+1" class="text-black">🇺🇸 +1</option>
                      </select>
                      <input
                        v-model="form.phone"
                        type="tel"
                        required
                        placeholder="99123456"
                        class="block w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-r-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/30 transition duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs font-bold text-amber-500/80 uppercase mb-1 ml-1"
                      >Email</label
                    >
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="juan@ejemplo.com"
                      class="block w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/30 transition duration-200"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-xs font-bold text-amber-500/80 uppercase mb-1 ml-1"
                      >Tipo</label
                    >
                    <select
                      v-model="form.propertyType"
                      required
                      class="block w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white transition duration-200 [&>option]:text-black"
                    >
                      <option value="" disabled class="text-black">Seleccionar...</option>
                      <option value="Apartamento" class="text-black">Apartamento</option>
                      <option value="Casa" class="text-black">Casa</option>
                      <option value="Terreno" class="text-black">Terreno</option>
                      <option value="Local" class="text-black">Local</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs font-bold text-amber-500/80 uppercase mb-1 ml-1"
                    >Dirección Exacta</label
                  >
                  <input
                    v-model="form.propertyAddress"
                    type="text"
                    required
                    placeholder="Calle, Edificio, Apartamento..."
                    class="block w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/30 transition duration-200"
                  />
                </div>

                <div
                  v-if="validationError || leadError"
                  class="p-3 bg-red-500/20 text-red-200 rounded-xl text-xs border border-red-500/30"
                >
                  {{ validationError || leadError }}
                </div>

                <div
                  v-if="success"
                  class="p-3 bg-green-500/20 text-green-200 rounded-xl text-xs border border-green-500/30 text-center"
                >
                  ¡Enviado con éxito! Te contactaremos pronto.
                </div>

                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-[1.25rem] shadow-xl text-base font-black text-[#00214f] bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span v-if="loading">Enviando...</span>
                  <span v-else>OBTENER VALORACIÓN GRATIS</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useUiManager } from '~/composables/useUiManager'
import { useLeadManager } from '~/composables/useLeadManager'

const { isLeadModalOpen, closeLeadModal } = useUiManager()
const { createLead, loading, error: leadError } = useLeadManager()
const success = ref(false)
const validationError = ref('')

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+598',
  propertyAddress: '',
  propertyType: '',
  message: '',
})

// Real-time input cleaning and validation
watch(
  () => form.fullName,
  newVal => {
    // Only letters and spaces, max 40
    const cleaned = newVal.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    if (cleaned.length > 40) {
      form.fullName = cleaned.substring(0, 40)
    } else {
      form.fullName = cleaned
    }
  }
)

watch(
  () => form.phone,
  newVal => {
    // Only numbers, no length limit
    form.phone = newVal.replace(/\D/g, '')
  }
)

watch(
  () => form.email,
  newVal => {
    // Max 40
    if (newVal.length > 40) {
      form.email = newVal.substring(0, 40)
    }
  }
)

const handleSubmit = async () => {
  validationError.value = ''

  // Final validations
  if (!form.email.includes('@')) {
    validationError.value = 'El email debe contener un @'
    return
  }

  if (form.phone.length === 0) {
    validationError.value = 'El número de WhatsApp es requerido'
    return
  }

  try {
    // Combine with country code before sending
    const finalData = {
      ...form,
      phone: `${form.countryCode}${form.phone}`,
    }

    await createLead(finalData)
    success.value = true

    // Manual reset
    form.fullName = ''
    form.email = ''
    form.phone = ''
    form.propertyAddress = ''
    form.propertyType = ''
    form.message = ''

    setTimeout(() => {
      success.value = false
      closeLeadModal()
    }, 2500)
  } catch (err) {
    console.error('Error submitting form:', err)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
