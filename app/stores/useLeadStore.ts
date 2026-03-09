import { defineStore } from 'pinia'
import type { Lead } from '~/interfaces/Lead'

export const useLeadStore = defineStore('lead', () => {
  const supabase = useSupabaseClient()
  const leads = ref<Lead[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function submitLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) {
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
            status: 'pending'
          }
        ])
        .select()

      if (sbError) throw sbError
      
      if (data) {
        // Map back to camelCase as per BACKEND_GUIDE.md
        const newLead: Lead = {
          id: data[0].id,
          fullName: data[0].full_name,
          email: data[0].email,
          phone: data[0].phone,
          propertyAddress: data[0].property_address,
          propertyType: data[0].property_type,
          message: data[0].message,
          status: data[0].status,
          createdAt: data[0].created_at
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
