<script lang="ts" setup>
import type { Database } from '~/types/database.types'

definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Tipado derivado de Supabase (o usar la interfaz Lead directamente si es idéntica)
type LeadRow = Database['public']['Tables']['leads']['Row']

const supabase = useSupabaseClient<Database>()
const loading = ref(true)
const leads = ref<LeadRow[]>([])
const errorMsg = ref('')

const fetchLeads = async () => {
  loading.value = true
  errorMsg.value = ''
  
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      
    if (error) throw error
    
    leads.value = data || []
  } catch (err: any) {
    errorMsg.value = err.message || 'Error al cargar las peticiones'
  } finally {
    loading.value = false
  }
}

// Formatters
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('es-UY', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getStatusColor = (status: string | null) => {
  switch (status?.toLowerCase()) {
    case 'pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20'
    case 'contacted': return 'bg-blue-500/20 text-blue-400 border-blue-500/20'
    case 'resolved': return 'bg-green-500/20 text-green-400 border-green-500/20'
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/20'
  }
}

onMounted(() => {
  fetchLeads()
})
</script>

<template>
  <div class="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-4xl font-black text-white tracking-tight">
          Lista de <span class="text-amber-500">Peticiones</span>
        </h1>
        <p class="text-white/60 mt-2 text-lg">Administra y visualiza los leads recibidos.</p>
      </div>
      
      <button 
        @click="fetchLeads" 
        :disabled="loading"
        class="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
      >
        <svg :class="{'animate-spin': loading}" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Actualizar
      </button>
    </div>

    <!-- Mensaje de Error -->
    <div v-if="errorMsg" class="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
      {{ errorMsg }}
    </div>

    <!-- Tabla -->
    <div class="bg-[#00214f]/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black/20 text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
              <th class="px-6 py-5 font-black">Fecha</th>
              <th class="px-6 py-5 font-black">Contacto</th>
              <th class="px-6 py-5 font-black">Inmueble</th>
              <th class="px-6 py-5 font-black">Mensaje</th>
              <th class="px-6 py-5 font-black">Estado</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr v-if="loading && leads.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-white/50">
                <div class="flex flex-col items-center justify-center gap-3">
                  <svg class="animate-spin w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span class="font-bold tracking-widest uppercase text-xs">Cargando datos...</span>
                </div>
              </td>
            </tr>
            
            <tr v-else-if="leads.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-white/50 font-bold">
                No hay peticiones recibidas aún.
              </td>
            </tr>

            <tr 
              v-else 
              v-for="lead in leads" 
              :key="lead.id"
              class="hover:bg-white/5 transition-colors group"
            >
              <td class="px-6 py-5 whitespace-nowrap">
                <div class="text-sm font-bold text-white">{{ formatDate(lead.created_at || '') }}</div>
              </td>
              <td class="px-6 py-5">
                <div class="text-sm font-black text-white">{{ lead.full_name }}</div>
                <div class="text-xs text-white/50 mt-1 flex flex-col gap-0.5">
                  <a :href="`mailto:${lead.email}`" class="hover:text-amber-500 transition-colors">{{ lead.email }}</a>
                  <a :href="`https://wa.me/${lead.phone?.replace('+', '')}`" target="_blank" class="hover:text-amber-500 transition-colors flex items-center gap-1">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    {{ lead.phone }}
                  </a>
                </div>
              </td>
              <td class="px-6 py-5">
                <div class="text-sm font-bold text-amber-500 uppercase tracking-widest text-[10px] mb-1">{{ lead.property_type }}</div>
                <div class="text-xs text-white/80 line-clamp-2 max-w-[200px]">{{ lead.property_address }}</div>
              </td>
              <td class="px-6 py-5">
                <div class="text-xs text-white/70 italic line-clamp-3 max-w-xs break-words relative">
                  "{{ lead.message || 'Sin mensaje' }}"
                </div>
              </td>
              <td class="px-6 py-5 whitespace-nowrap">
                <span :class="getStatusColor(lead.status)" class="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border">
                  {{ lead.status || 'PENDING' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
