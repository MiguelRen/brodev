import { ref } from 'vue'

const isLeadModalOpen = ref(false)
const isPhoneModalOpen = ref(false)

export const useUiManager = () => {
  const openLeadModal = () => {
    isLeadModalOpen.value = true
  }

  const closeLeadModal = () => {
    isLeadModalOpen.value = false
  }

  const openPhoneModal = () => {
    isPhoneModalOpen.value = true
  }

  const closePhoneModal = () => {
    isPhoneModalOpen.value = false
  }

  return {
    isLeadModalOpen,
    openLeadModal,
    closeLeadModal,
    isPhoneModalOpen,
    openPhoneModal,
    closePhoneModal
  }
}
