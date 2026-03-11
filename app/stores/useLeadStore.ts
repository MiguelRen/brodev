import { defineStore } from 'pinia'
import type { Lead } from '~/interfaces/Lead'

export const useLeadStore = defineStore('lead', () => {
  const supabase = useSupabaseClient<any>()
  const leads = ref<Lead[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function submitLead(
    leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>
  ) {
    loading.value = true
    error.value = null
    try {
      const { data, error: sbError } = await supabase
        .from('leads')
        .insert([
          {
            full_name: leadData.fullName,
            email: leadData.email,
            phone: leadData.phone,
            property_address: leadData.propertyAddress,
            property_type: leadData.propertyType,
            message: leadData.message,
            status: 'pending',
          },
        ])
        .select()

      if (sbError) throw sbError

      if (data && data.length > 0) {
        const row = data[0] as any
        // Map back to camelCase as per BACKEND_GUIDE.md
        const newLead: Lead = {
          id: row.id?.toString(), // Supabase returns bigint/number, Lead interface expects string
          fullName: row.full_name,
          email: row.email,
          phone: row.phone,
          propertyAddress: row.property_address,
          propertyType: row.property_type,
          message: row.message,
          status: row.status,
          createdAt: row.created_at,
        }
        leads.value.push(newLead)
      }
    } catch (err: any) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    leads,
    loading,
    error,
    submitLead,
  }
})
