<template>
  <div>
    <!-- Backdrop for Modal or Page mode -->
    <Transition name="fade">
      <div
        v-if="shouldShowBackdrop"
        class="fixed inset-0 z-[100] flex justify-center p-4 py-12 md:py-20 overflow-y-auto bg-black/80 backdrop-blur-md"
      >
        <!-- Clickable Background Area (The "Click-out" target) -->
        <div 
          class="fixed inset-0 z-0 cursor-pointer"
          @click="handleClose"
        >
          <!-- Background Video (Only for 'page' mode) -->
          <div v-if="mode === 'page'" class="absolute inset-0 z-0 opacity-40">
            <video autoplay muted loop playsinline class="object-cover w-full h-full">
              <source src="/images/IMG_1114.MP4" type="video/mp4" />
            </video>
          </div>
          
          <!-- Dark overlay for page contrast -->
          <div v-if="mode === 'page'" class="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <!-- Form Card (Prevents click propagation to backdrop) -->
        <div 
          class="relative z-20 w-full max-w-4xl animate-in fade-in zoom-in duration-300"
          @click.stop
        >
          <!-- Close button (For modal mode) -->
          <button
            v-if="mode === 'modal'"
            @click="handleClose"
            class="absolute -top-12 right-0 text-white/50 hover:text-white p-2 transition-colors flex items-center gap-2 uppercase text-[10px] font-black tracking-widest"
          >
            Cerrar
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Unified Form Card Body (Shared between modes) -->
          <div class="w-full bg-[#00214f]/95 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden text-white">
            <div class="p-6 md:p-10">
              <div class="flex flex-col md:flex-row gap-8 items-start">
                <!-- Branding Sidebar (Desktop) -->
                <div class="hidden md:block w-1/3 border-r border-white/10 pr-8">
                  <div class="uppercase tracking-widest text-xs text-amber-500 font-black mb-2">PlusBienes</div>
                  <h1 class="text-3xl font-black text-white leading-tight mb-6">Valorar mi <span class="text-amber-500">Propiedad</span></h1>
                  <p class="text-white/60 text-sm leading-relaxed mb-8">Obtén una valoración profesional respaldada por datos reales del mercado en Montevideo.</p>
                  <div class="mt-auto">
                    <img src="/images/plus_logo_no_background.png" class="w-24 opacity-50 brightness-0 invert" />
                  </div>
                </div>

                <!-- Form Fields -->
                <div class="flex-1 w-full">
                  <div class="md:hidden mb-8 text-center">
                    <div class="uppercase tracking-widest text-[10px] text-amber-500 font-black mb-1">PlusBienes</div>
                    <h1 class="text-2xl font-black text-white mb-2">Valorar mi <span class="text-amber-500">Propiedad</span></h1>
                  </div>

                  <form @submit.prevent="handleSubmit" class="space-y-5 text-left">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div class="space-y-1.5">
                        <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Nombre Completo</label>
                        <input v-model="form.fullName" type="text" required placeholder="Juan Pérez" class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                      </div>
                      <div class="space-y-1.5">
                        <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">WhatsApp</label>
                        <div class="flex gap-2">
                          <select v-model="form.countryCode" class="w-24 px-2 py-3.5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white text-xs font-black transition-all duration-300 outline-none appearance-none cursor-pointer">
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
                          <input v-model="form.phone" type="tel" required placeholder="99123456" class="block flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div class="space-y-1.5">
                        <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Email</label>
                        <input v-model="form.email" type="email" required placeholder="juan@ejemplo.com" class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                      </div>
                      <div class="space-y-1.5">
                        <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Tipo de Inmueble</label>
                        <select v-model="form.propertyType" required class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white transition-all duration-300 outline-none cursor-pointer appearance-none [&>option]:text-black">
                          <option value="" disabled>Seleccionar...</option>
                          <option value="Apartamento">Apartamento</option>
                          <option value="Casa">Casa</option>
                          <option value="Terreno">Terreno</option>
                          <option value="Local">Local</option>
                        </select>
                      </div>
                    </div>

                    <div class="space-y-1.5">
                      <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Dirección Exacta</label>
                      <input v-model="form.propertyAddress" type="text" required placeholder="Calle, Edificio, Apartamento..." class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                    </div>

                    <div class="space-y-1.5">
                      <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Mensaje (Opcional)</label>
                      <textarea v-model="form.message" rows="2" placeholder="Cuéntanos más sobre tu propiedad..." class="block w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none resize-none"></textarea>
                    </div>

                    <!-- Feedback -->
                    <div v-if="validationError || leadError" class="p-4 bg-red-500/20 border border-red-500/40 rounded-2xl text-xs text-red-200 animate-in fade-in slide-in-from-top-2">{{ validationError || leadError }}</div>
                    <div v-if="success" class="p-4 bg-green-500/20 border border-green-500/40 rounded-2xl text-xs text-green-200 text-center animate-in fade-in slide-in-from-top-2">¡Enviado con éxito! Te contactaremos pronto.</div>

                    <!-- Actions -->
                    <div class="pt-2 flex flex-col gap-4">
                      <button type="submit" :disabled="loading" class="group relative w-full overflow-hidden rounded-[1.25rem] bg-amber-500 p-4 text-base font-black text-[#00214f] transition-all hover:bg-amber-400 active:scale-[0.98] disabled:opacity-50">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                          <span v-if="loading">ENVIANDO...</span>
                          <span v-else>OBTENER VALORACIÓN GRATIS</span>
                          <svg v-if="!loading" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        </span>
                      </button>
                      <button v-if="mode === 'page'" type="button" @click="handleClose" class="w-full py-2 text-[10px] font-black text-white/40 hover:text-white/80 uppercase tracking-[0.3em] transition-colors">← Volver</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Inline mode uses the same layout but without backdrop -->
    <div v-if="mode === 'inline'" class="w-full max-w-4xl bg-[#00214f]/95 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden text-white mx-auto">
      <div class="p-6 md:p-10">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <!-- Branding Sidebar (Desktop) -->
          <div class="hidden md:block w-1/3 border-r border-white/10 pr-8">
            <div class="uppercase tracking-widest text-xs text-amber-500 font-black mb-2">PlusBienes</div>
            <h1 class="text-3xl font-black text-white leading-tight mb-6">Valorar mi <span class="text-amber-500">Propiedad</span></h1>
            <p class="text-white/60 text-sm leading-relaxed mb-8">Obtén una valoración profesional respaldada por datos reales del mercado en Montevideo.</p>
            <div class="mt-auto">
              <img src="/images/plus_logo_no_background.png" class="w-24 opacity-50 brightness-0 invert" />
            </div>
          </div>

          <!-- Form Fields -->
          <div class="flex-1 w-full">
            <div class="md:hidden mb-8 text-center">
              <div class="uppercase tracking-widest text-[10px] text-amber-500 font-black mb-1">PlusBienes</div>
              <h1 class="text-2xl font-black text-white mb-2">Valorar mi <span class="text-amber-500">Propiedad</span></h1>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-5 text-left">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Nombre Completo</label>
                  <input v-model="form.fullName" type="text" required placeholder="Juan Pérez" class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                </div>
                <div class="space-y-1.5">
                  <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">WhatsApp</label>
                  <div class="flex gap-2">
                    <select v-model="form.countryCode" class="w-24 px-2 py-3.5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white text-xs font-black transition-all duration-300 outline-none appearance-none cursor-pointer">
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
                    <input v-model="form.phone" type="tel" required placeholder="99123456" class="block flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Email</label>
                  <input v-model="form.email" type="email" required placeholder="juan@ejemplo.com" class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
                </div>
                <div class="space-y-1.5">
                  <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Tipo de Inmueble</label>
                  <select v-model="form.propertyType" required class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white transition-all duration-300 outline-none cursor-pointer appearance-none [&>option]:text-black">
                    <option value="" disabled>Seleccionar...</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Local">Local</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Dirección Exacta</label>
                <input v-model="form.propertyAddress" type="text" required placeholder="Calle, Edificio, Apartamento..." class="block w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none" />
              </div>

              <div class="space-y-1.5">
                <label class="block text-[10px] font-black text-amber-500/80 uppercase ml-1 tracking-widest">Mensaje (Opcional)</label>
                <textarea v-model="form.message" rows="2" placeholder="Cuéntanos más sobre tu propiedad..." class="block w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 text-white placeholder:text-white/20 transition-all duration-300 outline-none resize-none"></textarea>
              </div>

              <div v-if="validationError || leadError" class="p-4 bg-red-500/20 border border-red-500/40 rounded-2xl text-xs text-red-200 animate-in fade-in slide-in-from-top-2">{{ validationError || leadError }}</div>
              <div v-if="success" class="p-4 bg-green-500/20 border border-green-500/40 rounded-2xl text-xs text-green-200 text-center animate-in fade-in slide-in-from-top-2">¡Enviado con éxito! Te contactaremos pronto.</div>

              <div class="pt-2">
                <button type="submit" :disabled="loading" class="group relative w-full overflow-hidden rounded-[1.25rem] bg-amber-500 p-4 text-base font-black text-[#00214f] transition-all hover:bg-amber-400 active:scale-[0.98] disabled:opacity-50">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <span v-if="loading">ENVIANDO...</span>
                    <span v-else>OBTENER VALORACIÓN GRATIS</span>
                    <svg v-if="!loading" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue'
