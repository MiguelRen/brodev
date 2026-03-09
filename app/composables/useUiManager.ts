import { ref } from 'vue'

const isLeadModalOpen = ref(false)

export const useUiManager = () => {
  const openLeadModal = () => {
    isLeadModalOpen.value = true
  }

  const closeLeadModal = () => {
    isLeadModalOpen.value = false
  }

  return {
    isLeadModalOpen,
    openLeadModal,
    closeLeadModal
  }
}
