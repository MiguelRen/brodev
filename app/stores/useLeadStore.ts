import { defineStore } from 'pinia'
import type { Lead } from '~/interfaces/Lead'
import type { Database } from '~/types/database.types'

export const useLeadStore = defineStore('lead', () => {
  const supabase = useSupabaseClient<Database>()
  const leads = ref<Lead[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function submitLead(
    leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>
  ) {
    loading.value = true
    error.value = null
    try {
      const insertData: Database['public']['Tables']['leads']['Insert'] = {
        full_name: leadData.fullName,
        email: leadData.email,
        phone: leadData.phone,
        property_address: leadData.propertyAddress,
        property_type: leadData.propertyType,
        message: leadData.message ?? null,
        status: 'pending',
      }

      const { data, error: sbError } = await supabase
        .from('leads')
        .insert(insertData as any) // Bypass 'never' issue in Supabase types for insert
        .select()
        .single()

      if (sbError) throw sbError

      if (data) {
        const row = data as Database['public']['Tables']['leads']['Row']
        const newLead: Lead = {
          id: row.id,
          fullName: row.full_name,
          email: row.email,
          phone: row.phone,
          propertyAddress: row.property_address,
          propertyType: row.property_type,
          message: row.message ?? undefined,
          status: row.status,
          createdAt: row.created_at,
        }
        leads.value.push(newLead)
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unknown error occurred'
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  async function fetchLeads() {
    loading.value = true
    error.value = null
    try {
      const { data, error: sbError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (sbError) throw sbError

      leads.value = (data || []).map((row: any) => ({
        id: row.id,
        fullName: row.full_name,
        email: row.email,
        phone: row.phone,
        propertyAddress: row.property_address,
        propertyType: row.property_type,
        message: row.message,
        status: row.status,
        createdAt: row.created_at
      }))
    } catch (err: any) {
      error.value = err.message || 'Error al cargar leads'
      console.error('fetchLeads error:', err)
    } finally {
      loading.value = false
    }
  }

  const stats = ref({ leadCount: 0 })
  async function fetchStats() {
    try {
      const { count, error: sbError } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })

      if (sbError) throw sbError
      stats.value.leadCount = count || 0
    } catch (err) {
      console.error('fetchStats error:', err)
    }
  }

  return {
    leads,
    loading,
    error,
    stats,
    submitLead,
    fetchLeads,
    fetchStats
  }
})