import { useLeadManager } from '~/composables/useLeadManager'
import { useUiManager } from '~/composables/useUiManager'
import { useRoute, useRouter } from 'vue-router'
import type { Lead } from '~/interfaces/Lead'

type LeadFormMode = 'modal' | 'page' | 'inline'

const props = withDefaults(defineProps<{
  mode?: LeadFormMode
  from?: string
  onSuccess?: () => void
  onCancel?: () => void
}>(), {
  mode: 'inline'
})

const emit = defineEmits(['success', 'cancel'])

const { isLeadModalOpen, closeLeadModal } = useUiManager()
const { createLead, loading, error: leadError } = useLeadManager()
const route = useRoute()
const router = useRouter()

const success = ref<boolean>(false)
const validationError = ref<string>('')

const shouldShowBackdrop = computed(() => {
  if (props.mode === 'modal') return isLeadModalOpen.value
  if (props.mode === 'page') return true
  return false
})

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+598',
  propertyAddress: '',
  propertyType: '',
  message: '',
})

// Input sanitization
watch(() => form.fullName, (v) => form.fullName = v.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '').substring(0, 40))
watch(() => form.phone, (v) => form.phone = v.replace(/\D/g, ''))
watch(() => form.email, (v) => { if (v.length > 40) form.email = v.substring(0, 40) })

