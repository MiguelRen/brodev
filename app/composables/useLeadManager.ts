import { storeToRefs } from 'pinia'
import { useLeadStore } from '~/stores/useLeadStore'
import type { Lead } from '~/interfaces/Lead'

/**
 * Manager Composable for Leads
 * Following ARCH_RULES.md: Components do not consume Pinia stores directly.
 */
export const useLeadManager = () => {
  const store = useLeadStore()
  const { leads, loading, error, stats } = storeToRefs(store)

  const createLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    // Business logic can be added here
    return await store.submitLead(leadData)
  }

  const fetchLeads = async () => {
    return await store.fetchLeads()
  }

  const fetchStats = async () => {
    return await store.fetchStats()
  }

  return {
    // Reactive State
    leads,
    loading,
    error,
    stats,
    // Actions
    createLead,
    fetchLeads,
    fetchStats
  }
}
