import { storeToRefs } from 'pinia'
import { useLeadStore } from '~/stores/useLeadStore'

/**
 * Manager Composable for Leads
 * Following ARCH_RULES.md: Components do not consume Pinia stores directly.
 */
export const useLeadManager = () => {
  const store = useLeadStore()
  const { leads, loading, error } = storeToRefs(store)

  const createLead = async (leadData: any) => {
    // Business logic can be added here
    return await store.submitLead(leadData)
  }

  return {
    // Reactive State
    leads,
    loading,
    error,
    // Actions
    createLead,
  }
}