const handleClose = () => {
  if (props.mode === 'modal') {
    closeLeadModal()
  } else if (props.mode === 'page') {
    const fromVal = props.from || route.query.from as string
    if (fromVal === 'bio') {
      navigateTo('/Bio')
    } else if (window.history.length > 1) {
      router.back()
    } else {
      navigateTo('/')
    }
  }
  if (props.onCancel) props.onCancel()
  emit('cancel')
}

const handleSubmit = async () => {
  validationError.value = ''
  if (!form.email.includes('@')) return validationError.value = 'Email inválido'
  if (form.phone.length === 0) return validationError.value = 'WhatsApp requerido'

  try {
    const leadData: Omit<Lead, 'id' | 'createdAt' | 'status'> = {
      fullName: form.fullName,
      email: form.email,
      phone: `${form.countryCode}${form.phone}`,
      propertyAddress: form.propertyAddress,
      propertyType: form.propertyType,
      message: form.message || null,
    }

    await createLead(leadData)
    success.value = true
    
    if (props.onSuccess) props.onSuccess()
    emit('success')

    Object.assign(form, { fullName: '', email: '', phone: '', propertyAddress: '', propertyType: '', message: '' })
    
    setTimeout(() => {
      success.value = false
      if (props.mode === 'modal' || props.mode === 'page') {
        handleClose()
      }
    }, 2500)
  } catch (err) {
    console.error('Submit error:', err)
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

.animate-in {
  animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
